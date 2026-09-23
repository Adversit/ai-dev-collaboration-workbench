import {readFile,readdir,mkdir,writeFile,cp} from 'node:fs/promises';
import {extname} from 'node:path';
const assets={};
for(const name of await readdir('dist')){
  const type={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'}[extname(name)];
  if(type)assets['/'+name]={type,body:await readFile('dist/'+name,'utf8')};
}
const worker=await readFile('server/worker.mjs','utf8');
await mkdir('dist/server',{recursive:true});
await writeFile('dist/server/index.js',worker+'\nexport default createWorker('+JSON.stringify(assets)+');\n');
await mkdir('dist/.openai',{recursive:true});
await cp('.openai/hosting.json','dist/.openai/hosting.json');
await cp('drizzle','dist/.openai/drizzle',{recursive:true});
console.log('Worker built with '+Object.keys(assets).length+' assets.');
