# API Load & Stress Performance Documentation

This folder documents performance metrics gathered during stress tests on the application endpoints.

## Load Testing Metrics Summary

*   **Total Simulated Requests:** 2,763,020 requests
*   **Passed Requests:** 100%
*   **Error Rate:** 0.00%
*   **Maximum Target Concurrency:** 500 Virtual Users (VUs)
*   **Global Average Latency:** 91 ms

## Load Test Iterations Database

| Test ID | Method | API Endpoint | Description | VUs | Requests | Avg Latency | Max Latency | Throughput | Status |
| :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| `TC-LOD-001` | `POST` | `/api/auth/login` | User authentication API endpoint | 10 | 220 | 31 ms | 133 ms | 100.82 r/s | `Passed` |
| `TC-LOD-002` | `POST` | `/api/auth/register` | User signup API endpoint | 25 | 1000 | 113 ms | 686 ms | 166.11 r/s | `Passed` |
| `TC-LOD-003` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 50 | 1800 | 30 ms | 151 ms | 697.67 r/s | `Passed` |
| `TC-LOD-004` | `GET` | `/api/companies/list` | Company list listing directory API | 100 | 2300 | 35 ms | 115 ms | 997.83 r/s | `Passed` |
| `TC-LOD-005` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 150 | 7050 | 35 ms | 173 ms | 2241.65 r/s | `Passed` |
| `TC-LOD-006` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 200 | 4600 | 41 ms | 155 ms | 1882.93 r/s | `Passed` |
| `TC-LOD-007` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 300 | 13500 | 44 ms | 148 ms | 3879.31 r/s | `Passed` |
| `TC-LOD-008` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 400 | 24000 | 48 ms | 216 ms | 5479.45 r/s | `Passed` |
| `TC-LOD-009` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 500 | 30500 | 189 ms | 1064 ms | 2340.93 r/s | `Passed` |
| `TC-LOD-010` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 10 | 380 | 30 ms | 144 ms | 143.94 r/s | `Passed` |
| `TC-LOD-011` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 25 | 800 | 343 ms | 1680 ms | 64.12 r/s | `Passed` |
| `TC-LOD-012` | `POST` | `/api/auth/login` | User authentication API endpoint | 50 | 2850 | 32 ms | 153 ms | 857.4 r/s | `Passed` |
| `TC-LOD-013` | `POST` | `/api/auth/register` | User signup API endpoint | 100 | 2300 | 128 ms | 730 ms | 517.55 r/s | `Passed` |
| `TC-LOD-014` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 150 | 6000 | 36 ms | 157 ms | 2040.82 r/s | `Passed` |
| `TC-LOD-015` | `GET` | `/api/companies/list` | Company list listing directory API | 200 | 12200 | 38 ms | 128 ms | 3195.39 r/s | `Passed` |
| `TC-LOD-016` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 300 | 7800 | 43 ms | 165 ms | 2979.37 r/s | `Passed` |
| `TC-LOD-017` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 400 | 10400 | 50 ms | 171 ms | 3714.29 r/s | `Passed` |
| `TC-LOD-018` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 500 | 20000 | 56 ms | 221 ms | 5347.59 r/s | `Passed` |
| `TC-LOD-019` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 10 | 550 | 30 ms | 114 ms | 174.6 r/s | `Passed` |
| `TC-LOD-020` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 25 | 1450 | 116 ms | 590 ms | 176.23 r/s | `Passed` |
| `TC-LOD-021` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 50 | 2000 | 32 ms | 109 ms | 719.42 r/s | `Passed` |
| `TC-LOD-022` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 100 | 6400 | 374 ms | 2069 ms | 251.61 r/s | `Passed` |
| `TC-LOD-023` | `POST` | `/api/auth/login` | User authentication API endpoint | 150 | 9150 | 37 ms | 134 ms | 2435.45 r/s | `Passed` |
| `TC-LOD-024` | `POST` | `/api/auth/register` | User signup API endpoint | 200 | 11800 | 143 ms | 839 ms | 1187.48 r/s | `Passed` |
| `TC-LOD-025` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 300 | 13200 | 43 ms | 169 ms | 3891.51 r/s | `Passed` |
| `TC-LOD-026` | `GET` | `/api/companies/list` | Company list listing directory API | 400 | 13600 | 48 ms | 224 ms | 4342.27 r/s | `Passed` |
| `TC-LOD-027` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 500 | 31000 | 54 ms | 241 ms | 6394.39 r/s | `Passed` |
| `TC-LOD-028` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 10 | 590 | 30 ms | 112 ms | 180.43 r/s | `Passed` |
| `TC-LOD-029` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 25 | 550 | 31 ms | 108 ms | 252.06 r/s | `Passed` |
| `TC-LOD-030` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 50 | 3300 | 32 ms | 131 ms | 913.62 r/s | `Passed` |
| `TC-LOD-031` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 100 | 2900 | 126 ms | 846 ms | 562.67 r/s | `Passed` |
| `TC-LOD-032` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 150 | 9300 | 38 ms | 152 ms | 2411.83 r/s | `Passed` |
| `TC-LOD-033` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 200 | 10200 | 425 ms | 2768 ms | 440.13 r/s | `Passed` |
| `TC-LOD-034` | `POST` | `/api/auth/login` | User authentication API endpoint | 300 | 6000 | 44 ms | 153 ms | 2521.01 r/s | `Passed` |
| `TC-LOD-035` | `POST` | `/api/auth/register` | User signup API endpoint | 400 | 23200 | 178 ms | 984 ms | 1962.11 r/s | `Passed` |
| `TC-LOD-036` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 500 | 16500 | 55 ms | 178 ms | 4977.38 r/s | `Passed` |
| `TC-LOD-037` | `GET` | `/api/companies/list` | Company list listing directory API | 10 | 470 | 31 ms | 128 ms | 158.94 r/s | `Passed` |
| `TC-LOD-038` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 25 | 650 | 32 ms | 110 ms | 278.73 r/s | `Passed` |
| `TC-LOD-039` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 50 | 2750 | 31 ms | 111 ms | 858.03 r/s | `Passed` |
| `TC-LOD-040` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 100 | 4300 | 33 ms | 141 ms | 1473.11 r/s | `Passed` |
| `TC-LOD-041` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 150 | 8550 | 35 ms | 139 ms | 2446.35 r/s | `Passed` |
| `TC-LOD-042` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 200 | 4800 | 152 ms | 888 ms | 932.4 r/s | `Passed` |
| `TC-LOD-043` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 300 | 15300 | 43 ms | 196 ms | 4142.97 r/s | `Passed` |
| `TC-LOD-044` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 400 | 24400 | 507 ms | 3037 ms | 752.46 r/s | `Passed` |
| `TC-LOD-045` | `POST` | `/api/auth/login` | User authentication API endpoint | 500 | 28500 | 53 ms | 233 ms | 6303.92 r/s | `Passed` |
| `TC-LOD-046` | `POST` | `/api/auth/register` | User signup API endpoint | 10 | 230 | 110 ms | 556 ms | 57.07 r/s | `Passed` |
| `TC-LOD-047` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 25 | 1625 | 29 ms | 125 ms | 480.06 r/s | `Passed` |
| `TC-LOD-048` | `GET` | `/api/companies/list` | Company list listing directory API | 50 | 2000 | 30 ms | 140 ms | 740.74 r/s | `Passed` |
| `TC-LOD-049` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 100 | 3300 | 34 ms | 131 ms | 1258.58 r/s | `Passed` |
| `TC-LOD-050` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 150 | 9450 | 38 ms | 137 ms | 2426.81 r/s | `Passed` |
| `TC-LOD-051` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 200 | 13200 | 37 ms | 163 ms | 3348.55 r/s | `Passed` |
| `TC-LOD-052` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 300 | 14400 | 42 ms | 142 ms | 4095.56 r/s | `Passed` |
| `TC-LOD-053` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 400 | 27200 | 187 ms | 1065 ms | 1913.34 r/s | `Passed` |
| `TC-LOD-054` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 500 | 26000 | 53 ms | 189 ms | 6109.02 r/s | `Passed` |
| `TC-LOD-055` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 10 | 230 | 325 ms | 1812 ms | 25.63 r/s | `Passed` |
| `TC-LOD-056` | `POST` | `/api/auth/login` | User authentication API endpoint | 25 | 1475 | 32 ms | 125 ms | 435.36 r/s | `Passed` |
| `TC-LOD-057` | `POST` | `/api/auth/register` | User signup API endpoint | 50 | 1750 | 116 ms | 705 ms | 314.75 r/s | `Passed` |
| `TC-LOD-058` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 100 | 4900 | 35 ms | 163 ms | 1524.11 r/s | `Passed` |
| `TC-LOD-059` | `GET` | `/api/companies/list` | Company list listing directory API | 150 | 4950 | 35 ms | 149 ms | 1864.41 r/s | `Passed` |
| `TC-LOD-060` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 200 | 9400 | 38 ms | 127 ms | 2860.62 r/s | `Passed` |
| `TC-LOD-061` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 300 | 20100 | 45 ms | 196 ms | 4451.83 r/s | `Passed` |
| `TC-LOD-062` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 400 | 27600 | 47 ms | 218 ms | 5819.1 r/s | `Passed` |
| `TC-LOD-063` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 500 | 25500 | 52 ms | 233 ms | 6141.62 r/s | `Passed` |
| `TC-LOD-064` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 10 | 690 | 108 ms | 734 ms | 77.08 r/s | `Passed` |
| `TC-LOD-065` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 25 | 1425 | 30 ms | 130 ms | 443.93 r/s | `Passed` |
| `TC-LOD-066` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 50 | 2150 | 335 ms | 2007 ms | 135.18 r/s | `Passed` |
| `TC-LOD-067` | `POST` | `/api/auth/login` | User authentication API endpoint | 100 | 4500 | 35 ms | 154 ms | 1463.41 r/s | `Passed` |
| `TC-LOD-068` | `POST` | `/api/auth/register` | User signup API endpoint | 150 | 7050 | 130 ms | 882 ms | 926.41 r/s | `Passed` |
| `TC-LOD-069` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 200 | 5400 | 38 ms | 131 ms | 2137.77 r/s | `Passed` |
| `TC-LOD-070` | `GET` | `/api/companies/list` | Company list listing directory API | 300 | 12900 | 44 ms | 144 ms | 3803.07 r/s | `Passed` |
| `TC-LOD-071` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 400 | 8400 | 48 ms | 225 ms | 3349.28 r/s | `Passed` |
| `TC-LOD-072` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 500 | 11500 | 54 ms | 225 ms | 4194.02 r/s | `Passed` |
| `TC-LOD-073` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 10 | 640 | 31 ms | 123 ms | 183.7 r/s | `Passed` |
| `TC-LOD-074` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 25 | 1675 | 29 ms | 145 ms | 486.49 r/s | `Passed` |
| `TC-LOD-075` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 50 | 2150 | 114 ms | 768 ms | 335.83 r/s | `Passed` |
| `TC-LOD-076` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 100 | 3700 | 36 ms | 163 ms | 1306.5 r/s | `Passed` |
| `TC-LOD-077` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 150 | 3750 | 389 ms | 2292 ms | 334.08 r/s | `Passed` |
| `TC-LOD-078` | `POST` | `/api/auth/login` | User authentication API endpoint | 200 | 13400 | 39 ms | 175 ms | 3257.96 r/s | `Passed` |
| `TC-LOD-079` | `POST` | `/api/auth/register` | User signup API endpoint | 300 | 17400 | 159 ms | 1134 ms | 1622.83 r/s | `Passed` |
| `TC-LOD-080` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 400 | 9600 | 48 ms | 193 ms | 3619.91 r/s | `Passed` |
| `TC-LOD-081` | `GET` | `/api/companies/list` | Company list listing directory API | 500 | 22000 | 51 ms | 242 ms | 5876.07 r/s | `Passed` |
| `TC-LOD-082` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 10 | 260 | 29 ms | 107 ms | 115.35 r/s | `Passed` |
| `TC-LOD-083` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 25 | 1475 | 31 ms | 139 ms | 443.08 r/s | `Passed` |
| `TC-LOD-084` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 50 | 3350 | 31 ms | 109 ms | 936.54 r/s | `Passed` |
| `TC-LOD-085` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 100 | 6800 | 33 ms | 123 ms | 1816.24 r/s | `Passed` |
| `TC-LOD-086` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 150 | 6600 | 140 ms | 701 ms | 861.62 r/s | `Passed` |
| `TC-LOD-087` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 200 | 4200 | 40 ms | 143 ms | 1794.87 r/s | `Passed` |
| `TC-LOD-088` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 300 | 9900 | 489 ms | 2993 ms | 561.32 r/s | `Passed` |
| `TC-LOD-089` | `POST` | `/api/auth/login` | User authentication API endpoint | 400 | 12000 | 49 ms | 191 ms | 4040.4 r/s | `Passed` |
| `TC-LOD-090` | `POST` | `/api/auth/register` | User signup API endpoint | 500 | 14500 | 188 ms | 974 ms | 2085.73 r/s | `Passed` |
| `TC-LOD-091` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 10 | 260 | 30 ms | 99 ms | 114.04 r/s | `Passed` |
| `TC-LOD-092` | `GET` | `/api/companies/list` | Company list listing directory API | 25 | 1225 | 31 ms | 144 ms | 405.76 r/s | `Passed` |
| `TC-LOD-093` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 50 | 1750 | 30 ms | 135 ms | 686.27 r/s | `Passed` |
| `TC-LOD-094` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 100 | 4200 | 33 ms | 143 ms | 1455.3 r/s | `Passed` |
| `TC-LOD-095` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 150 | 3600 | 36 ms | 176 ms | 1522.84 r/s | `Passed` |
| `TC-LOD-096` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 200 | 12400 | 39 ms | 170 ms | 3164.88 r/s | `Passed` |
| `TC-LOD-097` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 300 | 8400 | 169 ms | 950 ms | 1347.88 r/s | `Passed` |
| `TC-LOD-098` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 400 | 10400 | 51 ms | 166 ms | 3680.11 r/s | `Passed` |
| `TC-LOD-099` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 500 | 29500 | 555 ms | 3647 ms | 861.44 r/s | `Passed` |
| `TC-LOD-100` | `POST` | `/api/auth/login` | User authentication API endpoint | 10 | 240 | 29 ms | 123 ms | 109.29 r/s | `Passed` |
| `TC-LOD-101` | `POST` | `/api/auth/register` | User signup API endpoint | 25 | 725 | 117 ms | 694 ms | 148.17 r/s | `Passed` |
| `TC-LOD-102` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 50 | 2700 | 31 ms | 105 ms | 850.66 r/s | `Passed` |
| `TC-LOD-103` | `GET` | `/api/companies/list` | Company list listing directory API | 100 | 3600 | 35 ms | 162 ms | 1304.35 r/s | `Passed` |
| `TC-LOD-104` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 150 | 7950 | 38 ms | 123 ms | 2262.38 r/s | `Passed` |
| `TC-LOD-105` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 200 | 12000 | 39 ms | 185 ms | 3125 r/s | `Passed` |
| `TC-LOD-106` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 300 | 6900 | 44 ms | 171 ms | 2746.82 r/s | `Passed` |
| `TC-LOD-107` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 400 | 27600 | 47 ms | 230 ms | 5819.1 r/s | `Passed` |
| `TC-LOD-108` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 500 | 16000 | 193 ms | 1293 ms | 2084.42 r/s | `Passed` |
| `TC-LOD-109` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 10 | 290 | 29 ms | 116 ms | 123.88 r/s | `Passed` |
| `TC-LOD-110` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 25 | 650 | 324 ms | 1872 ms | 65.5 r/s | `Passed` |
| `TC-LOD-111` | `POST` | `/api/auth/login` | User authentication API endpoint | 50 | 2000 | 33 ms | 145 ms | 709.22 r/s | `Passed` |
| `TC-LOD-112` | `POST` | `/api/auth/register` | User signup API endpoint | 100 | 5100 | 127 ms | 860 ms | 639.34 r/s | `Passed` |
| `TC-LOD-113` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 150 | 4500 | 38 ms | 134 ms | 1704.55 r/s | `Passed` |
| `TC-LOD-114` | `GET` | `/api/companies/list` | Company list listing directory API | 200 | 7400 | 39 ms | 158 ms | 2514.44 r/s | `Passed` |
| `TC-LOD-115` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 300 | 6900 | 42 ms | 200 ms | 2798.05 r/s | `Passed` |
| `TC-LOD-116` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 400 | 12400 | 50 ms | 187 ms | 4065.57 r/s | `Passed` |
| `TC-LOD-117` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 500 | 27000 | 53 ms | 209 ms | 6189.82 r/s | `Passed` |
| `TC-LOD-118` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 10 | 690 | 29 ms | 121 ms | 197.09 r/s | `Passed` |
| `TC-LOD-119` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 25 | 1625 | 112 ms | 642 ms | 185.08 r/s | `Passed` |
| `TC-LOD-120` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 50 | 1650 | 31 ms | 138 ms | 653.98 r/s | `Passed` |
| `TC-LOD-121` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 100 | 3800 | 354 ms | 1818 ms | 254.15 r/s | `Passed` |
| `TC-LOD-122` | `POST` | `/api/auth/login` | User authentication API endpoint | 150 | 4800 | 36 ms | 133 ms | 1809.95 r/s | `Passed` |
| `TC-LOD-123` | `POST` | `/api/auth/register` | User signup API endpoint | 200 | 6200 | 150 ms | 762 ms | 1008.13 r/s | `Passed` |
| `TC-LOD-124` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 300 | 16500 | 42 ms | 185 ms | 4330.71 r/s | `Passed` |
| `TC-LOD-125` | `GET` | `/api/companies/list` | Company list listing directory API | 400 | 15600 | 49 ms | 194 ms | 4573.44 r/s | `Passed` |
| `TC-LOD-126` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 500 | 25500 | 51 ms | 183 ms | 6218 r/s | `Passed` |
| `TC-LOD-127` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 10 | 510 | 31 ms | 103 ms | 165.53 r/s | `Passed` |
| `TC-LOD-128` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 25 | 1475 | 32 ms | 100 ms | 435.36 r/s | `Passed` |
| `TC-LOD-129` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 50 | 1250 | 33 ms | 123 ms | 537.63 r/s | `Passed` |
| `TC-LOD-130` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 100 | 4800 | 123 ms | 721 ms | 648.3 r/s | `Passed` |
| `TC-LOD-131` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 150 | 3300 | 37 ms | 143 ms | 1426.1 r/s | `Passed` |
| `TC-LOD-132` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 200 | 7200 | 433 ms | 2639 ms | 421.35 r/s | `Passed` |
| `TC-LOD-133` | `POST` | `/api/auth/login` | User authentication API endpoint | 300 | 20700 | 42 ms | 208 ms | 4706.68 r/s | `Passed` |
| `TC-LOD-134` | `POST` | `/api/auth/register` | User signup API endpoint | 400 | 24800 | 186 ms | 1124 ms | 1903.01 r/s | `Passed` |
| `TC-LOD-135` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 500 | 23000 | 56 ms | 182 ms | 5642.79 r/s | `Passed` |
| `TC-LOD-136` | `GET` | `/api/companies/list` | Company list listing directory API | 10 | 300 | 31 ms | 137 ms | 123.46 r/s | `Passed` |
| `TC-LOD-137` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 25 | 500 | 31 ms | 112 ms | 235.85 r/s | `Passed` |
| `TC-LOD-138` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 50 | 1200 | 31 ms | 111 ms | 534.76 r/s | `Passed` |
| `TC-LOD-139` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 100 | 5100 | 35 ms | 159 ms | 1552.51 r/s | `Passed` |
| `TC-LOD-140` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 150 | 4200 | 38 ms | 171 ms | 1638.07 r/s | `Passed` |
| `TC-LOD-141` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 200 | 11000 | 145 ms | 800 ms | 1160.95 r/s | `Passed` |
| `TC-LOD-142` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 300 | 20400 | 43 ms | 198 ms | 4611.21 r/s | `Passed` |
| `TC-LOD-143` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 400 | 22400 | 539 ms | 3326 ms | 706.98 r/s | `Passed` |
| `TC-LOD-144` | `POST` | `/api/auth/login` | User authentication API endpoint | 500 | 32000 | 55 ms | 240 ms | 6374.5 r/s | `Passed` |
| `TC-LOD-145` | `POST` | `/api/auth/register` | User signup API endpoint | 10 | 200 | 116 ms | 606 ms | 52.36 r/s | `Passed` |
| `TC-LOD-146` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 25 | 1150 | 31 ms | 148 ms | 393.03 r/s | `Passed` |
| `TC-LOD-147` | `GET` | `/api/companies/list` | Company list listing directory API | 50 | 2350 | 31 ms | 154 ms | 794.72 r/s | `Passed` |
| `TC-LOD-148` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 100 | 4300 | 35 ms | 150 ms | 1430.95 r/s | `Passed` |
| `TC-LOD-149` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 150 | 7350 | 36 ms | 153 ms | 2251.84 r/s | `Passed` |
| `TC-LOD-150` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 200 | 11600 | 40 ms | 129 ms | 3036.65 r/s | `Passed` |
| `TC-LOD-151` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 300 | 18600 | 42 ms | 155 ms | 4532.16 r/s | `Passed` |
| `TC-LOD-152` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 400 | 18400 | 176 ms | 894 ms | 1917.47 r/s | `Passed` |
| `TC-LOD-153` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 500 | 25000 | 54 ms | 241 ms | 5952.38 r/s | `Passed` |
| `TC-LOD-154` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 10 | 280 | 339 ms | 2101 ms | 25.47 r/s | `Passed` |
| `TC-LOD-155` | `POST` | `/api/auth/login` | User authentication API endpoint | 25 | 1350 | 30 ms | 105 ms | 432.69 r/s | `Passed` |
| `TC-LOD-156` | `POST` | `/api/auth/register` | User signup API endpoint | 50 | 2100 | 115 ms | 662 ms | 331.75 r/s | `Passed` |
| `TC-LOD-157` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 100 | 4500 | 36 ms | 140 ms | 1442.31 r/s | `Passed` |
| `TC-LOD-158` | `GET` | `/api/companies/list` | Company list listing directory API | 150 | 3300 | 38 ms | 169 ms | 1412.67 r/s | `Passed` |
| `TC-LOD-159` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 200 | 10600 | 40 ms | 172 ms | 2928.18 r/s | `Passed` |
| `TC-LOD-160` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 300 | 12300 | 45 ms | 169 ms | 3677.13 r/s | `Passed` |
| `TC-LOD-161` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 400 | 20400 | 49 ms | 181 ms | 5101.28 r/s | `Passed` |
| `TC-LOD-162` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 500 | 28500 | 51 ms | 194 ms | 6466.98 r/s | `Passed` |
| `TC-LOD-163` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 10 | 620 | 108 ms | 768 ms | 75.65 r/s | `Passed` |
| `TC-LOD-164` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 25 | 500 | 29 ms | 100 ms | 240.38 r/s | `Passed` |
| `TC-LOD-165` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 50 | 2150 | 355 ms | 2047 ms | 128.24 r/s | `Passed` |
| `TC-LOD-166` | `POST` | `/api/auth/login` | User authentication API endpoint | 100 | 4900 | 35 ms | 159 ms | 1524.11 r/s | `Passed` |
| `TC-LOD-167` | `POST` | `/api/auth/register` | User signup API endpoint | 150 | 9600 | 131 ms | 655 ms | 971.27 r/s | `Passed` |
| `TC-LOD-168` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 200 | 5000 | 37 ms | 167 ms | 2061.86 r/s | `Passed` |
| `TC-LOD-169` | `GET` | `/api/companies/list` | Company list listing directory API | 300 | 6900 | 44 ms | 202 ms | 2746.82 r/s | `Passed` |
| `TC-LOD-170` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 400 | 22800 | 49 ms | 203 ms | 5310.97 r/s | `Passed` |
| `TC-LOD-171` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 500 | 32000 | 53 ms | 255 ms | 6541.29 r/s | `Passed` |
| `TC-LOD-172` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 10 | 260 | 30 ms | 141 ms | 114.04 r/s | `Passed` |
| `TC-LOD-173` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 25 | 1075 | 30 ms | 102 ms | 385.3 r/s | `Passed` |
| `TC-LOD-174` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 50 | 3400 | 122 ms | 698 ms | 347.08 r/s | `Passed` |
| `TC-LOD-175` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 100 | 6000 | 36 ms | 141 ms | 1639.34 r/s | `Passed` |
| `TC-LOD-176` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 150 | 6300 | 393 ms | 2091 ms | 349.88 r/s | `Passed` |
| `TC-LOD-177` | `POST` | `/api/auth/login` | User authentication API endpoint | 200 | 12600 | 41 ms | 135 ms | 3085.97 r/s | `Passed` |
| `TC-LOD-178` | `POST` | `/api/auth/register` | User signup API endpoint | 300 | 10800 | 164 ms | 971 ms | 1458.67 r/s | `Passed` |
| `TC-LOD-179` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 400 | 26000 | 50 ms | 188 ms | 5473.68 r/s | `Passed` |
| `TC-LOD-180` | `GET` | `/api/companies/list` | Company list listing directory API | 500 | 24000 | 56 ms | 227 ms | 5730.66 r/s | `Passed` |
| `TC-LOD-181` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 10 | 580 | 29 ms | 141 ms | 182.28 r/s | `Passed` |
| `TC-LOD-182` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 25 | 1500 | 30 ms | 112 ms | 454.55 r/s | `Passed` |
| `TC-LOD-183` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 50 | 3100 | 33 ms | 149 ms | 874.22 r/s | `Passed` |
| `TC-LOD-184` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 100 | 2000 | 35 ms | 161 ms | 909.09 r/s | `Passed` |
| `TC-LOD-185` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 150 | 3300 | 142 ms | 661 ms | 713.67 r/s | `Passed` |
| `TC-LOD-186` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 200 | 6200 | 37 ms | 132 ms | 2342.27 r/s | `Passed` |
| `TC-LOD-187` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 300 | 9600 | 468 ms | 3024 ms | 582.67 r/s | `Passed` |
| `TC-LOD-188` | `POST` | `/api/auth/login` | User authentication API endpoint | 400 | 24000 | 47 ms | 174 ms | 5555.56 r/s | `Passed` |
| `TC-LOD-189` | `POST` | `/api/auth/register` | User signup API endpoint | 500 | 27500 | 191 ms | 985 ms | 2290.71 r/s | `Passed` |
| `TC-LOD-190` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 10 | 520 | 29 ms | 121 ms | 172.87 r/s | `Passed` |
| `TC-LOD-191` | `GET` | `/api/companies/list` | Company list listing directory API | 25 | 750 | 30 ms | 124 ms | 312.5 r/s | `Passed` |
| `TC-LOD-192` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 50 | 2900 | 33 ms | 138 ms | 849.44 r/s | `Passed` |
| `TC-LOD-193` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 100 | 4600 | 34 ms | 116 ms | 1501.31 r/s | `Passed` |
| `TC-LOD-194` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 150 | 8700 | 36 ms | 166 ms | 2424.75 r/s | `Passed` |
| `TC-LOD-195` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 200 | 5400 | 40 ms | 157 ms | 2093.02 r/s | `Passed` |
| `TC-LOD-196` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 300 | 13500 | 162 ms | 821 ms | 1535.84 r/s | `Passed` |
| `TC-LOD-197` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 400 | 23600 | 47 ms | 203 ms | 5523.05 r/s | `Passed` |
| `TC-LOD-198` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 500 | 30000 | 553 ms | 2666 ms | 865.05 r/s | `Passed` |
| `TC-LOD-199` | `POST` | `/api/auth/login` | User authentication API endpoint | 10 | 420 | 29 ms | 138 ms | 154.53 r/s | `Passed` |
| `TC-LOD-200` | `POST` | `/api/auth/register` | User signup API endpoint | 25 | 1525 | 110 ms | 758 ms | 185.75 r/s | `Passed` |
| `TC-LOD-201` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 50 | 3100 | 33 ms | 133 ms | 874.22 r/s | `Passed` |
| `TC-LOD-202` | `GET` | `/api/companies/list` | Company list listing directory API | 100 | 6900 | 33 ms | 119 ms | 1826.85 r/s | `Passed` |
| `TC-LOD-203` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 150 | 7050 | 37 ms | 155 ms | 2176.6 r/s | `Passed` |
| `TC-LOD-204` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 200 | 10200 | 38 ms | 182 ms | 2966.84 r/s | `Passed` |
| `TC-LOD-205` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 300 | 16200 | 44 ms | 209 ms | 4179.57 r/s | `Passed` |
| `TC-LOD-206` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 400 | 20400 | 49 ms | 163 ms | 5101.28 r/s | `Passed` |
| `TC-LOD-207` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 500 | 20000 | 200 ms | 1233 ms | 2105.26 r/s | `Passed` |
| `TC-LOD-208` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 10 | 390 | 30 ms | 135 ms | 146.07 r/s | `Passed` |
| `TC-LOD-209` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 25 | 1450 | 334 ms | 1716 ms | 69.47 r/s | `Passed` |
| `TC-LOD-210` | `POST` | `/api/auth/login` | User authentication API endpoint | 50 | 2300 | 33 ms | 118 ms | 762.09 r/s | `Passed` |
| `TC-LOD-211` | `POST` | `/api/auth/register` | User signup API endpoint | 100 | 6200 | 132 ms | 898 ms | 640.23 r/s | `Passed` |
| `TC-LOD-212` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 150 | 7650 | 37 ms | 153 ms | 2258.64 r/s | `Passed` |
| `TC-LOD-213` | `GET` | `/api/companies/list` | Company list listing directory API | 200 | 13600 | 39 ms | 167 ms | 3275.53 r/s | `Passed` |
| `TC-LOD-214` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 300 | 12600 | 43 ms | 197 ms | 3811.25 r/s | `Passed` |
| `TC-LOD-215` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 400 | 8000 | 48 ms | 219 ms | 3252.03 r/s | `Passed` |
| `TC-LOD-216` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 500 | 16000 | 52 ms | 196 ms | 5056.89 r/s | `Passed` |
| `TC-LOD-217` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 10 | 440 | 29 ms | 98 ms | 158.5 r/s | `Passed` |
| `TC-LOD-218` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 25 | 1200 | 117 ms | 800 ms | 168.63 r/s | `Passed` |
| `TC-LOD-219` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 50 | 2750 | 32 ms | 147 ms | 843.56 r/s | `Passed` |
| `TC-LOD-220` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 100 | 6900 | 355 ms | 2223 ms | 265.44 r/s | `Passed` |
| `TC-LOD-221` | `POST` | `/api/auth/login` | User authentication API endpoint | 150 | 10350 | 37 ms | 161 ms | 2553.66 r/s | `Passed` |
| `TC-LOD-222` | `POST` | `/api/auth/register` | User signup API endpoint | 200 | 9000 | 142 ms | 761 ms | 1140.68 r/s | `Passed` |
| `TC-LOD-223` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 300 | 6600 | 45 ms | 195 ms | 2650.6 r/s | `Passed` |
| `TC-LOD-224` | `GET` | `/api/companies/list` | Company list listing directory API | 400 | 20000 | 50 ms | 199 ms | 5000 r/s | `Passed` |
| `TC-LOD-225` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 500 | 11500 | 55 ms | 243 ms | 4159.13 r/s | `Passed` |
| `TC-LOD-226` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 10 | 690 | 31 ms | 117 ms | 189.61 r/s | `Passed` |
| `TC-LOD-227` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 25 | 825 | 31 ms | 148 ms | 326.99 r/s | `Passed` |
| `TC-LOD-228` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 50 | 3200 | 33 ms | 109 ms | 885.94 r/s | `Passed` |
| `TC-LOD-229` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 100 | 4700 | 129 ms | 673 ms | 621.45 r/s | `Passed` |
| `TC-LOD-230` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 150 | 6450 | 37 ms | 178 ms | 2086.7 r/s | `Passed` |
| `TC-LOD-231` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 200 | 5000 | 430 ms | 1948 ms | 408.16 r/s | `Passed` |
| `TC-LOD-232` | `POST` | `/api/auth/login` | User authentication API endpoint | 300 | 17700 | 44 ms | 195 ms | 4321.29 r/s | `Passed` |
| `TC-LOD-233` | `POST` | `/api/auth/register` | User signup API endpoint | 400 | 16800 | 174 ms | 1054 ms | 1907.36 r/s | `Passed` |
| `TC-LOD-234` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 500 | 25500 | 51 ms | 204 ms | 6218 r/s | `Passed` |
| `TC-LOD-235` | `GET` | `/api/companies/list` | Company list listing directory API | 10 | 360 | 29 ms | 133 ms | 141.51 r/s | `Passed` |
| `TC-LOD-236` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 25 | 1600 | 32 ms | 140 ms | 450.96 r/s | `Passed` |
| `TC-LOD-237` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 50 | 2400 | 33 ms | 131 ms | 778.21 r/s | `Passed` |
| `TC-LOD-238` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 100 | 4900 | 33 ms | 157 ms | 1572.02 r/s | `Passed` |
| `TC-LOD-239` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 150 | 9750 | 37 ms | 133 ms | 2496.8 r/s | `Passed` |
| `TC-LOD-240` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 200 | 10200 | 137 ms | 904 ms | 1201.84 r/s | `Passed` |
| `TC-LOD-241` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 300 | 11700 | 43 ms | 191 ms | 3682.72 r/s | `Passed` |
| `TC-LOD-242` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 400 | 10000 | 521 ms | 2612 ms | 688.47 r/s | `Passed` |
| `TC-LOD-243` | `POST` | `/api/auth/login` | User authentication API endpoint | 500 | 22500 | 52 ms | 247 ms | 5859.38 r/s | `Passed` |
| `TC-LOD-244` | `POST` | `/api/auth/register` | User signup API endpoint | 10 | 440 | 107 ms | 737 ms | 70.88 r/s | `Passed` |
| `TC-LOD-245` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 25 | 1725 | 30 ms | 142 ms | 483.19 r/s | `Passed` |
| `TC-LOD-246` | `GET` | `/api/companies/list` | Company list listing directory API | 50 | 1300 | 32 ms | 105 ms | 557.46 r/s | `Passed` |
| `TC-LOD-247` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 100 | 2600 | 36 ms | 111 ms | 1067.32 r/s | `Passed` |
| `TC-LOD-248` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 150 | 8850 | 37 ms | 142 ms | 2402.93 r/s | `Passed` |
| `TC-LOD-249` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 200 | 10600 | 40 ms | 185 ms | 2928.18 r/s | `Passed` |
| `TC-LOD-250` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 300 | 18000 | 42 ms | 160 ms | 4477.61 r/s | `Passed` |
| `TC-LOD-251` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 400 | 12000 | 187 ms | 867 ms | 1687.76 r/s | `Passed` |
| `TC-LOD-252` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 500 | 19000 | 55 ms | 203 ms | 5292.48 r/s | `Passed` |
| `TC-LOD-253` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 10 | 540 | 312 ms | 1689 ms | 29.43 r/s | `Passed` |
| `TC-LOD-254` | `POST` | `/api/auth/login` | User authentication API endpoint | 25 | 1075 | 29 ms | 104 ms | 391.34 r/s | `Passed` |
| `TC-LOD-255` | `POST` | `/api/auth/register` | User signup API endpoint | 50 | 2250 | 123 ms | 781 ms | 319.83 r/s | `Passed` |
| `TC-LOD-256` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 100 | 5100 | 36 ms | 129 ms | 1528.78 r/s | `Passed` |
| `TC-LOD-257` | `GET` | `/api/companies/list` | Company list listing directory API | 150 | 9600 | 36 ms | 133 ms | 2523.66 r/s | `Passed` |
| `TC-LOD-258` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 200 | 11800 | 40 ms | 147 ms | 3056.99 r/s | `Passed` |
| `TC-LOD-259` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 300 | 20400 | 43 ms | 203 ms | 4611.21 r/s | `Passed` |
| `TC-LOD-260` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 400 | 25200 | 47 ms | 205 ms | 5648.96 r/s | `Passed` |
| `TC-LOD-261` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 500 | 11500 | 52 ms | 199 ms | 4265.58 r/s | `Passed` |
| `TC-LOD-262` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 10 | 380 | 111 ms | 714 ms | 66.46 r/s | `Passed` |
| `TC-LOD-263` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 25 | 1725 | 32 ms | 141 ms | 465.21 r/s | `Passed` |
| `TC-LOD-264` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 50 | 1300 | 336 ms | 1931 ms | 127 r/s | `Passed` |
| `TC-LOD-265` | `POST` | `/api/auth/login` | User authentication API endpoint | 100 | 5100 | 34 ms | 119 ms | 1576.99 r/s | `Passed` |
| `TC-LOD-266` | `POST` | `/api/auth/register` | User signup API endpoint | 150 | 8100 | 143 ms | 778 ms | 878.33 r/s | `Passed` |
| `TC-LOD-267` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 200 | 4800 | 37 ms | 161 ms | 2010.05 r/s | `Passed` |
| `TC-LOD-268` | `GET` | `/api/companies/list` | Company list listing directory API | 300 | 6600 | 44 ms | 179 ms | 2674.23 r/s | `Passed` |
| `TC-LOD-269` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 400 | 16000 | 47 ms | 171 ms | 4733.73 r/s | `Passed` |
| `TC-LOD-270` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 500 | 16000 | 52 ms | 217 ms | 5056.89 r/s | `Passed` |
| `TC-LOD-271` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 10 | 320 | 29 ms | 144 ms | 131.8 r/s | `Passed` |
| `TC-LOD-272` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 25 | 700 | 32 ms | 148 ms | 292.15 r/s | `Passed` |
| `TC-LOD-273` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 50 | 2950 | 113 ms | 758 ms | 361.21 r/s | `Passed` |
| `TC-LOD-274` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 100 | 4600 | 35 ms | 113 ms | 1479.1 r/s | `Passed` |
| `TC-LOD-275` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 150 | 7500 | 383 ms | 2540 ms | 363.2 r/s | `Passed` |
| `TC-LOD-276` | `POST` | `/api/auth/login` | User authentication API endpoint | 200 | 7800 | 40 ms | 147 ms | 2549.02 r/s | `Passed` |
| `TC-LOD-277` | `POST` | `/api/auth/register` | User signup API endpoint | 300 | 18600 | 158 ms | 989 ms | 1646.6 r/s | `Passed` |
| `TC-LOD-278` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 400 | 16400 | 46 ms | 194 ms | 4843.47 r/s | `Passed` |
| `TC-LOD-279` | `GET` | `/api/companies/list` | Company list listing directory API | 500 | 32000 | 56 ms | 181 ms | 6294.26 r/s | `Passed` |
| `TC-LOD-280` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 10 | 350 | 29 ms | 128 ms | 139.17 r/s | `Passed` |
| `TC-LOD-281` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 25 | 1150 | 30 ms | 129 ms | 399.31 r/s | `Passed` |
| `TC-LOD-282` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 50 | 1550 | 31 ms | 153 ms | 629.83 r/s | `Passed` |
| `TC-LOD-283` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 100 | 4100 | 34 ms | 113 ms | 1416.72 r/s | `Passed` |
| `TC-LOD-284` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 150 | 4050 | 135 ms | 869 ms | 787.17 r/s | `Passed` |
| `TC-LOD-285` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 200 | 6400 | 39 ms | 166 ms | 2328.97 r/s | `Passed` |
| `TC-LOD-286` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 300 | 11400 | 464 ms | 2932 ms | 595.86 r/s | `Passed` |
| `TC-LOD-287` | `POST` | `/api/auth/login` | User authentication API endpoint | 400 | 10400 | 48 ms | 227 ms | 3784.57 r/s | `Passed` |
| `TC-LOD-288` | `POST` | `/api/auth/register` | User signup API endpoint | 500 | 32500 | 192 ms | 1302 ms | 2324.75 r/s | `Passed` |
| `TC-LOD-289` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 10 | 540 | 29 ms | 113 ms | 176.13 r/s | `Passed` |
| `TC-LOD-290` | `GET` | `/api/companies/list` | Company list listing directory API | 25 | 750 | 32 ms | 139 ms | 304.88 r/s | `Passed` |
| `TC-LOD-291` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 50 | 1500 | 32 ms | 149 ms | 609.76 r/s | `Passed` |
| `TC-LOD-292` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 100 | 2700 | 33 ms | 128 ms | 1129.23 r/s | `Passed` |
| `TC-LOD-293` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 150 | 9000 | 35 ms | 135 ms | 2500 r/s | `Passed` |
| `TC-LOD-294` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 200 | 7800 | 40 ms | 159 ms | 2549.02 r/s | `Passed` |
| `TC-LOD-295` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 300 | 10800 | 164 ms | 899 ms | 1458.67 r/s | `Passed` |
| `TC-LOD-296` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 400 | 18400 | 49 ms | 226 ms | 4901.44 r/s | `Passed` |
| `TC-LOD-297` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 500 | 19500 | 552 ms | 3746 ms | 846.8 r/s | `Passed` |
| `TC-LOD-298` | `POST` | `/api/auth/login` | User authentication API endpoint | 10 | 310 | 30 ms | 139 ms | 127.57 r/s | `Passed` |
| `TC-LOD-299` | `POST` | `/api/auth/register` | User signup API endpoint | 25 | 850 | 113 ms | 562 ms | 159.12 r/s | `Passed` |
| `TC-LOD-300` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 50 | 3000 | 32 ms | 119 ms | 877.19 r/s | `Passed` |
| `TC-LOD-301` | `GET` | `/api/companies/list` | Company list listing directory API | 100 | 5300 | 36 ms | 120 ms | 1555.16 r/s | `Passed` |
| `TC-LOD-302` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 150 | 5550 | 38 ms | 121 ms | 1909.84 r/s | `Passed` |
| `TC-LOD-303` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 200 | 4800 | 38 ms | 159 ms | 1990.05 r/s | `Passed` |
| `TC-LOD-304` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 300 | 12600 | 45 ms | 155 ms | 3716.81 r/s | `Passed` |
| `TC-LOD-305` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 400 | 20800 | 50 ms | 172 ms | 5073.17 r/s | `Passed` |
| `TC-LOD-306` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 500 | 18000 | 206 ms | 1065 ms | 2018.84 r/s | `Passed` |
| `TC-LOD-307` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 10 | 440 | 31 ms | 104 ms | 153.63 r/s | `Passed` |
| `TC-LOD-308` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 25 | 1125 | 328 ms | 1988 ms | 69.19 r/s | `Passed` |
| `TC-LOD-309` | `POST` | `/api/auth/login` | User authentication API endpoint | 50 | 2950 | 32 ms | 115 ms | 870.72 r/s | `Passed` |
| `TC-LOD-310` | `POST` | `/api/auth/register` | User signup API endpoint | 100 | 3700 | 124 ms | 659 ms | 607.75 r/s | `Passed` |
| `TC-LOD-311` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 150 | 6600 | 36 ms | 164 ms | 2140.08 r/s | `Passed` |
| `TC-LOD-312` | `GET` | `/api/companies/list` | Company list listing directory API | 200 | 5600 | 37 ms | 153 ms | 2208.2 r/s | `Passed` |
| `TC-LOD-313` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 300 | 9300 | 44 ms | 161 ms | 3247.21 r/s | `Passed` |
| `TC-LOD-314` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 400 | 27600 | 49 ms | 201 ms | 5654.58 r/s | `Passed` |
| `TC-LOD-315` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 500 | 14500 | 54 ms | 215 ms | 4729.29 r/s | `Passed` |
| `TC-LOD-316` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 10 | 290 | 31 ms | 105 ms | 120.88 r/s | `Passed` |
| `TC-LOD-317` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 25 | 1700 | 118 ms | 732 ms | 178.5 r/s | `Passed` |
| `TC-LOD-318` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 50 | 1650 | 31 ms | 140 ms | 653.98 r/s | `Passed` |
| `TC-LOD-319` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 100 | 4700 | 373 ms | 2503 ms | 246.97 r/s | `Passed` |
| `TC-LOD-320` | `POST` | `/api/auth/login` | User authentication API endpoint | 150 | 7950 | 38 ms | 164 ms | 2262.38 r/s | `Passed` |
