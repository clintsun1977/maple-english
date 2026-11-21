@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Maple English 正在启动……关闭此窗口即停止。
start "" msedge http://localhost:8765/ 2>nul || start "" http://localhost:8765/
python -m http.server 8765 --bind 127.0.0.1
