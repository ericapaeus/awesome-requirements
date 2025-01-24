---
title: 界面设计
description: 系统界面设计规范文档
---

# 界面设计规范

## 1. 设计原则

### 1.1 基本原则
- 简洁性：界面简洁清晰，避免视觉干扰
- 一致性：保持视觉和交互的一致性
- 高效性：减少操作步骤，提高效率
- 可用性：符合用户使用习惯，易于理解
- 美观性：遵循现代设计美学

### 1.2 交互原则
- 即时反馈：操作后给予及时反馈
- 容错设计：预防和处理用户错误
- 灵活控制：提供撤销和回退机制
- 状态可见：系统状态清晰可见
- 用户自由：支持用户自定义设置

## 2. 视觉规范

### 2.1 色彩规范
```css
/* 主色调 */
--primary-color: #1890ff;
--primary-hover: #40a9ff;
--primary-active: #096dd9;

/* 功能色 */
--success-color: #52c41a;
--warning-color: #faad14;
--error-color: #f5222d;
--info-color: #1890ff;

/* 中性色 */
--text-primary: rgba(0, 0, 0, 0.85);
--text-secondary: rgba(0, 0, 0, 0.65);
--text-disabled: rgba(0, 0, 0, 0.25);
--border-color: #d9d9d9;
--background-color: #f0f2f5;
```

### 2.2 字体规范
```css
/* 字体家族 */
--font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;

/* 字号 */
--font-size-small: 12px;
--font-size-base: 14px;
--font-size-medium: 16px;
--font-size-large: 20px;
--font-size-xlarge: 24px;

/* 行高 */
--line-height-tight: 1.2;
--line-height-base: 1.5;
--line-height-loose: 1.8;
```

### 2.3 间距规范
```css
/* 间距 */
--spacing-mini: 4px;
--spacing-small: 8px;
--spacing-base: 16px;
--spacing-large: 24px;
--spacing-xlarge: 32px;

/* 圆角 */
--border-radius-small: 2px;
--border-radius-base: 4px;
--border-radius-large: 8px;
```

## 3. 组件规范

### 3.1 按钮规范
```vue
<template>
  <!-- 主要按钮 -->
  <button class="btn btn-primary">
    主要按钮
  </button>

  <!-- 次要按钮 -->
  <button class="btn btn-secondary">
    次要按钮
  </button>

  <!-- 文本按钮 -->
  <button class="btn btn-text">
    文本按钮
  </button>
</template>

<style>
.btn {
  padding: var(--spacing-small) var(--spacing-base);
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-base);
  cursor: pointer;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  border: none;
}

.btn-secondary {
  background-color: white;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn-text {
  background-color: transparent;
  color: var(--primary-color);
  border: none;
}
</style>
```

### 3.2 表单规范
```vue
<template>
  <form class="form">
    <!-- 输入框 -->
    <div class="form-item">
      <label class="form-label">用户名</label>
      <input class="form-input" type="text" />
    </div>

    <!-- 下拉选择 -->
    <div class="form-item">
      <label class="form-label">角色</label>
      <select class="form-select">
        <option>管理员</option>
        <option>普通用户</option>
      </select>
    </div>
  </form>
</template>

<style>
.form {
  width: 100%;
}

.form-item {
  margin-bottom: var(--spacing-base);
}

.form-label {
  display: block;
  margin-bottom: var(--spacing-small);
  color: var(--text-primary);
}

.form-input,
.form-select {
  width: 100%;
  padding: var(--spacing-small);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-base);
}
</style>
```

## 4. 布局规范

### 4.1 栅格系统
```vue
<template>
  <div class="row">
    <div class="col col-4">
      <!-- 内容 -->
    </div>
    <div class="col col-8">
      <!-- 内容 -->
    </div>
  </div>
</template>

<style>
.row {
  display: flex;
  margin: 0 -8px;
}

.col {
  padding: 0 8px;
}

.col-4 {
  width: 33.33%;
}

.col-8 {
  width: 66.67%;
}
</style>
```

### 4.2 响应式设计
```css
/* 响应式断点 */
--breakpoint-xs: 480px;
--breakpoint-sm: 576px;
--breakpoint-md: 768px;
--breakpoint-lg: 992px;
--breakpoint-xl: 1200px;

/* 媒体查询 */
@media (max-width: 768px) {
  .col-4, .col-8 {
    width: 100%;
  }
}
```

## 5. 图标规范

### 5.1 图标库
使用 Element Plus 图标库或 Ant Design 图标库

### 5.2 图标使用
```vue
<template>
  <i class="icon icon-home"></i>
  <i class="icon icon-user"></i>
  <i class="icon icon-settings"></i>
</template>

<style>
.icon {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
}
</style>
``` 