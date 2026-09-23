'use strict';
// Loaded before the application. Server-provided state is the sole account data source.
window.AccountSync=(()=>{
  const boot=window.ACCOUNT_BOOTSTRAP;
  if(!boot)return null; // Static local preview only; production never serves an unguarded app page.
  let revision=boot.revision, timer, pending=null, saving=false, failed=false, conflict=false;
  let message='已同步到你的账号';
  const show=()=>{const label=document.querySelector('#save-label');if(label)label.textContent=message;const status=document.querySelector('#account-sync-status');if(status)status.textContent=message;};
  async function flush(){
    clearTimeout(timer);if(saving||!pending||conflict)return !pending&&!saving;
    saving=true;const data=pending;pending=null;message='正在保存…';show();
    try{
      const response=await fetch('/api/workspace',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({revision,data}),credentials:'same-origin'});
      if(!response.ok){conflict=response.status===409;throw new Error(response.status===401?'登录已过期，请先导出备份再重新登录':conflict?'其他窗口已更新，请导出当前修改后刷新':'保存失败，修改仍在当前页面，请重试或导出');}
      revision=(await response.json()).revision;failed=false;message='已同步到你的账号';
    }catch(e){pending=pending||data;failed=true;message=e.message;}
    finally{saving=false;show();}
    if(pending&&!failed)return flush();return !pending;
  }
  function queue(data){pending=structuredClone(data);message=conflict?'其他窗口已更新，请导出当前修改后刷新':'有修改待保存';show();clearTimeout(timer);timer=setTimeout(flush,500);}
  function decorate(){
    if(document.querySelector('#account-control')){show();return;}
    const host=document.querySelector('.toolbar-right')||document.querySelector('.home-header');if(!host)return;
    const button=document.createElement('button');button.id='account-control';button.textContent=language==='zh'?'我的账号':'Account';button.className='text-button';button.title=boot.user.email;
    button.onclick=()=>{
      showDialog(language==='zh'?'我的账号':'My account',`<p>${esc(boot.user.name)}</p><p>${esc(boot.user.email)}</p><p id="account-sync-status"></p><p>${L('项目按账号保存。管理员可为排障与产品改进只读查看，访问会记录；不读取 ChatGPT 聊天记录。','Other users cannot access your projects. The site administrator may view saved projects for troubleshooting and improvements; access is logged.')}</p><button type="button" id="retry-account-save">${L('重试保存','Retry save')}</button> <button type="button" id="import-local-projects">${L('导入旧浏览器项目','Import legacy browser projects')}</button><p><a id="account-signout" href="/signout-with-chatgpt?return_to=%2F" target="_top">${L('退出登录','Sign out')}</a></p>`,()=>{});
      show();document.querySelector('#retry-account-save').onclick=flush;
      document.querySelector('#import-local-projects').onclick=()=>{
        let saved;try{saved=JSON.parse(localStorage.getItem('adc-projects-v2'));}catch{}
        if(!saved||!ADCCore.validateStore(saved)){toast('没有可导入的旧项目','No legacy projects to import');return;}
        let count=0;saved.projects.forEach(p=>{if(!storeData.projects.some(v=>v.id===p.id)){storeData.projects.push(structuredClone(p));count++;}});
        persist(true);render();toast(`已导入 ${count} 个项目；原浏览器备份仍保留`,`Imported ${count} projects; legacy backup retained`);
      };
      document.querySelector('#account-signout').onclick=async e=>{e.preventDefault();if(await flush()){location.assign('/signout-with-chatgpt?return_to=%2F');}else toast('尚有未保存修改，请先重试或导出备份','Unsaved changes remain; retry or export first');};
    };
    host.prepend(button);if(boot.isAdmin){const link=document.createElement('a');link.href='/admin';link.textContent=L('管理后台','Admin');link.className='text-button';host.prepend(link);}show();
  }
  window.addEventListener('beforeunload',e=>{if(pending||saving){e.preventDefault();e.returnValue='';}});
  window.addEventListener('online',()=>{if(failed&&!conflict)flush();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)flush();});
  return {boot,queue,flush,decorate};
})();
