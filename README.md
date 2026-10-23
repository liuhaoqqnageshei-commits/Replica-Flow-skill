# ReplicaFlow · 复刻流

**Read the source. Rebuild the experience.**

从网址、源码和截图出发，把网站布局与交互还原成可运行、可验证、可继续修改的工程。

## 在线网站

[访问 ReplicaFlow 网站](https://liuhaoqqnageshei-commits.github.io/Replica-Flow-skill/) · [安装与使用教程](https://liuhaoqqnageshei-commits.github.io/Replica-Flow-skill/guide/install/)

网站顶部的 GitHub 图标可返回本仓库。网站源码在 `website/`，GitHub Pages 发布文件在 `docs/`。

## 包含什么

- **需求澄清模块**：区分事实与选择，按依赖分轮提问，已有决定不重问。
- **设计拆解模块**：源码与运行画面交叉核验，提取布局、素材、设计规则与动画规格。
- **质量评审模块**：按章节截图、对照、修复，检查功能和降级，保留真实差异。
- 六个阶段：检查输入 → 采集分析 → 确认报告 → 素材与设计系统 → 逐节构建 → 验收交付。

所有模块都在本包内，不需要另行安装其他技能。这个包提供工作流指令，不捆绑浏览器、生图模型、付费服务或某个前端框架；执行能力取决于宿主 Agent 可用的工具。

## 安装到本地 Codex

### 推荐：从 GitHub 安装

```sh
mkdir -p ~/.agents/skills
git clone https://github.com/liuhaoqqnageshei-commits/Replica-Flow-skill.git ~/.agents/skills/replica-flow
```

已有同名目录时先检查旧版，不要覆盖。也可以在 Codex 中让 `$skill-installer` 从[本仓库](https://github.com/liuhaoqqnageshei-commits/Replica-Flow-skill)安装。

### 不使用 Git：下载 ZIP


从 GitHub 的 Code → Download ZIP 下载后，顶层目录名可能是 `Replica-Flow-skill-main`；将它重命名为 `replica-flow`。网站提供的技能 ZIP 已使用这个目录名。

下载完整 ZIP 并解压；确认 `replica-flow/SKILL.md` 与 `references/` 在同一层。

### 方法一：手动复制

把整个 `replica-flow` 文件夹放到：

- 用户通用：`~/.agents/skills/replica-flow/`
- 当前项目：`你的项目/.agents/skills/replica-flow/`

如果同名目录已存在，先检查并备份旧版。不要把单个 SKILL.md 从其参考文件中拆开。

### 方法二：可选安装脚本

在解压后的项目目录运行（需要 Python 3，无第三方 Python 依赖）：

```sh
python3 scripts/install.py
```

Windows 可使用 `py scripts/install.py`。安装器默认复制到 `~/.agents/skills/replica-flow`，已有目录会停止，不会覆盖。自定义目标目录：

```sh
python3 scripts/install.py --target /path/to/project/.agents/skills/replica-flow
```

Codex 会发现新技能；若列表没有更新，重新启动 Codex。也可以把本包交给内置 `$skill-installer`，说明要从下载的文件或仓库安装。

安装位置与发现机制参考 [OpenAI 官方技能文档](https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills)。其他支持 Agent Skills 的客户端可把完整技能目录放入它们指定的 skills 路径；是否自动发现以客户端文档为准。

## 怎么使用

在 Agent 中选择 ReplicaFlow，或在 Codex 提示里写 `$replica-flow`。例如：

```text
使用 $replica-flow 复刻这个网站。
目标网址：https://example.com/
页面范围：首页＋关于页
源码或网页归档：[本地路径]
参考截图：[PNG路径]
内容替换为：[你的产品介绍]
验收设备：桌面为主，同时适配手机
图片策略：使用图片生成模型，失败则记录并先留空
先读取源码、补齐证据并展示完整分析报告，等我确认后再构建。
```

没有完整截图也可以开始。流程会先核查已有资料，尝试补采集，再说明仍然缺少什么。缺少浏览器或录屏能力时不会把未执行的检查说成完成。

报告确认后，局部反馈可以直接修改：

```text
继续当前 ReplicaFlow 项目。页脚人物应该在滚动到底部时出现，向上滚动收起。
请读已有分析与状态，核查原站触发条件，修正后截图复验，不重新访谈。
```

## 交付与边界

典型输出包含可编辑源码、运行方式、素材与提示词、分析、截图、差异记录及技术拆解。视觉与功能分别记录，未测项目保持未验证。图片与文案的有意替换不当作全图像素一致；内部评分不是官方评奖或一致率。

发布或部署项目须在用户授权范围内进行。复刻时核查参考站专属图片、字体、商标、模型和代码的使用条件。

本仓库为可独立安装的公开发行版。三个内部模块随包提供；原本机技能配置不属于运行前提。

## 目录

```text
replica-flow/
├── SKILL.md
├── agents/openai.yaml
├── references/
│   ├── modules/
│   ├── analysis-report.md
│   ├── component-motion-libraries.md
│   └── verification.md
├── scripts/install.py
├── README.md
└── LICENSE
```

## 许可证

本仓库原创指令、模块与安装器使用 MIT License。链接到的第三方组件、参考站和工具按各自许可证使用，未被本许可证重新授权。
