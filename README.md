# 项目需求文档生成系统

本项目是基于 VitePress 构建的需求文档系统，用于管理和展示的需求规格说明。

## 使用说明

本项目采用 AI 辅助生成需求文档的方式，通过 `prompts/` 目录下的文件来指导文档生成：

1. `prompts/index.md`: 用于生成和调整首页内容
   - 包含网站名称、标语、特性等内容的调整说明
   - 修改后可通过 Cursor 的 Composer 功能执行生成

2. `prompts/logs.md`: 记录文档生成的过程和历史
   - 保存所有的修改记录和对话历史
   - 通过文件导入功能（`<<< @/filepath`）保持与源文件的同步
   - 可作为后续类似文档生成的参考

3. 使用方法：
   - 在 Cursor 中打开相应的 prompt 文件
   - 使用 Composer 功能执行文档生成
   - AI 会根据 prompt 内容自动生成或修改相应文档
   - 生成过程会被记录在 `logs.md` 中

4. 最佳实践：
   - 先在 prompt 文件中描述需求
   - 确认生成结果符合预期
   - 必要时进行手动调整
   - 保持 logs 文件的更新以便追踪变更

## 文档目录结构

```
docs/
├── overview/        # 项目概述
│   ├── background.md    # 项目背景
│   ├── target.md       # 项目目标
│   ├── content.md      # 建设内容
│   └── current-system.md # 系统现状
├── requirements/    # 需求文档
│   ├── user-roles.md    # 用户角色
│   ├── architecture.md  # 功能架构
│   ├── main-page.md     # 系统首页
│   ├── performance.md   # 性能需求
│   └── ...
├── specifications/ # 技术规格
│   ├── interfaces.md    # 接口设计
│   ├── database.md     # 数据库设计
│   └── prototype.md    # 原型设计
└── appendix/       # 附录
    ├── reports.md      # 报表清单
    └── process.md      # 项目过程资料

public/             # 静态资源
├── images/         # 图片资源
├── files/          # 文档文件
└── diagrams/       # 图表文件
```

## 开发环境

- Node.js 18+
- pnpm 8+

## 本地开发

1. 安装依赖：
```bash
pnpm install
```

2. 启动开发服务器：
```bash
npm run docs:dev
```

3. 构建文档：
```bash
npm run docs:build
```

4. 预览构建结果：
```bash
npm run docs:preview
```

5. 导出 PDF 文档：
```bash
npm run export-pdf
```

## 文档编写指南

1. Markdown 文件放置在对应的目录下
2. 静态资源文件：
   - 图片：放在 `public/images/` 目录
   - 文档：放在 `public/files/` 目录
   - 图表：放在 `public/diagrams/` 目录

3. 在 Markdown 中引用资源：
```markdown
![图片描述](/images/example.png)
[下载文档](/files/document.pdf)
```

## 注意事项

1. 提交前请确保文档格式正确
2. 图片建议使用 PNG 或 SVG 格式
3. 文件名使用小写字母，单词间用连字符（-）连接
4. 保持文档结构的一致性和完整性
