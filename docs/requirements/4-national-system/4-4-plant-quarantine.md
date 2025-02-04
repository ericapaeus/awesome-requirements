<a href="/diagrams/prototype/4-4-plant-quarantine.html" target="_blank" rel="noopener noreferrer">点击查看界面原型</a>

### 功能定义

本功能通过与《农业农村部植保植检系统管理系统》对接，实现植物检疫相关数据的统一管理和同步。支持省级设置任务并下发，数据一次填报即可直接同步到国家系统，实现植物检疫申报、审批、证书管理、产地检疫、调运检疫等数据的高效采集和共享，确保植物检疫工作的规范化和信息化管理。

### 流程与逻辑

1. 检疫申报流程
   - 申请人提交检疫申请
     - 填写基本信息（申请人、单位、联系方式等）
     - 选择检疫类型（产地检疫、调运检疫等）
     - 填写检疫物品信息（名称、数量、产地等）
     - 上传相关附件（营业执照、生产记录等）
   - 系统自动校验申请信息完整性
   - 生成唯一申请编号
   - 通知相关检疫人员处理

2. 检疫审批流程
   - 检疫员接收检疫申请
   - 现场检疫
     - 记录检疫时间、地点
     - 填写检疫结果
     - 上传检疫照片
     - 记录处理意见
   - 审批处理
     - 合格：生成检疫证书
     - 不合格：出具整改通知
   - 结果通知申请人

3. 证书管理流程
   - 证书生成
     - 自动生成证书编号
     - 填充检疫信息
     - 生成二维码
   - 证书打印
   - 证书查验
   - 证书统计
   - 证书档案管理

4. 数据同步流程
   - 定时同步国家系统数据
   - 实时上报本地检疫数据
   - 数据一致性校验
   - 异常数据处理

5. 异常处理机制
   - 网络异常：本地保存数据，待网络恢复后自动同步
   - 数据校验失败：提示具体错误并支持修正
   - 同步失败：记录失败原因，支持手动重试
   - 数据冲突：采用时间戳机制解决并发问题

### 数据项

#### 输入数据项

| 编号 | 交互对象 | 输入项 | 定义 | 数据类型 |
|------|----------|--------|------|----------|
| 1 | 检疫申请表 | 申请人姓名 | 申请检疫的个人或单位代表姓名 | String |
| 2 | 检疫申请表 | 申请单位 | 申请检疫的单位名称 | String |
| 3 | 检疫申请表 | 联系方式 | 申请人的联系电话 | String |
| 4 | 检疫申请表 | 检疫类型 | 申请的检疫类型（产地检疫/调运检疫） | String |
| 5 | 检疫物品表 | 物品名称 | 需要检疫的植物或产品名称 | String |
| 6 | 检疫物品表 | 数量 | 检疫物品的数量 | Decimal |
| 7 | 检疫物品表 | 产地 | 检疫物品的产地信息 | String |
| 8 | 检疫记录表 | 检疫时间 | 实施检疫的时间 | DateTime |
| 9 | 检疫记录表 | 检疫地点 | 实施检疫的地点 | String |
| 10 | 检疫记录表 | 检疫结果 | 检疫的具体结果 | String |

#### 输出数据项

| 编号 | 交互对象 | 输出项 | 定义 | 数据类型 |
|------|----------|--------|------|----------|
| 1 | 检疫证书 | 证书编号 | 检疫证书的唯一编号 | String |
| 2 | 检疫证书 | 有效期 | 检疫证书的有效期限 | DateTime |
| 3 | 检疫证书 | 二维码 | 证书验证用二维码 | Image |
| 4 | 统计报表 | 检疫数量 | 各类型检疫的数量统计 | Integer |
| 5 | 统计报表 | 合格率 | 检疫合格率统计 | Decimal |

#### 数据规则和约束

1. 必填项
   - 申请人基本信息（姓名、单位、联系方式）
   - 检疫物品信息（名称、数量、产地）
   - 检疫记录信息（时间、地点、结果）

2. 数据校验规则
   - 联系电话必须符合手机号码格式
   - 数量必须为正数
   - 检疫时间不能超过当前时间
   - 证书有效期必须大于当前时间
   - 合格率范围为0-100%

### 用户访问权限

1. 省级用户
   - 可查看全省检疫数据
   - 可进行检疫审批
   - 可管理检疫证书
   - 可查看统计分析
   - 可导出数据和报表

2. 市级用户
   - 可查看本地区检疫数据
   - 可进行检疫审批
   - 可管理检疫证书
   - 可查看本地区统计分析

3. 县级用户
   - 可查看本地区检疫数据
   - 可进行检疫申请
   - 可查看检疫结果
   - 可查看本地区统计分析

4. 申请人
   - 可提交检疫申请
   - 可查看自己的申请记录
   - 可查看检疫结果
   - 可下载检疫证书

### 界面设计

1. 检疫申请界面
   - 顶部：申请类型选择和操作按钮
   - 左侧：申请步骤导航
   - 中间：表单填写区域
   - 右侧：填写说明和帮助信息

2. 检疫审批界面
   - 顶部：任务筛选和操作按钮
   - 左侧：待办任务列表
   - 中间：检疫详情和审批区
   - 右侧：历史记录查看

3. 证书管理界面
   - 顶部：证书查询和操作按钮
   - 左侧：证书分类导航
   - 中间：证书列表和详情
   - 右侧：证书预览

4. 统计分析界面
   - 顶部：时间范围和筛选条件
   - 中间：统计图表展示
     - 检疫数量趋势图
     - 合格率分析图
     - 检疫类型分布图
     - 地区分布热力图
   - 底部：详细数据列表

5. 交互方式
   - 表单支持分步填写
   - 支持附件拖拽上传
   - 证书支持在线预览和打印
   - 数据支持多维度筛选和导出

### 招标文件中的原文信息

> 同步《农业农村部植保植检系统管理系统》设置的任务，支持省级设置任务并下发。数据一次填报，可直接同步到《农业农村部植保植检系统管理系统》中。支持安徽省承担的植物检疫申报、审批、证书管理、产地检疫、调运检疫等数据的上报。 