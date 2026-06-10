@echo off
title Stop Dev Server
cd /d "%~dp0"

echo Stopping any process on port 5173 or 5174...
echo.

for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":5173" ^| findstr "LISTENING"') do (
  echo Killing PID %%a on port 5173
  taskkill /F /PID %%a >nul 2>&1
)

for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":5174" ^| findstr "LISTENING"') do (
  echo Killing PID %%a on port 5174
  taskkill /F /PID %%a >nul 2>&1
)

echo Done. You can now run start.bat again.
echo.
pause
