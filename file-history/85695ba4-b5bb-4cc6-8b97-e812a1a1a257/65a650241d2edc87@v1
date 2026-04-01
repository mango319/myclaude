# OpenClaw 定时任务配置文档

## 任务列表

### 1. 股票分析推送_10AM
```json
{
  "schedule": "0 10 * * 1-5",
  "timezone": "Asia/Shanghai",
  "message": "分析股票并推送结果",
  "delivery": "qqbot:c2c:DB0D276754D361B0256C70255C178BD8"
}
```
- **时间**: 工作日 10:00
- **功能**: 分析股票并推送到 QQ

### 2. 股票分析推送_2PM
```json
{
  "schedule": "0 14 * * 1-5",
  "timezone": "Asia/Shanghai",
  "message": "分析股票并推送结果",
  "delivery": "qqbot:c2c:DB0D276754D361B0256C70255C178BD8"
}
```
- **时间**: 工作日 14:00
- **功能**: 分析股票并推送到 QQ

### 3. AI Builders Digest (上午)
```json
{
  "schedule": "0 9 * * *",
  "timezone": "Asia/Shanghai",
  "message": "运行 follow-builders 技能生成今日 AI Builders 摘要",
  "delivery": "qqbot:c2c:DB0D276754D361B0256C70255C178BD8"
}
```
- **时间**: 每天 09:00
- **功能**: AI Builders 摘要推送到 QQ

### 4. AI Builders Digest (中午)
```json
{
  "schedule": "0 12 * * *",
  "timezone": "Asia/Shanghai",
  "message": "Run the follow-builders skill",
  "delivery": "last"
}
```
- **时间**: 每天 12:00
- **功能**: AI Builders 摘要

## 配置文件位置

- Windows: `C:\Users\Administrator\.openclaw\cron\jobs.json`
- Mac: `~/.openclaw/cron/jobs.json`

## 恢复步骤

配置文件会随 git 克隆自动恢复，但需要确保 OpenClaw 服务正在运行。
