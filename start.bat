echo off
cls
echo Starting Bot
pm2 start index.js --watch
pause