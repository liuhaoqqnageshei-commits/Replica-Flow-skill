# ReplicaFlow 网站

线上：https://liuhaoqqnageshei-commits.github.io/Replica-Flow-skill/

使用 Node.js 20 或更高版本，无需安装 npm 依赖。

本地预览：在 website 目录运行 `node build.mjs`，再运行 `node server.mjs`，打开 http://127.0.0.1:4173/ 。

检查：`node check.mjs`。

更新 GitHub Pages：在仓库根目录运行：

```sh
BASE_PATH=/Replica-Flow-skill BUILD_DIR=../docs node website/build.mjs
BASE_PATH=/Replica-Flow-skill BUILD_DIR=../docs node website/check.mjs
```

提交源码和 docs 的更改并推送到 main。GitHub Pages 从 main 分支的 /docs 发布，保留 .nojekyll 文件。

assets 图片由图片模型生成；Noto Sans SC 字体的许可证随 assets/NotoSansSC-OFL.txt 提供。页面布局为对 Josh W. Comeau 网站的设计学习复现，页面文字介绍 ReplicaFlow。
