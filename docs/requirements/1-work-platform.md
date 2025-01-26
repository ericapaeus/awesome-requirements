---
title: 1. 工作平台
description: 工作平台功能需求
---

# 1. 工作平台

工作平台是安徽省病虫疫情信息调度指挥平台的基础功能模块，为用户提供系统访问入口和日常工作界面。该模块包含系统登录、业务展示、信息发布、资料查询和首页管理等功能，实现用户权限管理、数据展示、信息发布和资料管理等基本功能。

## 功能逻辑图

```mermaid
graph LR
    A[工作平台] --> B[系统登录]
    A --> C[业务展示]
    C --> C1[病虫概览]
    C --> C2[实时监控]
    C --> C3[预警信息]
    C --> C4[待处理任务]
    A --> D[信息发布]
    D --> D1[新闻公告]
    D --> D2[病虫情报]
    D --> D3[病虫害知识]
    A --> E[资料查询]
    E --> E1[全文检索]
    E --> E2[分类检索]
    E --> E3[资料管理]
    A --> F[首页管理]
```

## 1.1 系统登录

<!--@include: @/docs/requirements/1-work-platform/1-1-system-login.md-->

## 1.2 业务展示

<!--@include: @/docs/requirements/1-work-platform/1-2-business-display.md-->

## 1.3 信息发布

<!--@include: @/docs/requirements/1-work-platform/1-3-information-publish.md-->

## 1.4 资料查询

<!--@include: @/docs/requirements/1-work-platform/1-4-resource-query.md-->

## 1.5 首页管理 

<!--@include: @/docs/requirements/1-work-platform/1-5-homepage-management.md-->
