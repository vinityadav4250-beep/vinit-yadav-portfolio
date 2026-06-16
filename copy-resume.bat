@echo off
title Copy Resume to Portfolio
cd /d "%~dp0"

set SOURCE=C:\Users\vinit.yadav\Downloads\Vinit_Yadav_Resume.pdf
set DEST=%~dp0public\resume\Vinit_Yadav_Resume.pdf

echo.
echo Copying resume to portfolio...
echo.

if not exist "%SOURCE%" (
  echo [ERROR] Resume not found at:
  echo %SOURCE%
  echo.
  echo Please place your PDF in Downloads with this name,
  echo or edit SOURCE path in copy-resume.bat
  pause
  exit /b 1
)

if not exist "%~dp0public\resume\" mkdir "%~dp0public\resume\"

copy /Y "%SOURCE%" "%DEST%"

if %errorlevel% neq 0 (
  echo [ERROR] Copy failed.
  pause
  exit /b 1
)

echo.
echo [SUCCESS] Resume copied to:
echo %DEST%
echo.
echo Now refresh http://localhost:5173 and go to Resume section.
echo.
pause
