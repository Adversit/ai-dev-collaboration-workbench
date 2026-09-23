import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
const root=resolve('dist');
const args=process.argv.slice(2), port=Number(args[args.indexOf('--port')+1])||4173;
createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,'http://local').pathname);const file=resolve(root,'.'+(pathname==='/'?'/index.html':pathname));if(!file.startsWith(root+'/'))throw Error();const data=await readFile(file);res.writeHead(200,{'Content-Type':({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json'})[extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data);}catch{res.writeHead(404);res.end('Not found');}}).listen(port,'0.0.0.0',()=>console.log('Preview ready'));
