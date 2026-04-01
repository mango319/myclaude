#!/bin/bash
# OpenClaw + Claude Code Mac 恢复脚本
#
# 使用方法：
# 1. 将此脚本保存到 Mac
# 2. chmod +x mac-restore.sh
# 3. ./mac-restore.sh

set -e

echo "========================================="
echo "   OpenClaw + Claude 完整恢复脚本"
echo "========================================="
echo ""

# 检查 git 是否安装
if ! command -v git &> /dev/null; then
    echo "❌ 错误: git 未安装"
    echo "请先安装: brew install git"
    exit 1
fi

# 检查是否已安装 OpenClaw
if ! command -v openclaw &> /dev/null; then
    echo "⚠️  OpenClaw 未安装"
    echo "请先安装 OpenClaw: https://github.com/anthropics/openclaw"
    echo ""
    read -p "按 Enter 继续（仅恢复配置文件）..."
fi

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. 恢复 OpenClaw 主配置
echo -e "${YELLOW}[1/3] 恢复 OpenClaw 主配置...${NC}"
if [ -d "$HOME/.openclaw" ]; then
    echo "  ⚠️  .openclaw 已存在，备份为 .openclaw.backup"
    mv "$HOME/.openclaw" "$HOME/.openclaw.backup"
fi

git clone https://github.com/mango319/myopenclaw.git "$HOME/.openclaw"
echo -e "${GREEN}  ✅ OpenClaw 主配置已恢复${NC}"
echo ""

# 2. 恢复 OpenClaw 工作区
echo -e "${YELLOW}[2/3] 恢复 OpenClaw 工作区...${NC}"
if [ ! -d "$HOME/.openclaw/workspace" ]; then
    git clone https://github.com/mango319/openclaw-workspace.git "$HOME/.openclaw/workspace-tmp"
    mv "$HOME/.openclaw/workspace-tmp"/* "$HOME/.openclaw/workspace/"
    mv "$HOME/.openclaw/workspace-tmp"/.[!.]* "$HOME/.openclaw/workspace/" 2>/dev/null || true
    rm -rf "$HOME/.openclaw/workspace-tmp"
    echo -e "${GREEN}  ✅ OpenClaw 工作区已恢复${NC}"
else
    echo "  ℹ️  workspace 已存在，跳过"
fi
echo ""

# 3. 恢复 Claude Code 配置
echo -e "${YELLOW}[3/3] 恢复 Claude Code 配置...${NC}"
if [ -d "$HOME/.claude" ]; then
    echo "  ⚠️  .claude 已存在，备份为 .claude.backup"
    mv "$HOME/.claude" "$HOME/.claude.backup"
fi

git clone https://github.com/mango319/myclaude.git "$HOME/.claude"
echo -e "${GREEN}  ✅ Claude Code 配置已恢复${NC}"
echo ""

# 完成
echo "========================================="
echo -e "${GREEN}   恢复完成！${NC}"
echo "========================================="
echo ""
echo "已恢复的内容："
echo "  ✅ OpenClaw 主配置 (~/.openclaw)"
echo "  ✅ OpenClaw 工作区 (~/.openclaw/workspace)"
echo "  ✅ Claude Code 配置 (~/.claude)"
echo ""
echo "定时任务配置: ~/.openclaw/CRON_TASKS.md"
echo ""
echo "下一步:"
echo "  1. 重启 OpenClaw 服务"
echo "  2. 检查定时任务: openclaw cron list"
echo "  3. 验证插件: openclaw plugin list"
echo ""
