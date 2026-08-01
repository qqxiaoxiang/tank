# Tank Astro Starter

一个纯静态、移动端优先，并为 SEO 与生成式引擎优化（GEO）做好基础准备的 Astro 项目。

## 本地开发

需要 Node.js 22.12 或更高版本。

```bash
npm install
npm run dev
```

正式构建：

```bash
npm run build
npm run preview
```

构建结果位于 `dist/`，不依赖服务端运行环境。

## 上线前必须修改

1. 将 `astro.config.mjs` 的备用域名 `https://example.com` 替换为正式域名，或在构建平台设置 `SITE_URL`。
2. 在 `src/layouts/BaseLayout.astro` 修改站点名、默认分享图与默认元信息。
3. 在 `src/pages/index.astro` 修改页面内容和 JSON-LD 结构化数据。
4. 如需更换分享卡片，覆盖 `public/og.png` 并保持约 1.91:1 的横向比例。
5. 更新 `src/pages/llms.txt.ts` 中的网站简介和重要页面。

## 发布到 Cloudflare Pages

把仓库连接到 Cloudflare Pages，并使用以下设置：

- 构建命令：`npm run build`
- 输出目录：`dist`
- Node.js 版本：`22`
- 环境变量：`SITE_URL=https://你的正式域名`

本项目为纯静态输出，不需要安装 Cloudflare adapter。

## 发布到 GitHub Pages

仓库已经包含发布工作流。将代码推送到 `main` 分支，然后在仓库的 **Settings → Pages → Source** 中选择 **GitHub Actions**。工作流会自动处理项目子路径。

如果只想把 GitHub 用作代码仓库、使用 Cloudflare Pages 对外发布，可删除 `.github/workflows/deploy-github-pages.yml`，保留 `ci.yml` 做构建检查。

## 已包含的基础能力

- 静态 HTML 输出，默认无客户端 JavaScript
- 每页 title、description、canonical、Open Graph、Twitter Card
- Schema.org JSON-LD 结构化数据
- 自动 sitemap、robots.txt、llms.txt
- 语义化 HTML、跳转链接、键盘焦点和减少动画偏好
- 移动优先响应式布局
- Cloudflare 安全与缓存响应头
- 自定义 404 页面
