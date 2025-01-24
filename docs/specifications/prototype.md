---
title: 原型设计
description: 系统原型设计规范文档
---

# 原型设计规范

## 1. 登录注册

### 1.1 登录页面
```vue
<template>
  <div class="login-page">
    <div class="login-form">
      <h2>系统登录</h2>
      <form>
        <div class="form-item">
          <label>用户名</label>
          <input type="text" placeholder="请输入用户名" />
        </div>
        <div class="form-item">
          <label>密码</label>
          <input type="password" placeholder="请输入密码" />
        </div>
        <div class="form-item">
          <label>验证码</label>
          <div class="captcha">
            <input type="text" placeholder="请输入验证码" />
            <img src="captcha.jpg" alt="验证码" />
          </div>
        </div>
        <div class="form-item">
          <button type="submit">登录</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-form {
  width: 400px;
  padding: 40px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>
```

### 1.2 注册页面
```vue
<template>
  <div class="register-page">
    <div class="register-form">
      <h2>用户注册</h2>
      <form>
        <div class="form-item">
          <label>用户名</label>
          <input type="text" placeholder="请输入用户名" />
        </div>
        <div class="form-item">
          <label>密码</label>
          <input type="password" placeholder="请输入密码" />
        </div>
        <div class="form-item">
          <label>确认密码</label>
          <input type="password" placeholder="请确认密码" />
        </div>
        <div class="form-item">
          <label>邮箱</label>
          <input type="email" placeholder="请输入邮箱" />
        </div>
        <div class="form-item">
          <button type="submit">注册</button>
        </div>
      </form>
    </div>
  </div>
</template>
```

## 2. 系统主页

### 2.1 布局结构
```vue
<template>
  <div class="layout">
    <!-- 顶部导航 -->
    <header class="header">
      <div class="logo">需求管理系统</div>
      <nav class="nav">
        <a href="#" class="active">首页</a>
        <a href="#">需求管理</a>
        <a href="#">文档中心</a>
        <a href="#">统计分析</a>
      </nav>
      <div class="user">
        <span>欢迎，管理员</span>
        <a href="#">退出</a>
      </div>
    </header>

    <!-- 侧边栏 -->
    <aside class="sidebar">
      <div class="menu">
        <div class="menu-item">
          <i class="icon">📊</i>
          <span>仪表盘</span>
        </div>
        <div class="menu-item">
          <i class="icon">📝</i>
          <span>需求管理</span>
        </div>
        <div class="menu-item">
          <i class="icon">📁</i>
          <span>文档管理</span>
        </div>
        <div class="menu-item">
          <i class="icon">👥</i>
          <span>用户管理</span>
        </div>
      </div>
    </aside>

    <!-- 主要内容区 -->
    <main class="main">
      <div class="breadcrumb">
        首页 / 仪表盘
      </div>
      <div class="content">
        <!-- 内容区域 -->
      </div>
    </main>
  </div>
</template>

<style>
.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main";
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr;
  height: 100vh;
}

.header {
  grid-area: header;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.sidebar {
  grid-area: sidebar;
  background: #001529;
  color: white;
}

.main {
  grid-area: main;
  padding: 20px;
  background: #f0f2f5;
}
</style>
```

## 3. 需求管理

### 3.1 需求列表
```vue
<template>
  <div class="requirement-list">
    <!-- 搜索栏 -->
    <div class="search-bar">
      <input type="text" placeholder="搜索需求" />
      <select>
        <option value="">全部状态</option>
        <option value="draft">草稿</option>
        <option value="processing">处理中</option>
        <option value="completed">已完成</option>
      </select>
      <button class="primary">新建需求</button>
    </div>

    <!-- 需求表格 -->
    <table class="table">
      <thead>
        <tr>
          <th>需求编号</th>
          <th>需求标题</th>
          <th>优先级</th>
          <th>状态</th>
          <th>创建人</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>REQ-001</td>
          <td>用户登录功能优化</td>
          <td><span class="tag high">高</span></td>
          <td><span class="status processing">处理中</span></td>
          <td>张三</td>
          <td>2024-01-24</td>
          <td>
            <a href="#">查看</a>
            <a href="#">编辑</a>
            <a href="#">删除</a>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 分页 -->
    <div class="pagination">
      <a href="#">上一页</a>
      <span class="current">1</span>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">下一页</a>
    </div>
  </div>
</template>

<style>
.requirement-list {
  background: white;
  padding: 20px;
  border-radius: 4px;
}

.search-bar {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 12px;
  border-bottom: 1px solid #e8e8e8;
}
</style>
```

### 3.2 需求详情
```vue
<template>
  <div class="requirement-detail">
    <!-- 需求头部 -->
    <div class="detail-header">
      <h2>REQ-001：用户登录功能优化</h2>
      <div class="status">
        <span class="tag high">高优先级</span>
        <span class="status processing">处理中</span>
      </div>
    </div>

    <!-- 需求信息 -->
    <div class="detail-info">
      <div class="info-item">
        <label>创建人：</label>
        <span>张三</span>
      </div>
      <div class="info-item">
        <label>创建时间：</label>
        <span>2024-01-24</span>
      </div>
      <div class="info-item">
        <label>指派给：</label>
        <span>李四</span>
      </div>
    </div>

    <!-- 需求描述 -->
    <div class="detail-content">
      <h3>需求描述</h3>
      <div class="content-text">
        优化用户登录功能，包括：
        1. 添加记住密码功能
        2. 支持手机验证码登录
        3. 增加登录安全性检查
      </div>
    </div>

    <!-- 附件列表 -->
    <div class="attachments">
      <h3>附件</h3>
      <div class="file-list">
        <div class="file-item">
          <i class="icon">📎</i>
          <span>登录流程图.pdf</span>
          <a href="#">下载</a>
        </div>
      </div>
    </div>

    <!-- 评论区 -->
    <div class="comments">
      <h3>评论</h3>
      <div class="comment-list">
        <div class="comment-item">
          <div class="comment-user">王五</div>
          <div class="comment-content">建议增加单点登录功能</div>
          <div class="comment-time">2024-01-24 10:00</div>
        </div>
      </div>
      <div class="comment-input">
        <textarea placeholder="请输入评论"></textarea>
        <button>发表评论</button>
      </div>
    </div>
  </div>
</template>

<style>
.requirement-detail {
  background: white;
  padding: 20px;
  border-radius: 4px;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.detail-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.content-text {
  line-height: 1.6;
  margin-bottom: 20px;
}
</style>
```

## 4. 文档管理

### 4.1 文档中心
```vue
<template>
  <div class="document-center">
    <!-- 文档分类 -->
    <div class="category-tree">
      <div class="tree-node">
        <i class="icon">📁</i>
        <span>需求文档</span>
      </div>
      <div class="tree-node">
        <i class="icon">📁</i>
        <span>设计文档</span>
      </div>
      <div class="tree-node">
        <i class="icon">📁</i>
        <span>测试文档</span>
      </div>
    </div>

    <!-- 文档列表 -->
    <div class="document-list">
      <div class="toolbar">
        <button class="primary">新建文档</button>
        <button>导入</button>
        <button>导出</button>
      </div>

      <div class="doc-grid">
        <div class="doc-item">
          <div class="doc-icon">📄</div>
          <div class="doc-info">
            <div class="doc-title">系统设计说明书</div>
            <div class="doc-meta">
              <span>张三</span>
              <span>2024-01-24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.document-center {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 20px;
}

.category-tree {
  background: white;
  padding: 20px;
  border-radius: 4px;
}

.document-list {
  background: white;
  padding: 20px;
  border-radius: 4px;
}

.doc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>
```

## 5. 统计分析

### 5.1 数据仪表盘
```vue
<template>
  <div class="dashboard">
    <!-- 统计卡片 -->
    <div class="stat-cards">
      <div class="stat-card">
        <div class="stat-title">总需求数</div>
        <div class="stat-value">1,234</div>
        <div class="stat-trend up">↑ 12.3%</div>
      </div>
      <div class="stat-card">
        <div class="stat-title">进行中需求</div>
        <div class="stat-value">123</div>
        <div class="stat-trend down">↓ 5.2%</div>
      </div>
      <div class="stat-card">
        <div class="stat-title">已完成需求</div>
        <div class="stat-value">890</div>
        <div class="stat-trend up">↑ 8.7%</div>
      </div>
      <div class="stat-card">
        <div class="stat-title">文档数量</div>
        <div class="stat-value">456</div>
        <div class="stat-trend up">↑ 15.4%</div>
      </div>
    </div>

    <!-- 图表区域 -->
    <div class="charts">
      <div class="chart-item">
        <h3>需求趋势</h3>
        <div class="chart">
          <!-- 需求趋势图表 -->
        </div>
      </div>
      <div class="chart-item">
        <h3>需求分布</h3>
        <div class="chart">
          <!-- 需求分布图表 -->
        </div>
      </div>
    </div>

    <!-- 排行榜 -->
    <div class="rankings">
      <div class="rank-item">
        <h3>热门需求</h3>
        <ul class="rank-list">
          <li>
            <span class="rank-num">1</span>
            <span class="rank-title">用户登录优化</span>
            <span class="rank-value">123次查看</span>
          </li>
        </ul>
      </div>
      <div class="rank-item">
        <h3>活跃用户</h3>
        <ul class="rank-list">
          <li>
            <span class="rank-num">1</span>
            <span class="rank-title">张三</span>
            <span class="rank-value">45次提交</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.dashboard {
  display: grid;
  gap: 20px;
}

.stat-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.stat-card {
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.charts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.chart-item {
  background: white;
  padding: 20px;
  border-radius: 4px;
}

.rankings {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
``` 