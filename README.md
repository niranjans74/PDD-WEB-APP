# PlacementPro - Comprehensive Placement Preparation Portal

PlacementPro is a premium, full-stack placement preparation web and mobile application designed to help students track preparation, practice coding/quizzes, analyze resume ATS scores, explore company profiles, and organize schedules. 

The application is powered by a React + Vite frontend, an Express + Node.js backend, and is packaged for Android using Capacitor.

---

## 🚀 Key Features

*   **Authentication & Profiles:** Secure registration, login, profile setup wizard, and detailed user profiles.
*   **Student Dashboard:** Interactive homepage with overview metrics, daily goals, preparation progress, bookmark management, and notifications.
*   **Company Directory & Details:** Interactive company browser with search, filter, and detail pages showcasing available roles, interviews, and reviews.
*   **Preparation & Planner:** Customized learning modules, interactive calendar planners to schedule preparation, and progress tracking.
*   **Quiz Interface & Performance:** Interactive tests, live timers, detailed performance dashboards, and metrics.
*   **Resume Builder & ATS Checker:** Interactive chatbot resume builder and ATS checker that scans resumes for keywords, formatting, and metrics.
*   **Coding Platform:** Coding dashboard with an integrated code editor for solving coding challenges.
*   **Mobile Support:** Fully wrapped with Capacitor for native Android deployment.

---

## 🛠️ Technology Stack

*   **Frontend:** React, Vite, Tailwind CSS, Framer Motion, Lucide icons, Socket.io Client
*   **Backend:** Express, Node.js, MongoDB (Mongoose), Socket.io, Multer, JWT, BcryptJS
*   **Mobile Framework:** Capacitor (Android)
*   **Testing Suites:** Selenium WebDriver, Appium (Mobile), Axios (Load Simulation), ExcelJS

---

## 🌐 Staging & Backend Configuration

*   **Production Backend URL:** `https://placement-companion-backend.onrender.com`
*   **Database:** MongoDB Atlas (Cloud Database)

---

## ⚙️ Quick Start & Setup

### Prerequisites
*   Node.js (v18+)
*   MongoDB Instance (if running local database)
*   Android Studio & SDK (for Android APK generation)

### 1. Environment Configuration
Create a `.env` file in the root directory and copy the contents from `.env.example`:
```bash
cp .env.example .env
```
Fill in your database and security credentials:
```env
PORT=5000
FRONTEND_URL=http://localhost:5173/
BACKEND_URL=https://placement-companion-backend.onrender.com
VITE_BACKEND_URL=https://placement-companion-backend.onrender.com
JWT_SECRET=your_jwt_secret_key_here
MONGO_URI=your_mongodb_connection_uri
```

### 2. Backend Installation & Startup
```bash
# Install dependencies (runs at workspace root)
npm install

# Start backend server
npm run start:backend
```
The backend server will run on `http://localhost:5000` (or the configured `PORT`).

### 3. Frontend Installation & Startup
```bash
# Start Vite development server
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build and Package Android APK
To synchronize your web code with Capacitor and compile the native Android package:
```bash
# 1. Compile frontend build
npm run build

# 2. Sync Capacitor web assets to Android project
npx cap sync android

# 3. Build debug APK using Gradle wrapper
cd android
.\gradlew.bat assembleDebug
```
The resulting APK will be generated at:
`android/app/build/outputs/apk/debug/app-debug.apk`

---

## 📊 Automated Testing & Reports Dashboard

PlacementPro comes with a robust test execution and evidence suite containing **800+ test cases** across three domains. All results are aggregated into a combined interactive HTML dashboard and styled Excel spreadsheet.

### Running Test Automation & Report Generation
We have provided a comprehensive automated report generator that compiles and executes simulated/real test cases:
```bash
# Run the test execution and report generation suite
node testing/generate_reports.cjs
```

### Created Testing Folders & Artifacts:
*   📂 `testing/selenium/`
    *   `selenium_test_runner.js` — Executable Selenium WebDriver test runner.
    *   `test_case_documentation.md` — List of 350 UI test cases.
    *   `selenium_report.xlsx` / `.html` — Formatted Excel and interactive HTML dashboards.
    *   `screenshots/` — Screenshots captured from the web application interface.
*   📂 `testing/vulnerability/`
    *   `vulnerability_documentation.md` & `security_checklist.md` — Security checklists & schemas.
    *   `vulnerability_report.xlsx` / `.html` — 130 secure vulnerability test case reports.
*   📂 `testing/load/`
    *   `load_test_runner.js` — Executable API load test runner (simulates concurrent API hits).
    *   `load_test_documentation.md` — Load test scenarios (320 test runs).
    *   `load_report.xlsx` / `.html` — Throughput and latency metrics.
    *   `load_test_graph.svg` — Visual graph plotting latency vs concurrent user counts.
*   📂 `testing/final-artifacts/`
    *   `combined_final_report.html` — **Master interactive web dashboard** summarizing all 800 test cases with search, sorting, and charts.
    *   `combined_final_report.xlsx` — Multi-tab consolidated Excel workbook of all test runs.
