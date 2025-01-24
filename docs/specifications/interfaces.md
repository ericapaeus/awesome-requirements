---
title: 接口设计
description: 系统接口设计规范文档
---

# 接口设计规范

## 1. 接口规范

### 1.1 RESTful API规范
- 接口版本：v1
- 基础路径：`/api/v1`
- 请求方法：
  - GET：查询资源
  - POST：创建资源
  - PUT：更新资源
  - DELETE：删除资源
- 响应格式：
```json
{
  "code": 200,
  "message": "success",
  "data": {
    // 响应数据
  }
}
```

### 1.2 状态码规范
| 状态码 | 说明 | 使用场景 |
|-------|------|----------|
| 200 | 成功 | 请求成功 |
| 201 | 已创建 | 创建成功 |
| 400 | 请求错误 | 参数错误 |
| 401 | 未授权 | 未登录 |
| 403 | 禁止访问 | 无权限 |
| 404 | 未找到 | 资源不存在 |
| 500 | 服务器错误 | 系统异常 |

## 2. 认证接口

### 2.1 用户登录
```json
POST /api/v1/auth/login
Request:
{
  "username": "string",
  "password": "string",
  "captcha": "string"
}

Response:
{
  "code": 200,
  "message": "success",
  "data": {
    "token": "string",
    "user": {
      "id": "string",
      "username": "string",
      "role": "string"
    }
  }
}
```

### 2.2 用户登出
```json
POST /api/v1/auth/logout
Header:
{
  "Authorization": "Bearer {token}"
}

Response:
{
  "code": 200,
  "message": "success"
}
```

## 3. 需求管理接口

### 3.1 需求列表
```json
GET /api/v1/requirements
Query:
{
  "page": 1,
  "size": 10,
  "status": "string",
  "priority": "string"
}

Response:
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 100,
    "items": [{
      "id": "string",
      "title": "string",
      "status": "string",
      "priority": "string",
      "createTime": "datetime"
    }]
  }
}
```

### 3.2 需求详情
```json
GET /api/v1/requirements/{id}
Response:
{
  "code": 200,
  "message": "success",
  "data": {
    "id": "string",
    "title": "string",
    "description": "string",
    "status": "string",
    "priority": "string",
    "createUser": {
      "id": "string",
      "name": "string"
    },
    "assignUser": {
      "id": "string",
      "name": "string"
    },
    "createTime": "datetime",
    "updateTime": "datetime"
  }
}
```

## 4. 文档管理接口

### 4.1 文档上传
```json
POST /api/v1/documents
Header:
{
  "Content-Type": "multipart/form-data"
}

Request:
{
  "file": "file",
  "type": "string",
  "tags": ["string"]
}

Response:
{
  "code": 200,
  "message": "success",
  "data": {
    "id": "string",
    "name": "string",
    "url": "string",
    "size": "number"
  }
}
```

### 4.2 文档审批
```json
POST /api/v1/documents/{id}/approve
Request:
{
  "action": "approve/reject",
  "comment": "string"
}

Response:
{
  "code": 200,
  "message": "success",
  "data": {
    "status": "string",
    "approver": {
      "id": "string",
      "name": "string"
    },
    "approveTime": "datetime"
  }
}
```

## 5. 统计分析接口

### 5.1 需求统计
```json
GET /api/v1/statistics/requirements
Query:
{
  "startDate": "date",
  "endDate": "date",
  "type": "string"
}

Response:
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 100,
    "completed": 80,
    "processing": 15,
    "pending": 5,
    "trend": [{
      "date": "date",
      "count": "number"
    }]
  }
}
```

### 5.2 系统监控
```json
GET /api/v1/monitor/system
Response:
{
  "code": 200,
  "message": "success",
  "data": {
    "cpu": {
      "usage": "number",
      "cores": "number"
    },
    "memory": {
      "total": "number",
      "used": "number",
      "free": "number"
    },
    "disk": {
      "total": "number",
      "used": "number",
      "free": "number"
    }
  }
}
```

## 6. WebSocket接口

### 6.1 实时通知
```javascript
// 连接WebSocket
ws://api/v1/websocket/notifications

// 消息格式
{
  "type": "notification",
  "data": {
    "id": "string",
    "title": "string",
    "content": "string",
    "level": "string",
    "time": "datetime"
  }
}
```

### 6.2 在线协作
```javascript
// 连接WebSocket
ws://api/v1/websocket/collaboration/{documentId}

// 消息格式
{
  "type": "edit",
  "data": {
    "userId": "string",
    "operation": "insert/delete/update",
    "position": {
      "line": "number",
      "column": "number"
    },
    "content": "string"
  }
}
``` 