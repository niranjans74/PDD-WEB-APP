@echo off
echo ==============================================
echo PlacementPro - Android APK Build Script
echo ==============================================
echo.
echo Requirements:
echo 1. Node.js (Installed)
echo 2. Java JDK 17+ (Required for Android)
echo 3. Android Studio & Android SDK (Required)
echo.

echo Step 1: Building the web application...
call npm run build
if %errorlevel% neq 0 (
    echo Error during npm run build. Exiting.
    exit /b %errorlevel%
)

echo Step 2: Syncing web assets to Capacitor Android project...
call npx cap sync android
if %errorlevel% neq 0 (
    echo Error during Capacitor sync. Exiting.
    exit /b %errorlevel%
)

echo Step 3: Compiling APK...
echo Notice: If this fails, ensure your ANDROID_HOME environment variable is set.
cd android
call gradlew assembleDebug
if %errorlevel% neq 0 (
    echo Error during gradlew assembleDebug. 
    echo If gradlew failed, you can open the project in Android Studio manually:
    echo Run: npx cap open android
    cd ..
    exit /b %errorlevel%
)
cd ..

echo.
echo ==============================================
echo BUILD SUCCESSFUL!
echo ==============================================
echo Your APK has been generated successfully.
echo You can find the APK at:
echo android\app\build\outputs\apk\debug\app-debug.apk
echo.
pause
