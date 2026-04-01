# 知识库智能问答系统 - 天猫/京东/亚马逊客服接入

## 项目概述

构建一个基于Python的智能客服系统，支持知识库问答、意图识别、订单查询，并对接天猫、京东、亚马逊三大电商平台。

## 技术架构

```
┌─────────────────────────────────────────────────────────────────┐
│                        智能客服系统                              │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │  天猫客服    │  │  京东客服    │  │ 亚马逊客服   │              │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘              │
│         │                │                │                      │
├─────────┼────────────────┼────────────────┼──────────────────────┤
│         │      统一消息网关层              │                      │
│         └────────────────┴────────────────┘                      │
├─────────────────────────────────────────────────────────────────┤
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    意图识别引擎                            │  │
│  │  (NLP分类 + 规则引擎)                                      │  │
│  └───────────────────────────┬───────────────────────────────┘  │
│                              │                                   │
│         ┌────────────────────┼────────────────────┐             │
│         ▼                    ▼                    ▼             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐         │
│  │  知识库问答  │    │  订单查询   │    │  人工转接   │         │
│  │  (RAG/LangChain)│ │  (电商API)  │    │  (Webhook) │         │
│  └─────────────┘    └─────────────┘    └─────────────┘         │
├─────────────────────────────────────────────────────────────────┤
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    知识库存储层                            │  │
│  │  向量数据库 (Chroma/Pinecone) + 文档数据库                 │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## 项目结构

```
ecommerce-cs-bot/
├── config/
│   ├── __init__.py
│   ├── settings.py           # 全局配置
│   ├── platforms.yaml        # 平台API配置
│   └── prompts.yaml          # 提示词配置
├── core/
│   ├── __init__.py
│   ├── models.py             # 数据模型
│   ├── exceptions.py         # 异常定义
│   └── middleware.py         # 中间件
├── gateway/
│   ├── __init__.py
│   ├── base.py               # 平台基类
│   ├── tmall.py              # 天猫对接
│   ├── jd.py                 # 京东对接
│   ├── amazon.py             # 亚马逊对接
│   └── router.py             # 消息路由
├── nlp/
│   ├── __init__.py
│   ├── intent_classifier.py  # 意图分类
│   ├── entity_extractor.py   # 实体提取
│   └── rag_engine.py         # RAG问答引擎
├── services/
│   ├── __init__.py
│   ├── kb_service.py         # 知识库服务
│   ├── order_service.py      # 订单查询服务
│   ├── escalation_service.py # 人工转接服务
│   └── response_builder.py   # 回复构建
├── api/
│   ├── __init__.py
│   ├── main.py               # FastAPI入口
│   ├── routes/
│   │   ├── webhook.py        # 平台回调
│   │   ├── chat.py           # 对话接口
│   │   └── admin.py          # 管理接口
│   └── dependencies.py       # 依赖注入
├── knowledge_base/
│   ├── documents/            # 知识文档
│   ├── embeddings/           # 向量索引
│   └── loader.py             # 文档加载器
├── tests/
│   ├── unit/
│   ├── integration/
│   └── fixtures/
├── scripts/
│   ├── import_kb.py          # 导入知识库
│   ├── test_platforms.py     # 测试平台连接
│   └── init_db.py            # 初始化数据库
├── requirements.txt
├── Dockerfile
└── README.md
```

## 实现步骤

### Phase 1: 项目初始化与基础框架
1. 创建项目结构
2. 配置虚拟环境和依赖
3. 设置配置管理（环境变量 + YAML）
4. 建立日志系统
5. 数据模型定义

### Phase 2: 电商平台对接
1. **天猫对接** (`gateway/tmall.py`)
   - 实现阿里云客服SDK集成
   - 消息接收/发送
   - 事件处理（用户发送消息、订单变更等）

2. **京东对接** (`gateway/jd.py`)
   - 集成京东宙斯开放平台API
   - 消息协议适配

3. **亚马逊对接** (`gateway/amazon.py`)
   - 集成Amazon Messaging API
   - 市场点(Region)配置支持

### Phase 3: 意图识别引擎
1. **NLP分类器** (`nlp/intent_classifier.py`)
   - 基于大模型(通义千问/OpenAI)的意图分类
   - 意图类型: FAQ, ORDER_QUERY, COMPLAINT, RETURN, ESCALATION
   - 置信度阈值控制

2. **实体提取** (`nlp/entity_extractor.py`)
   - 提取订单号、SKU、时间等实体
   - 正则+LLM混合策略

### Phase 4: 知识库问答系统
1. **文档处理** (`knowledge_base/loader.py`)
   - 支持PDF/Word/Markdown/Excel
   - 文档分块策略

2. **向量存储**
   - Chroma/Pinecone集成
   - Embedding模型配置

3. **RAG引擎** (`nlp/rag_engine.py`)
   - 语义检索 + LLM生成
   - 引用来源标注
   - 多轮对话上下文

### Phase 5: 订单查询服务
1. **统一订单接口** (`services/order_service.py`)
   - 适配三大平台订单API
   - 订单状态标准化
   - 物流追踪

2. **缓存策略**
   - Redis缓存热数据
   - TTL配置

### Phase 6: 人工转接机制
1. **转接触发条件**
   - 意图为ESCALATION
   - 连续失败次数
   - 负面情绪检测
   - 特定关键词

2. **通知系统** (`services/escalation_service.py`)
   - Webhook通知人工客服
   - 对话上下文传递
   - 工单创建

### Phase 7: API服务层
1. **FastAPI应用** (`api/main.py`)
   - WebSocket支持实时对话
   - RESTful管理接口
   - 健康检查/监控端点

2. **平台回调处理** (`api/routes/webhook.py`)
   - 签名验证
   - 消息去重
   - 异步处理

### Phase 8: 测试与部署
1. 单元测试覆盖
2. 集成测试（平台Mock）
3. Docker容器化
4. CI/CD配置

## 核心技术选型 (已确认)

| 组件 | 技术选型 | 说明 |
|------|----------|------|
| Web框架 | FastAPI | 异步高性能，自动文档 |
| LLM | **通义千问 (DashScope)** | ✅ 已选：国内稳定访问，API成本低，中文表现优秀 |
| 向量DB | **Chroma** | ✅ 已选：开源免费，可本地部署，适合中小规模 |
| 文档处理 | LangChain | 成熟的RAG框架 |
| 消息队列 | Redis + Celery | 异步任务处理 |
| 缓存 | Redis | 热数据缓存 |
| 数据库 | PostgreSQL | 关系数据存储 |
| 部署 | **Docker Compose** | ✅ 已选：容器化一键部署，包含Nginx反向代理 |

## 关键API端点设计

```python
# 对话接口
POST /api/v1/chat/message          # 发送消息
GET  /api/v1/chat/history/{id}     # 对话历史

# 平台回调
POST /api/v1/webhook/tmall         # 天猫回调
POST /api/v1/webhook/jd            # 京东回调
POST /api/v1/webhook/amazon        # 亚马逊回调

# 管理
POST /api/v1/kb/upload             # 上传知识文档
GET  /api/v1/kb/search             # 搜索知识库
POST /api/v1/admin/escalate        # 人工转接
GET  /api/v1/analytics/dashboard   # 数据看板
```

## 配置文件示例 (config/platforms.yaml)

```yaml
tmall:
  app_key: "${TMALL_APP_KEY}"
  app_secret: "${TMALL_APP_SECRET}"
  sandbox: false
  webhook_url: "/api/v1/webhook/tmall"

jd:
  app_key: "${JD_APP_KEY}"
  app_secret: "${JD_APP_SECRET}"
  token_url: "https://api.jd.com/routerjson"

amazon:
  seller_id: "${AMAZON_SELLER_ID}"
  marketplace_id: "${AMAZON_MARKETPLACE_ID}"
  aws_access_key: "${AWS_ACCESS_KEY}"
  aws_secret_key: "${AWS_SECRET_KEY}"
  regions:
    - NA: "ATVPDKIKX0DER"
    - EU: "A1PA6795UKMFR9"
    - FE: "A1VC38T7YXB5Y6"
```

## 依赖包 (requirements.txt)

```txt
# Web框架
fastapi==0.109.0
uvicorn[standard]==0.27.0
python-multipart==0.0.6

# LLM & RAG
langchain==0.1.0
langchain-community==0.0.10
dashscope==1.14.0          # 通义千问
openai==1.10.0
chromadb==0.4.22
sentence-transformers==2.3.1

# 数据库
sqlalchemy==2.0.25
psycopg2-binary==2.9.9
redis==5.0.1

# 任务队列
celery==5.3.6
flower==2.0.1

# 工具
pyyaml==6.0.1
python-dotenv==1.0.0
pydantic==2.5.3
pydantic-settings==2.1.0
httpx==0.26.0
aiofiles==23.2.1

# 电商平台SDK
top-sdk==20231225          # 天猫
jd-sdk==3.0.0              # 京东
boto3==1.34.23             # 亚马逊AWS

# 测试
pytest==7.4.4
pytest-asyncio==0.23.3
pytest-mock==3.12.0
```

## Docker Compose 部署配置 (docker-compose.yml)

```yaml
version: '3.8'

services:
  # 主应用
  app:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/csbot
      - REDIS_URL=redis://redis:6379/0
      - DASHSCOPE_API_KEY=${DASHSCOPE_API_KEY}
    volumes:
      - ./knowledge_base:/app/knowledge_base
      - ./config:/app/config
    depends_on:
      - db
      - redis

  # PostgreSQL 数据库
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: csbot
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

  # Redis 缓存/消息队列
  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

  # Celery 异步任务
  celery_worker:
    build: .
    command: celery -A core.celery worker -l info
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/csbot
      - REDIS_URL=redis://redis:6379/0
    depends_on:
      - db
      - redis

  # Nginx 反向代理
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app

volumes:
  postgres_data:
  redis_data:
```

## 验证测试计划

### 1. 单元测试
- 意图分类器准确率测试
- 知识库检索召回率测试
- 各平台消息格式转换测试

### 2. 集成测试
- 模拟天猫消息流
- 模拟京东订单查询
- 模拟人工转接流程

### 3. 性能测试
- 并发消息处理能力
- 知识库检索响应时间
- 内存/CPU资源占用

### 4. 验收场景
1. 用户询问FAQ → 知识库准确回答
2. 用户查询订单 → 返回正确订单状态
3. 用户投诉 → 意图识别并转人工
4. 连续对话 → 上下文正确保持
