---
title: 5. 防治监管
description: 防治监管功能需求
---

# 5. 防治监管

防治监管模块建立专业化的防治服务监管体系，实现对防治组织、设备和作业的全过程管理。系统通过对飞防服务组织、无人机手、作业过程等多个环节的监管，确保防治工作的规范性和有效性。同时，通过无人机监管和病虫害防控调度功能，实现对防治工作的精细化管理和科学调度。

## 功能逻辑图

```mermaid
graph LR
    A[防治监管] --> B[防治服务监管]
    B --> B1[飞防服务组织管理]
    B --> B2[无人机手管理]
    B --> B3[飞防项目管理]
    B --> B4[项目作业调度]
    B --> B5[作业打卡]
    B --> B6[作业轨迹追踪]
    B --> B7[项目进度监控]
    B --> B8[项目评价管理]
    A --> C[无人机监管]
    C --> C1[数据展示]
    C --> C2[数据管理]
    C --> C3[接口管理]
    C --> C4[数据分析]
    A --> D[病虫害防控调度]
    D --> D1[任务下发]
    D --> D2[监测数据采集]
    D --> D3[防控数据采集]
    D --> D4[数据查询汇总]
    D --> D5[防治物资管理]
```

## 5.1 防治服务监管

<!--@include: @/docs/requirements/5-prevention-supervision/5-1-service-supervision.md-->

## 5.2 无人机监管

<!--@include: @/docs/requirements/5-prevention-supervision/5-2-uav-supervision.md-->

## 5.3 病虫害防控调度

<!--@include: @/docs/requirements/5-prevention-supervision/5-3-pest-control-scheduling.md--> 