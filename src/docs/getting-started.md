---
title: 快速开始
published: true
date: 2024-09-20 12:48:00
---

# 快速开始

Mkdocs Svelte 是基于 SvelteKit 的文档站点生成器，其灵感来自 mkdocs-material。它使用 mdsvex 进行 Markdown 渲染，允许在文档中无缝集成 Svelte 组件，提供更灵活、更强大的文档编写体验。

## 安装

要开始使用 Mkdocs Svelte，请按照以下步骤操作：

1. 克隆版本库：

```bash
git clone https://github.com/lshiy/mkdocs-svelte.git
cd mkdocs-svelte
```

2. 安装依赖项：

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

您的网站现在应该运行在 `http://localhost:5173`。

## 配置

Mkdocs Svelte 站点的主要配置文件是 `mkdocs.yaml`。您可以在此设置网站的各种选项：

```yaml:mkdocs.yaml
# Project information
site_name: Mkdocs Svelte
site_url: https://mkdocs-svelte.gxzv.com
site_author: JU Chengren

# Repository
repo_name: lshiy/mkdocs-svelte
repo_url: https://github.com/lshiy/mkdocs-svelte

# Home
home_title: 文档从未如此简单
home_description: ...
```

根据项目需要自定义这些设置。

## 添加内容

1. 在 `src/docs` 目录中创建新的 Markdown 文件。
2. 在 `mkdocs.yaml` 中的导航中添加新页面：

```yaml:mkdocs.yaml
nav:
  - 主页: /
  - 快速开始:
    - 安装: getting-started.md
```

3. 得益于 mdsvex 集成，您可以直接在 Markdown 文件中使用 Svelte 组件。

## 为生产而构建

要为生产构建网站，请运行

```bash
npm run build
```

这将在 `.zeabur/output` 目录中生成网站所需文件。若要查看运行效果，请执行

```bash
npm run preview
```

## 部署

Mkdocs Svelte 支持并推荐使用无服务器（Serverless）部署。

您可以将网站部署到 Zeabur、Vercel、Netlify 等平台或任何其他支持 SvelteKit 应用程序的服务。