import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname,join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { posts } from './content.mjs';
const root=join(dirname(fileURLToPath(import.meta.url)),process.env.BUILD_DIR||'dist');
const files=['index.html','about/index.html',...posts.map(p=>`guide/${p.slug}/index.html`),'404.html'];
const errors=[];let localLinks=0;
for(const file of files){const html=await readFile(join(root,file),'utf8');if((html.match(/<h1[ >]/g)||[]).length!==1)errors.push(`${file}: h1数量不是1`);if(!html.includes('lang="zh-CN"'))errors.push(`${file}: 缺语言`);for(const [,href] of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(!href.startsWith('/'))continue;const path=decodeURIComponent(href.split(/[?#]/)[0]);const prefix=process.env.BASE_PATH||'';if(prefix&&!path.startsWith(prefix+'/'))errors.push(`${file}: 引用缺少发布目录 ${href}`);const local=prefix?path.slice(prefix.length):path;const target=join(root,local.endsWith('/')?local+'index.html':local);if(!existsSync(target))errors.push(`${file}: 无效本地引用 ${href}`);localLinks++;}}
const result={pages:files.length,detailPages:posts.length,localLinksChecked:localLinks,errors};
await writeFile(join(root,'../check-result.json'),JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));if(errors.length)process.exitCode=1;
