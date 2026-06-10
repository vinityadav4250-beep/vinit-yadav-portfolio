@echo off
title Vinit Yadav Portfolio - Dev Server
cd /d "%~dp0"

echo.
echo ========================================
echo   Vinit Yadav Portfolio - Local Server
echo ========================================
echo.

where node >nul 2>&1
if %errorlevel% neq 0 (
  echo [ERROR] Node.js is not installed.
  echo Download from: https://nodejs.org
  pause
  exit /b 1
)

echo Node version:
node -v
echo.

if not exist "node_modules\" (
  echo Installing dependencies...
  call npm install
  if %errorlevel% neq 0 (
    echo [ERROR] npm install failed.
    pause
    exit /b 1
  )
  echo.
)

echo Freeing port 5173 if already in use...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":5173" ^| findstr "LISTENING"') do (
  taskkill /F /PID %%a >nul 2>&1
)
echo.

echo ========================================
echo   STARTING SERVER - READ CAREFULLY
echo ========================================
echo.
echo 1. Wait until you see:  VITE ... ready
echo 2. Look for the URL:     http://localhost:5173/
echo 3. Open that EXACT URL in Google Chrome
echo 4. DO NOT close this window
echo 5. DO NOT press Y when asked to terminate
echo.
echo ========================================
echo.

call npm run dev

echo.
echo Server stopped.
pause
