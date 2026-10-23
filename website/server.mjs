import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, resolve, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=join(dirname(fileURLToPath(import.meta.url)),process.env.BUILD_DIR||'dist');
const port=Number(process.env.PORT||4173);
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.xml':'application/rss+xml; charset=utf-8'};
const server=http.createServer(async(req,res)=>{try{let path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const prefix=process.env.BASE_PATH||'';if(prefix){if(!path.startsWith(prefix+'/')&&path!==prefix){res.writeHead(404);return res.end('Not found');}path=path.slice(prefix.length)||'/';}let target=resolve(root,'.'+path);if(target!==root&&!target.startsWith(root+sep)){res.writeHead(403);return res.end('Forbidden');}try{if((await stat(target)).isDirectory())target=join(target,'index.html');const data=await readFile(target);res.writeHead(200,{'Content-Type':mime[extname(target)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data);}catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(await readFile(join(root,'404.html')));}}catch{res.writeHead(400);res.end('Bad request');}});
server.listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}/`));
