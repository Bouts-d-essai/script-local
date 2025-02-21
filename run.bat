@echo off

:: Get script directory
set "SCRIPT_DIR=%~dp0"
set "ECOUTE_JS=%SCRIPT_DIR%ecoute.js"

:: Run Nodemon on ecoute.js

:loop
echo 🚀 Running nodemon for ecoute.js...
node "%ECOUTE_JS%"

goto loop
