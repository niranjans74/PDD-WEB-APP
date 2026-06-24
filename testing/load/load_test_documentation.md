# API Load & Stress Performance Documentation

This folder documents performance metrics gathered during stress tests on the application endpoints.

## Load Testing Metrics Summary

*   **Total Simulated Requests:** 2,710,040 requests
*   **Passed Requests:** 100%
*   **Error Rate:** 0.00%
*   **Maximum Target Concurrency:** 500 Virtual Users (VUs)
*   **Global Average Latency:** 92 ms

## Load Test Iterations Database

| Test ID | Method | API Endpoint | Description | VUs | Requests | Avg Latency | Max Latency | Throughput | Status |
| :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| `TC-LOD-001` | `POST` | `/api/auth/login` | User authentication API endpoint | 10 | 330 | 31 ms | 132 ms | 130.8 r/s | `Passed` |
| `TC-LOD-002` | `POST` | `/api/auth/register` | User signup API endpoint | 25 | 925 | 120 ms | 692 ms | 155.72 r/s | `Passed` |
| `TC-LOD-003` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 50 | 3300 | 31 ms | 134 ms | 930.63 r/s | `Passed` |
| `TC-LOD-004` | `GET` | `/api/companies/list` | Company list listing directory API | 100 | 2900 | 34 ms | 161 ms | 1166.53 r/s | `Passed` |
| `TC-LOD-005` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 150 | 6150 | 36 ms | 119 ms | 2066.53 r/s | `Passed` |
| `TC-LOD-006` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 200 | 12800 | 40 ms | 133 ms | 3152.71 r/s | `Passed` |
| `TC-LOD-007` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 300 | 16200 | 43 ms | 148 ms | 4238.62 r/s | `Passed` |
| `TC-LOD-008` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 400 | 22000 | 51 ms | 234 ms | 5110.34 r/s | `Passed` |
| `TC-LOD-009` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 500 | 28500 | 198 ms | 1075 ms | 2229 r/s | `Passed` |
| `TC-LOD-010` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 10 | 490 | 31 ms | 108 ms | 162.31 r/s | `Passed` |
| `TC-LOD-011` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 25 | 850 | 344 ms | 1658 ms | 64.41 r/s | `Passed` |
| `TC-LOD-012` | `POST` | `/api/auth/login` | User authentication API endpoint | 50 | 2300 | 32 ms | 137 ms | 773.89 r/s | `Passed` |
| `TC-LOD-013` | `POST` | `/api/auth/register` | User signup API endpoint | 100 | 2800 | 121 ms | 879 ms | 572.83 r/s | `Passed` |
| `TC-LOD-014` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 150 | 8250 | 36 ms | 138 ms | 2370.69 r/s | `Passed` |
| `TC-LOD-015` | `GET` | `/api/companies/list` | Company list listing directory API | 200 | 5000 | 41 ms | 142 ms | 1980.2 r/s | `Passed` |
| `TC-LOD-016` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 300 | 9000 | 44 ms | 164 ms | 3191.49 r/s | `Passed` |
| `TC-LOD-017` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 400 | 23600 | 50 ms | 162 ms | 5303.37 r/s | `Passed` |
| `TC-LOD-018` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 500 | 22500 | 53 ms | 181 ms | 5791.51 r/s | `Passed` |
| `TC-LOD-019` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 10 | 490 | 31 ms | 145 ms | 162.31 r/s | `Passed` |
| `TC-LOD-020` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 25 | 725 | 111 ms | 700 ms | 153.63 r/s | `Passed` |
| `TC-LOD-021` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 50 | 1750 | 30 ms | 128 ms | 686.27 r/s | `Passed` |
| `TC-LOD-022` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 100 | 4900 | 387 ms | 2021 ms | 239.46 r/s | `Passed` |
| `TC-LOD-023` | `POST` | `/api/auth/login` | User authentication API endpoint | 150 | 3600 | 36 ms | 165 ms | 1522.84 r/s | `Passed` |
| `TC-LOD-024` | `POST` | `/api/auth/register` | User signup API endpoint | 200 | 13600 | 142 ms | 702 ms | 1219.07 r/s | `Passed` |
| `TC-LOD-025` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 300 | 17400 | 44 ms | 151 ms | 4294.18 r/s | `Passed` |
| `TC-LOD-026` | `GET` | `/api/companies/list` | Company list listing directory API | 400 | 24000 | 48 ms | 158 ms | 5479.45 r/s | `Passed` |
| `TC-LOD-027` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 500 | 13500 | 52 ms | 232 ms | 4648.76 r/s | `Passed` |
| `TC-LOD-028` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 10 | 380 | 31 ms | 144 ms | 141.9 r/s | `Passed` |
| `TC-LOD-029` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 25 | 625 | 32 ms | 116 ms | 271.74 r/s | `Passed` |
| `TC-LOD-030` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 50 | 3350 | 32 ms | 143 ms | 919.32 r/s | `Passed` |
| `TC-LOD-031` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 100 | 4600 | 131 ms | 773 ms | 611.21 r/s | `Passed` |
| `TC-LOD-032` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 150 | 5250 | 38 ms | 155 ms | 1855.12 r/s | `Passed` |
| `TC-LOD-033` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 200 | 5800 | 401 ms | 1933 ms | 441.77 r/s | `Passed` |
| `TC-LOD-034` | `POST` | `/api/auth/login` | User authentication API endpoint | 300 | 15300 | 46 ms | 186 ms | 3978.16 r/s | `Passed` |
| `TC-LOD-035` | `POST` | `/api/auth/register` | User signup API endpoint | 400 | 12400 | 175 ms | 1145 ms | 1790.61 r/s | `Passed` |
| `TC-LOD-036` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 500 | 34000 | 52 ms | 207 ms | 6751.39 r/s | `Passed` |
| `TC-LOD-037` | `GET` | `/api/companies/list` | Company list listing directory API | 10 | 680 | 31 ms | 129 ms | 188.47 r/s | `Passed` |
| `TC-LOD-038` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 25 | 1450 | 30 ms | 120 ms | 447.53 r/s | `Passed` |
| `TC-LOD-039` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 50 | 1400 | 31 ms | 147 ms | 591.22 r/s | `Passed` |
| `TC-LOD-040` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 100 | 2600 | 34 ms | 114 ms | 1090.6 r/s | `Passed` |
| `TC-LOD-041` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 150 | 4500 | 36 ms | 147 ms | 1744.19 r/s | `Passed` |
| `TC-LOD-042` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 200 | 11200 | 138 ms | 899 ms | 1213.7 r/s | `Passed` |
| `TC-LOD-043` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 300 | 15000 | 44 ms | 183 ms | 4054.05 r/s | `Passed` |
| `TC-LOD-044` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 400 | 26000 | 499 ms | 3301 ms | 766.17 r/s | `Passed` |
| `TC-LOD-045` | `POST` | `/api/auth/login` | User authentication API endpoint | 500 | 24000 | 54 ms | 239 ms | 5865.1 r/s | `Passed` |
| `TC-LOD-046` | `POST` | `/api/auth/register` | User signup API endpoint | 10 | 680 | 115 ms | 578 ms | 72.96 r/s | `Passed` |
| `TC-LOD-047` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 25 | 950 | 30 ms | 117 ms | 359.85 r/s | `Passed` |
| `TC-LOD-048` | `GET` | `/api/companies/list` | Company list listing directory API | 50 | 2300 | 31 ms | 118 ms | 786.06 r/s | `Passed` |
| `TC-LOD-049` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 100 | 3200 | 33 ms | 132 ms | 1251.96 r/s | `Passed` |
| `TC-LOD-050` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 150 | 8550 | 38 ms | 119 ms | 2332.24 r/s | `Passed` |
| `TC-LOD-051` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 200 | 13000 | 40 ms | 168 ms | 3170.73 r/s | `Passed` |
| `TC-LOD-052` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 300 | 10800 | 46 ms | 204 ms | 3422.05 r/s | `Passed` |
| `TC-LOD-053` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 400 | 11200 | 181 ms | 953 ms | 1705.24 r/s | `Passed` |
| `TC-LOD-054` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 500 | 27500 | 51 ms | 233 ms | 6387.92 r/s | `Passed` |
| `TC-LOD-055` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 10 | 510 | 311 ms | 2016 ms | 29.38 r/s | `Passed` |
| `TC-LOD-056` | `POST` | `/api/auth/login` | User authentication API endpoint | 25 | 1050 | 31 ms | 148 ms | 374.73 r/s | `Passed` |
| `TC-LOD-057` | `POST` | `/api/auth/register` | User signup API endpoint | 50 | 1400 | 120 ms | 767 ms | 288.07 r/s | `Passed` |
| `TC-LOD-058` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 100 | 5400 | 36 ms | 142 ms | 1567.94 r/s | `Passed` |
| `TC-LOD-059` | `GET` | `/api/companies/list` | Company list listing directory API | 150 | 3150 | 37 ms | 127 ms | 1383.4 r/s | `Passed` |
| `TC-LOD-060` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 200 | 9600 | 39 ms | 164 ms | 2846.98 r/s | `Passed` |
| `TC-LOD-061` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 300 | 15000 | 46 ms | 161 ms | 3947.37 r/s | `Passed` |
| `TC-LOD-062` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 400 | 24400 | 47 ms | 158 ms | 5587.36 r/s | `Passed` |
| `TC-LOD-063` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 500 | 16000 | 52 ms | 257 ms | 5056.89 r/s | `Passed` |
| `TC-LOD-064` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 10 | 220 | 114 ms | 734 ms | 54.89 r/s | `Passed` |
| `TC-LOD-065` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 25 | 1600 | 30 ms | 119 ms | 467.84 r/s | `Passed` |
| `TC-LOD-066` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 50 | 1500 | 334 ms | 1646 ms | 130.21 r/s | `Passed` |
| `TC-LOD-067` | `POST` | `/api/auth/login` | User authentication API endpoint | 100 | 6600 | 33 ms | 114 ms | 1794.45 r/s | `Passed` |
| `TC-LOD-068` | `POST` | `/api/auth/register` | User signup API endpoint | 150 | 4500 | 138 ms | 902 ms | 797.87 r/s | `Passed` |
| `TC-LOD-069` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 200 | 8600 | 39 ms | 172 ms | 2706.96 r/s | `Passed` |
| `TC-LOD-070` | `GET` | `/api/companies/list` | Company list listing directory API | 300 | 9000 | 45 ms | 206 ms | 3157.89 r/s | `Passed` |
| `TC-LOD-071` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 400 | 19600 | 48 ms | 189 ms | 5088.27 r/s | `Passed` |
| `TC-LOD-072` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 500 | 32500 | 53 ms | 178 ms | 6572.3 r/s | `Passed` |
| `TC-LOD-073` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 10 | 540 | 29 ms | 143 ms | 176.13 r/s | `Passed` |
| `TC-LOD-074` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 25 | 1250 | 32 ms | 143 ms | 403.23 r/s | `Passed` |
| `TC-LOD-075` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 50 | 1050 | 122 ms | 817 ms | 258.49 r/s | `Passed` |
| `TC-LOD-076` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 100 | 5400 | 35 ms | 138 ms | 1592.92 r/s | `Passed` |
| `TC-LOD-077` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 150 | 9300 | 396 ms | 1891 ms | 356.98 r/s | `Passed` |
| `TC-LOD-078` | `POST` | `/api/auth/login` | User authentication API endpoint | 200 | 13800 | 40 ms | 170 ms | 3239.44 r/s | `Passed` |
| `TC-LOD-079` | `POST` | `/api/auth/register` | User signup API endpoint | 300 | 17700 | 161 ms | 1114 ms | 1609.24 r/s | `Passed` |
| `TC-LOD-080` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 400 | 19600 | 47 ms | 214 ms | 5153.83 r/s | `Passed` |
| `TC-LOD-081` | `GET` | `/api/companies/list` | Company list listing directory API | 500 | 16500 | 56 ms | 181 ms | 4928.32 r/s | `Passed` |
| `TC-LOD-082` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 10 | 250 | 30 ms | 117 ms | 111.11 r/s | `Passed` |
| `TC-LOD-083` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 25 | 825 | 30 ms | 104 ms | 331.33 r/s | `Passed` |
| `TC-LOD-084` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 50 | 2650 | 33 ms | 114 ms | 815.64 r/s | `Passed` |
| `TC-LOD-085` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 100 | 2600 | 33 ms | 132 ms | 1102.63 r/s | `Passed` |
| `TC-LOD-086` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 150 | 10350 | 137 ms | 736 ms | 944.95 r/s | `Passed` |
| `TC-LOD-087` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 200 | 5800 | 38 ms | 152 ms | 2229.05 r/s | `Passed` |
| `TC-LOD-088` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 300 | 14700 | 480 ms | 3021 ms | 587.53 r/s | `Passed` |
| `TC-LOD-089` | `POST` | `/api/auth/login` | User authentication API endpoint | 400 | 27600 | 46 ms | 160 ms | 5905.01 r/s | `Passed` |
| `TC-LOD-090` | `POST` | `/api/auth/register` | User signup API endpoint | 500 | 32500 | 205 ms | 1151 ms | 2192.24 r/s | `Passed` |
| `TC-LOD-091` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 10 | 400 | 31 ms | 99 ms | 145.99 r/s | `Passed` |
| `TC-LOD-092` | `GET` | `/api/companies/list` | Company list listing directory API | 25 | 775 | 31 ms | 133 ms | 314.91 r/s | `Passed` |
| `TC-LOD-093` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 50 | 2600 | 31 ms | 118 ms | 835.48 r/s | `Passed` |
| `TC-LOD-094` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 100 | 6200 | 33 ms | 121 ms | 1748.45 r/s | `Passed` |
| `TC-LOD-095` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 150 | 9600 | 35 ms | 124 ms | 2566.84 r/s | `Passed` |
| `TC-LOD-096` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 200 | 12200 | 38 ms | 161 ms | 3195.39 r/s | `Passed` |
| `TC-LOD-097` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 300 | 16200 | 163 ms | 781 ms | 1572.51 r/s | `Passed` |
| `TC-LOD-098` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 400 | 8800 | 46 ms | 191 ms | 3503.18 r/s | `Passed` |
| `TC-LOD-099` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 500 | 22500 | 596 ms | 3295 ms | 794.49 r/s | `Passed` |
| `TC-LOD-100` | `POST` | `/api/auth/login` | User authentication API endpoint | 10 | 470 | 31 ms | 132 ms | 158.94 r/s | `Passed` |
| `TC-LOD-101` | `POST` | `/api/auth/register` | User signup API endpoint | 25 | 1650 | 118 ms | 570 ms | 177.65 r/s | `Passed` |
| `TC-LOD-102` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 50 | 2600 | 32 ms | 148 ms | 821.74 r/s | `Passed` |
| `TC-LOD-103` | `GET` | `/api/companies/list` | Company list listing directory API | 100 | 3400 | 33 ms | 147 ms | 1296.72 r/s | `Passed` |
| `TC-LOD-104` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 150 | 3900 | 36 ms | 148 ms | 1600.99 r/s | `Passed` |
| `TC-LOD-105` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 200 | 6600 | 41 ms | 152 ms | 2313.35 r/s | `Passed` |
| `TC-LOD-106` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 300 | 6000 | 45 ms | 179 ms | 2500 r/s | `Passed` |
| `TC-LOD-107` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 400 | 26800 | 50 ms | 171 ms | 5525.77 r/s | `Passed` |
| `TC-LOD-108` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 500 | 19000 | 202 ms | 1202 ms | 2070.62 r/s | `Passed` |
| `TC-LOD-109` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 10 | 620 | 28 ms | 98 ms | 191.59 r/s | `Passed` |
| `TC-LOD-110` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 25 | 1175 | 318 ms | 2203 ms | 71.45 r/s | `Passed` |
| `TC-LOD-111` | `POST` | `/api/auth/login` | User authentication API endpoint | 50 | 2750 | 31 ms | 129 ms | 858.03 r/s | `Passed` |
| `TC-LOD-112` | `POST` | `/api/auth/register` | User signup API endpoint | 100 | 3800 | 131 ms | 665 ms | 586.6 r/s | `Passed` |
| `TC-LOD-113` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 150 | 3000 | 36 ms | 146 ms | 1351.35 r/s | `Passed` |
| `TC-LOD-114` | `GET` | `/api/companies/list` | Company list listing directory API | 200 | 10800 | 41 ms | 158 ms | 2907.92 r/s | `Passed` |
| `TC-LOD-115` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 300 | 12300 | 42 ms | 146 ms | 3817.5 r/s | `Passed` |
| `TC-LOD-116` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 400 | 21200 | 48 ms | 222 ms | 5242.33 r/s | `Passed` |
| `TC-LOD-117` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 500 | 11000 | 54 ms | 179 ms | 4092.26 r/s | `Passed` |
| `TC-LOD-118` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 10 | 410 | 31 ms | 97 ms | 147.96 r/s | `Passed` |
| `TC-LOD-119` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 25 | 1375 | 109 ms | 771 ms | 183.46 r/s | `Passed` |
| `TC-LOD-120` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 50 | 1900 | 30 ms | 128 ms | 719.7 r/s | `Passed` |
| `TC-LOD-121` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 100 | 4100 | 357 ms | 1867 ms | 254.07 r/s | `Passed` |
| `TC-LOD-122` | `POST` | `/api/auth/login` | User authentication API endpoint | 150 | 5100 | 35 ms | 167 ms | 1895.91 r/s | `Passed` |
| `TC-LOD-123` | `POST` | `/api/auth/register` | User signup API endpoint | 200 | 6000 | 148 ms | 765 ms | 1010.1 r/s | `Passed` |
| `TC-LOD-124` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 300 | 10200 | 44 ms | 187 ms | 3404.54 r/s | `Passed` |
| `TC-LOD-125` | `GET` | `/api/companies/list` | Company list listing directory API | 400 | 10800 | 49 ms | 226 ms | 3825.72 r/s | `Passed` |
| `TC-LOD-126` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 500 | 23000 | 51 ms | 246 ms | 5980.24 r/s | `Passed` |
| `TC-LOD-127` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 10 | 580 | 29 ms | 133 ms | 182.28 r/s | `Passed` |
| `TC-LOD-128` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 25 | 1225 | 32 ms | 139 ms | 399.28 r/s | `Passed` |
| `TC-LOD-129` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 50 | 2750 | 33 ms | 140 ms | 829.56 r/s | `Passed` |
| `TC-LOD-130` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 100 | 3100 | 133 ms | 849 ms | 551.31 r/s | `Passed` |
| `TC-LOD-131` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 150 | 10200 | 37 ms | 170 ms | 2539.84 r/s | `Passed` |
| `TC-LOD-132` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 200 | 8600 | 412 ms | 2612 ms | 447.54 r/s | `Passed` |
| `TC-LOD-133` | `POST` | `/api/auth/login` | User authentication API endpoint | 300 | 12900 | 45 ms | 180 ms | 3755.46 r/s | `Passed` |
| `TC-LOD-134` | `POST` | `/api/auth/register` | User signup API endpoint | 400 | 21200 | 188 ms | 1148 ms | 1849.27 r/s | `Passed` |
| `TC-LOD-135` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 500 | 17000 | 55 ms | 182 ms | 5044.51 r/s | `Passed` |
| `TC-LOD-136` | `GET` | `/api/companies/list` | Company list listing directory API | 10 | 600 | 29 ms | 142 ms | 185.19 r/s | `Passed` |
| `TC-LOD-137` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 25 | 800 | 30 ms | 139 ms | 325.2 r/s | `Passed` |
| `TC-LOD-138` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 50 | 1850 | 32 ms | 146 ms | 689.27 r/s | `Passed` |
| `TC-LOD-139` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 100 | 5900 | 34 ms | 158 ms | 1682.83 r/s | `Passed` |
| `TC-LOD-140` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 150 | 4950 | 35 ms | 135 ms | 1864.41 r/s | `Passed` |
| `TC-LOD-141` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 200 | 4400 | 139 ms | 754 ms | 965.34 r/s | `Passed` |
| `TC-LOD-142` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 300 | 17400 | 45 ms | 206 ms | 4233.58 r/s | `Passed` |
| `TC-LOD-143` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 400 | 12000 | 539 ms | 2404 ms | 679.12 r/s | `Passed` |
| `TC-LOD-144` | `POST` | `/api/auth/login` | User authentication API endpoint | 500 | 13000 | 53 ms | 246 ms | 4517.03 r/s | `Passed` |
| `TC-LOD-145` | `POST` | `/api/auth/register` | User signup API endpoint | 10 | 260 | 112 ms | 710 ms | 58.93 r/s | `Passed` |
| `TC-LOD-146` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 25 | 775 | 30 ms | 130 ms | 318.93 r/s | `Passed` |
| `TC-LOD-147` | `GET` | `/api/companies/list` | Company list listing directory API | 50 | 1350 | 31 ms | 139 ms | 577.66 r/s | `Passed` |
| `TC-LOD-148` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 100 | 6700 | 33 ms | 160 ms | 1805.44 r/s | `Passed` |
| `TC-LOD-149` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 150 | 6900 | 36 ms | 123 ms | 2186.31 r/s | `Passed` |
| `TC-LOD-150` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 200 | 8800 | 38 ms | 184 ms | 2774.27 r/s | `Passed` |
| `TC-LOD-151` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 300 | 18000 | 42 ms | 200 ms | 4477.61 r/s | `Passed` |
| `TC-LOD-152` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 400 | 22800 | 175 ms | 889 ms | 1986.93 r/s | `Passed` |
| `TC-LOD-153` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 500 | 14500 | 52 ms | 219 ms | 4820.48 r/s | `Passed` |
| `TC-LOD-154` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 10 | 420 | 316 ms | 1891 ms | 28.43 r/s | `Passed` |
| `TC-LOD-155` | `POST` | `/api/auth/login` | User authentication API endpoint | 25 | 625 | 30 ms | 122 ms | 277.78 r/s | `Passed` |
| `TC-LOD-156` | `POST` | `/api/auth/register` | User signup API endpoint | 50 | 3000 | 116 ms | 773 ms | 354.61 r/s | `Passed` |
| `TC-LOD-157` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 100 | 5100 | 33 ms | 152 ms | 1602.26 r/s | `Passed` |
| `TC-LOD-158` | `GET` | `/api/companies/list` | Company list listing directory API | 150 | 8700 | 37 ms | 122 ms | 2386.18 r/s | `Passed` |
| `TC-LOD-159` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 200 | 8000 | 40 ms | 170 ms | 2580.65 r/s | `Passed` |
| `TC-LOD-160` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 300 | 6300 | 44 ms | 177 ms | 2599.01 r/s | `Passed` |
| `TC-LOD-161` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 400 | 11200 | 47 ms | 215 ms | 3977.27 r/s | `Passed` |
| `TC-LOD-162` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 500 | 27000 | 53 ms | 213 ms | 6189.82 r/s | `Passed` |
| `TC-LOD-163` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 10 | 270 | 110 ms | 606 ms | 60.4 r/s | `Passed` |
| `TC-LOD-164` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 25 | 725 | 30 ms | 138 ms | 305.91 r/s | `Passed` |
| `TC-LOD-165` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 50 | 2650 | 357 ms | 2004 ms | 129.77 r/s | `Passed` |
| `TC-LOD-166` | `POST` | `/api/auth/login` | User authentication API endpoint | 100 | 5700 | 36 ms | 155 ms | 1604.73 r/s | `Passed` |
| `TC-LOD-167` | `POST` | `/api/auth/register` | User signup API endpoint | 150 | 4800 | 129 ms | 958 ms | 852.88 r/s | `Passed` |
| `TC-LOD-168` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 200 | 7600 | 40 ms | 175 ms | 2516.56 r/s | `Passed` |
| `TC-LOD-169` | `GET` | `/api/companies/list` | Company list listing directory API | 300 | 6600 | 44 ms | 200 ms | 2674.23 r/s | `Passed` |
| `TC-LOD-170` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 400 | 20800 | 51 ms | 232 ms | 5009.63 r/s | `Passed` |
| `TC-LOD-171` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 500 | 10500 | 53 ms | 239 ms | 4018.37 r/s | `Passed` |
| `TC-LOD-172` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 10 | 670 | 30 ms | 111 ms | 190.88 r/s | `Passed` |
| `TC-LOD-173` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 25 | 525 | 32 ms | 130 ms | 241.71 r/s | `Passed` |
| `TC-LOD-174` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 50 | 2250 | 114 ms | 642 ms | 339.37 r/s | `Passed` |
| `TC-LOD-175` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 100 | 2400 | 36 ms | 157 ms | 1015.23 r/s | `Passed` |
| `TC-LOD-176` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 150 | 8250 | 415 ms | 2029 ms | 339.16 r/s | `Passed` |
| `TC-LOD-177` | `POST` | `/api/auth/login` | User authentication API endpoint | 200 | 7400 | 41 ms | 137 ms | 2452.77 r/s | `Passed` |
| `TC-LOD-178` | `POST` | `/api/auth/register` | User signup API endpoint | 300 | 8400 | 158 ms | 1076 ms | 1417.96 r/s | `Passed` |
| `TC-LOD-179` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 400 | 12000 | 48 ms | 222 ms | 4081.63 r/s | `Passed` |
| `TC-LOD-180` | `GET` | `/api/companies/list` | Company list listing directory API | 500 | 13500 | 52 ms | 175 ms | 4648.76 r/s | `Passed` |
| `TC-LOD-181` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 10 | 320 | 28 ms | 98 ms | 133.56 r/s | `Passed` |
| `TC-LOD-182` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 25 | 1500 | 30 ms | 121 ms | 454.55 r/s | `Passed` |
| `TC-LOD-183` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 50 | 3100 | 33 ms | 109 ms | 874.22 r/s | `Passed` |
| `TC-LOD-184` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 100 | 2600 | 35 ms | 114 ms | 1078.84 r/s | `Passed` |
| `TC-LOD-185` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 150 | 3750 | 138 ms | 860 ms | 757.58 r/s | `Passed` |
| `TC-LOD-186` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 200 | 13800 | 37 ms | 178 ms | 3404.89 r/s | `Passed` |
| `TC-LOD-187` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 300 | 15000 | 492 ms | 3011 ms | 574.71 r/s | `Passed` |
| `TC-LOD-188` | `POST` | `/api/auth/login` | User authentication API endpoint | 400 | 12400 | 50 ms | 182 ms | 4065.57 r/s | `Passed` |
| `TC-LOD-189` | `POST` | `/api/auth/register` | User signup API endpoint | 500 | 19000 | 190 ms | 1162 ms | 2178.9 r/s | `Passed` |
| `TC-LOD-190` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 10 | 650 | 29 ms | 126 ms | 192.02 r/s | `Passed` |
| `TC-LOD-191` | `GET` | `/api/companies/list` | Company list listing directory API | 25 | 1150 | 32 ms | 139 ms | 386.94 r/s | `Passed` |
| `TC-LOD-192` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 50 | 3000 | 32 ms | 108 ms | 877.19 r/s | `Passed` |
| `TC-LOD-193` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 100 | 4100 | 33 ms | 144 ms | 1437.08 r/s | `Passed` |
| `TC-LOD-194` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 150 | 3300 | 35 ms | 131 ms | 1453.74 r/s | `Passed` |
| `TC-LOD-195` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 200 | 13200 | 40 ms | 174 ms | 3188.41 r/s | `Passed` |
| `TC-LOD-196` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 300 | 11700 | 155 ms | 1146 ms | 1550.7 r/s | `Passed` |
| `TC-LOD-197` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 400 | 24000 | 46 ms | 208 ms | 5633.8 r/s | `Passed` |
| `TC-LOD-198` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 500 | 34500 | 587 ms | 3303 ms | 821.37 r/s | `Passed` |
| `TC-LOD-199` | `POST` | `/api/auth/login` | User authentication API endpoint | 10 | 630 | 30 ms | 101 ms | 185.84 r/s | `Passed` |
| `TC-LOD-200` | `POST` | `/api/auth/register` | User signup API endpoint | 25 | 1600 | 111 ms | 788 ms | 185.96 r/s | `Passed` |
| `TC-LOD-201` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 50 | 1950 | 31 ms | 115 ms | 719.82 r/s | `Passed` |
| `TC-LOD-202` | `GET` | `/api/companies/list` | Company list listing directory API | 100 | 6500 | 35 ms | 166 ms | 1721.85 r/s | `Passed` |
| `TC-LOD-203` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 150 | 5400 | 35 ms | 137 ms | 1956.52 r/s | `Passed` |
| `TC-LOD-204` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 200 | 12000 | 41 ms | 171 ms | 3030.3 r/s | `Passed` |
| `TC-LOD-205` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 300 | 15600 | 43 ms | 161 ms | 4175.59 r/s | `Passed` |
| `TC-LOD-206` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 400 | 19200 | 50 ms | 161 ms | 4923.08 r/s | `Passed` |
| `TC-LOD-207` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 500 | 27000 | 193 ms | 1247 ms | 2264.72 r/s | `Passed` |
| `TC-LOD-208` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 10 | 380 | 29 ms | 126 ms | 146.04 r/s | `Passed` |
| `TC-LOD-209` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 25 | 675 | 338 ms | 1724 ms | 63.52 r/s | `Passed` |
| `TC-LOD-210` | `POST` | `/api/auth/login` | User authentication API endpoint | 50 | 1250 | 32 ms | 135 ms | 543.48 r/s | `Passed` |
| `TC-LOD-211` | `POST` | `/api/auth/register` | User signup API endpoint | 100 | 6700 | 129 ms | 655 ms | 660.55 r/s | `Passed` |
| `TC-LOD-212` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 150 | 6600 | 37 ms | 127 ms | 2109.97 r/s | `Passed` |
| `TC-LOD-213` | `GET` | `/api/companies/list` | Company list listing directory API | 200 | 11000 | 41 ms | 173 ms | 2929.43 r/s | `Passed` |
| `TC-LOD-214` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 300 | 15300 | 44 ms | 187 ms | 4086.54 r/s | `Passed` |
| `TC-LOD-215` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 400 | 16800 | 46 ms | 210 ms | 4895.1 r/s | `Passed` |
| `TC-LOD-216` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 500 | 26000 | 55 ms | 185 ms | 5963.3 r/s | `Passed` |
| `TC-LOD-217` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 10 | 510 | 29 ms | 121 ms | 171.2 r/s | `Passed` |
| `TC-LOD-218` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 25 | 1225 | 117 ms | 618 ms | 169.36 r/s | `Passed` |
| `TC-LOD-219` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 50 | 2400 | 31 ms | 153 ms | 803.21 r/s | `Passed` |
| `TC-LOD-220` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 100 | 4400 | 356 ms | 2278 ms | 256.35 r/s | `Passed` |
| `TC-LOD-221` | `POST` | `/api/auth/login` | User authentication API endpoint | 150 | 8700 | 38 ms | 142 ms | 2348.81 r/s | `Passed` |
| `TC-LOD-222` | `POST` | `/api/auth/register` | User signup API endpoint | 200 | 7400 | 143 ms | 809 ms | 1089.68 r/s | `Passed` |
| `TC-LOD-223` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 300 | 13800 | 42 ms | 144 ms | 4020.98 r/s | `Passed` |
| `TC-LOD-224` | `GET` | `/api/companies/list` | Company list listing directory API | 400 | 13600 | 49 ms | 211 ms | 4295.64 r/s | `Passed` |
| `TC-LOD-225` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 500 | 18000 | 54 ms | 240 ms | 5226.48 r/s | `Passed` |
| `TC-LOD-226` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 10 | 600 | 29 ms | 102 ms | 185.19 r/s | `Passed` |
| `TC-LOD-227` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 25 | 1425 | 32 ms | 143 ms | 428.7 r/s | `Passed` |
| `TC-LOD-228` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 50 | 1350 | 31 ms | 135 ms | 577.66 r/s | `Passed` |
| `TC-LOD-229` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 100 | 4700 | 129 ms | 853 ms | 621.45 r/s | `Passed` |
| `TC-LOD-230` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 150 | 3150 | 38 ms | 145 ms | 1370.76 r/s | `Passed` |
| `TC-LOD-231` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 200 | 12600 | 439 ms | 2021 ms | 432.14 r/s | `Passed` |
| `TC-LOD-232` | `POST` | `/api/auth/login` | User authentication API endpoint | 300 | 17100 | 44 ms | 161 ms | 4266.47 r/s | `Passed` |
| `TC-LOD-233` | `POST` | `/api/auth/register` | User signup API endpoint | 400 | 27200 | 176 ms | 897 ms | 2019.6 r/s | `Passed` |
| `TC-LOD-234` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 500 | 10000 | 56 ms | 210 ms | 3816.79 r/s | `Passed` |
| `TC-LOD-235` | `GET` | `/api/companies/list` | Company list listing directory API | 10 | 310 | 30 ms | 121 ms | 127.57 r/s | `Passed` |
| `TC-LOD-236` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 25 | 1525 | 31 ms | 109 ms | 449.72 r/s | `Passed` |
| `TC-LOD-237` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 50 | 2650 | 33 ms | 130 ms | 815.64 r/s | `Passed` |
| `TC-LOD-238` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 100 | 5400 | 34 ms | 160 ms | 1618.71 r/s | `Passed` |
| `TC-LOD-239` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 150 | 4500 | 38 ms | 136 ms | 1704.55 r/s | `Passed` |
| `TC-LOD-240` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 200 | 9600 | 144 ms | 893 ms | 1141.23 r/s | `Passed` |
| `TC-LOD-241` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 300 | 17700 | 45 ms | 181 ms | 4259.93 r/s | `Passed` |
| `TC-LOD-242` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 400 | 12800 | 532 ms | 2518 ms | 691 r/s | `Passed` |
| `TC-LOD-243` | `POST` | `/api/auth/login` | User authentication API endpoint | 500 | 12500 | 55 ms | 223 ms | 4347.83 r/s | `Passed` |
| `TC-LOD-244` | `POST` | `/api/auth/register` | User signup API endpoint | 10 | 270 | 108 ms | 683 ms | 61.14 r/s | `Passed` |
| `TC-LOD-245` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 25 | 1075 | 29 ms | 115 ms | 391.34 r/s | `Passed` |
| `TC-LOD-246` | `GET` | `/api/companies/list` | Company list listing directory API | 50 | 2750 | 33 ms | 148 ms | 829.56 r/s | `Passed` |
| `TC-LOD-247` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 100 | 6000 | 35 ms | 111 ms | 1666.67 r/s | `Passed` |
| `TC-LOD-248` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 150 | 5100 | 36 ms | 177 ms | 1872.25 r/s | `Passed` |
| `TC-LOD-249` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 200 | 7600 | 38 ms | 128 ms | 2581.52 r/s | `Passed` |
| `TC-LOD-250` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 300 | 10500 | 42 ms | 154 ms | 3535.35 r/s | `Passed` |
| `TC-LOD-251` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 400 | 13600 | 181 ms | 854 ms | 1776.85 r/s | `Passed` |
| `TC-LOD-252` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 500 | 19500 | 52 ms | 256 ms | 5527.21 r/s | `Passed` |
| `TC-LOD-253` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 10 | 510 | 310 ms | 2114 ms | 29.46 r/s | `Passed` |
| `TC-LOD-254` | `POST` | `/api/auth/login` | User authentication API endpoint | 25 | 1000 | 31 ms | 119 ms | 364.96 r/s | `Passed` |
| `TC-LOD-255` | `POST` | `/api/auth/register` | User signup API endpoint | 50 | 3050 | 116 ms | 767 ms | 355.64 r/s | `Passed` |
| `TC-LOD-256` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 100 | 5400 | 33 ms | 121 ms | 1645.34 r/s | `Passed` |
| `TC-LOD-257` | `GET` | `/api/companies/list` | Company list listing directory API | 150 | 4500 | 38 ms | 151 ms | 1704.55 r/s | `Passed` |
| `TC-LOD-258` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 200 | 12000 | 40 ms | 134 ms | 3076.92 r/s | `Passed` |
| `TC-LOD-259` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 300 | 10800 | 43 ms | 195 ms | 3543.31 r/s | `Passed` |
| `TC-LOD-260` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 400 | 27600 | 47 ms | 168 ms | 5819.1 r/s | `Passed` |
| `TC-LOD-261` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 500 | 13000 | 52 ms | 212 ms | 4558.2 r/s | `Passed` |
| `TC-LOD-262` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 10 | 440 | 115 ms | 595 ms | 67.07 r/s | `Passed` |
| `TC-LOD-263` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 25 | 1150 | 30 ms | 144 ms | 399.31 r/s | `Passed` |
| `TC-LOD-264` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 50 | 3450 | 342 ms | 2091 ms | 137.46 r/s | `Passed` |
| `TC-LOD-265` | `POST` | `/api/auth/login` | User authentication API endpoint | 100 | 3300 | 34 ms | 114 ms | 1258.58 r/s | `Passed` |
| `TC-LOD-266` | `POST` | `/api/auth/register` | User signup API endpoint | 150 | 3750 | 133 ms | 893 ms | 777.2 r/s | `Passed` |
| `TC-LOD-267` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 200 | 8000 | 39 ms | 174 ms | 2614.38 r/s | `Passed` |
| `TC-LOD-268` | `GET` | `/api/companies/list` | Company list listing directory API | 300 | 11400 | 43 ms | 178 ms | 3637.52 r/s | `Passed` |
| `TC-LOD-269` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 400 | 12000 | 51 ms | 188 ms | 3960.4 r/s | `Passed` |
| `TC-LOD-270` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 500 | 32000 | 51 ms | 241 ms | 6717.04 r/s | `Passed` |
| `TC-LOD-271` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 10 | 220 | 29 ms | 126 ms | 102.9 r/s | `Passed` |
| `TC-LOD-272` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 25 | 1600 | 30 ms | 116 ms | 467.84 r/s | `Passed` |
| `TC-LOD-273` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 50 | 2150 | 117 ms | 683 ms | 329.2 r/s | `Passed` |
| `TC-LOD-274` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 100 | 3000 | 34 ms | 147 ms | 1190.48 r/s | `Passed` |
| `TC-LOD-275` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 150 | 9150 | 413 ms | 2572 ms | 342.79 r/s | `Passed` |
| `TC-LOD-276` | `POST` | `/api/auth/login` | User authentication API endpoint | 200 | 13800 | 40 ms | 152 ms | 3239.44 r/s | `Passed` |
| `TC-LOD-277` | `POST` | `/api/auth/register` | User signup API endpoint | 300 | 18600 | 163 ms | 1110 ms | 1602.62 r/s | `Passed` |
| `TC-LOD-278` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 400 | 25600 | 46 ms | 221 ms | 5760.58 r/s | `Passed` |
| `TC-LOD-279` | `GET` | `/api/companies/list` | Company list listing directory API | 500 | 18500 | 55 ms | 250 ms | 5233.38 r/s | `Passed` |
| `TC-LOD-280` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 10 | 280 | 30 ms | 106 ms | 119.66 r/s | `Passed` |
| `TC-LOD-281` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 25 | 1675 | 30 ms | 123 ms | 477.21 r/s | `Passed` |
| `TC-LOD-282` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 50 | 3350 | 30 ms | 154 ms | 954.42 r/s | `Passed` |
| `TC-LOD-283` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 100 | 5500 | 35 ms | 162 ms | 1605.84 r/s | `Passed` |
| `TC-LOD-284` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 150 | 3600 | 130 ms | 706 ms | 779.22 r/s | `Passed` |
| `TC-LOD-285` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 200 | 13600 | 39 ms | 140 ms | 3275.53 r/s | `Passed` |
| `TC-LOD-286` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 300 | 16500 | 454 ms | 2256 ms | 623.35 r/s | `Passed` |
| `TC-LOD-287` | `POST` | `/api/auth/login` | User authentication API endpoint | 400 | 9200 | 50 ms | 167 ms | 3471.7 r/s | `Passed` |
| `TC-LOD-288` | `POST` | `/api/auth/register` | User signup API endpoint | 500 | 17000 | 207 ms | 1051 ms | 1991.1 r/s | `Passed` |
| `TC-LOD-289` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 10 | 450 | 29 ms | 98 ms | 160.43 r/s | `Passed` |
| `TC-LOD-290` | `GET` | `/api/companies/list` | Company list listing directory API | 25 | 1450 | 31 ms | 100 ms | 439.66 r/s | `Passed` |
| `TC-LOD-291` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 50 | 3050 | 33 ms | 127 ms | 868.2 r/s | `Passed` |
| `TC-LOD-292` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 100 | 6200 | 35 ms | 160 ms | 1689.37 r/s | `Passed` |
| `TC-LOD-293` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 150 | 3450 | 38 ms | 152 ms | 1453.24 r/s | `Passed` |
| `TC-LOD-294` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 200 | 5600 | 38 ms | 132 ms | 2184.09 r/s | `Passed` |
| `TC-LOD-295` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 300 | 7800 | 157 ms | 825 ms | 1397.35 r/s | `Passed` |
| `TC-LOD-296` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 400 | 14400 | 51 ms | 180 ms | 4316.55 r/s | `Passed` |
| `TC-LOD-297` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 500 | 22500 | 595 ms | 3312 ms | 795.76 r/s | `Passed` |
| `TC-LOD-298` | `POST` | `/api/auth/login` | User authentication API endpoint | 10 | 440 | 29 ms | 144 ms | 158.5 r/s | `Passed` |
| `TC-LOD-299` | `POST` | `/api/auth/register` | User signup API endpoint | 25 | 600 | 119 ms | 622 ms | 137.74 r/s | `Passed` |
| `TC-LOD-300` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 50 | 1750 | 31 ms | 122 ms | 676.98 r/s | `Passed` |
| `TC-LOD-301` | `GET` | `/api/companies/list` | Company list listing directory API | 100 | 6400 | 33 ms | 165 ms | 1771.87 r/s | `Passed` |
| `TC-LOD-302` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 150 | 7950 | 39 ms | 144 ms | 2228.76 r/s | `Passed` |
| `TC-LOD-303` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 200 | 13600 | 37 ms | 174 ms | 3386.45 r/s | `Passed` |
| `TC-LOD-304` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 300 | 14400 | 44 ms | 186 ms | 3986.71 r/s | `Passed` |
| `TC-LOD-305` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 400 | 21200 | 48 ms | 182 ms | 5242.33 r/s | `Passed` |
| `TC-LOD-306` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 500 | 21500 | 196 ms | 1316 ms | 2165.59 r/s | `Passed` |
| `TC-LOD-307` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 10 | 380 | 30 ms | 112 ms | 143.94 r/s | `Passed` |
| `TC-LOD-308` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 25 | 1075 | 324 ms | 2103 ms | 69.66 r/s | `Passed` |
| `TC-LOD-309` | `POST` | `/api/auth/login` | User authentication API endpoint | 50 | 1000 | 33 ms | 131 ms | 462.96 r/s | `Passed` |
| `TC-LOD-310` | `POST` | `/api/auth/register` | User signup API endpoint | 100 | 4100 | 133 ms | 867 ms | 589.67 r/s | `Passed` |
| `TC-LOD-311` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 150 | 4800 | 37 ms | 144 ms | 1788.38 r/s | `Passed` |
| `TC-LOD-312` | `GET` | `/api/companies/list` | Company list listing directory API | 200 | 13600 | 38 ms | 177 ms | 3330.07 r/s | `Passed` |
| `TC-LOD-313` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 300 | 7500 | 43 ms | 172 ms | 2912.62 r/s | `Passed` |
| `TC-LOD-314` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 400 | 21600 | 51 ms | 206 ms | 5077.57 r/s | `Passed` |
| `TC-LOD-315` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 500 | 25000 | 53 ms | 237 ms | 6024.1 r/s | `Passed` |
| `TC-LOD-316` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 10 | 680 | 28 ms | 138 ms | 199.76 r/s | `Passed` |
| `TC-LOD-317` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 25 | 775 | 114 ms | 615 ms | 153.95 r/s | `Passed` |
| `TC-LOD-318` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 50 | 1250 | 33 ms | 132 ms | 537.63 r/s | `Passed` |
| `TC-LOD-319` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 100 | 5900 | 363 ms | 2346 ms | 257.45 r/s | `Passed` |
| `TC-LOD-320` | `POST` | `/api/auth/login` | User authentication API endpoint | 150 | 9000 | 36 ms | 173 ms | 2459.02 r/s | `Passed` |
