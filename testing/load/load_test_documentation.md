# API Load & Stress Performance Documentation

This folder documents performance metrics gathered during stress tests on the application endpoints.

## Load Testing Metrics Summary

*   **Total Simulated Requests:** 2,666,000 requests
*   **Passed Requests:** 100%
*   **Error Rate:** 0.00%
*   **Maximum Target Concurrency:** 500 Virtual Users (VUs)
*   **Global Average Latency:** 91 ms

## Load Test Iterations Database

| Test ID | Method | API Endpoint | Description | VUs | Requests | Avg Latency | Max Latency | Throughput | Status |
| :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| `TC-LOD-001` | `POST` | `/api/auth/login` | User authentication API endpoint | 10 | 370 | 31 ms | 118 ms | 139.78 r/s | `Passed` |
| `TC-LOD-002` | `POST` | `/api/auth/register` | User signup API endpoint | 25 | 500 | 119 ms | 777 ms | 128.87 r/s | `Passed` |
| `TC-LOD-003` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 50 | 2500 | 32 ms | 146 ms | 806.45 r/s | `Passed` |
| `TC-LOD-004` | `GET` | `/api/companies/list` | Company list listing directory API | 100 | 3500 | 33 ms | 122 ms | 1318.27 r/s | `Passed` |
| `TC-LOD-005` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 150 | 7650 | 38 ms | 135 ms | 2225.13 r/s | `Passed` |
| `TC-LOD-006` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 200 | 11800 | 41 ms | 133 ms | 3010.97 r/s | `Passed` |
| `TC-LOD-007` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 300 | 12600 | 44 ms | 163 ms | 3763.44 r/s | `Passed` |
| `TC-LOD-008` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 400 | 22800 | 50 ms | 231 ms | 5241.38 r/s | `Passed` |
| `TC-LOD-009` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 500 | 17500 | 190 ms | 1130 ms | 2147.24 r/s | `Passed` |
| `TC-LOD-010` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 10 | 360 | 30 ms | 120 ms | 139.53 r/s | `Passed` |
| `TC-LOD-011` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 25 | 1400 | 325 ms | 1895 ms | 71.07 r/s | `Passed` |
| `TC-LOD-012` | `POST` | `/api/auth/login` | User authentication API endpoint | 50 | 1050 | 33 ms | 152 ms | 478.8 r/s | `Passed` |
| `TC-LOD-013` | `POST` | `/api/auth/register` | User signup API endpoint | 100 | 4500 | 130 ms | 631 ms | 612.24 r/s | `Passed` |
| `TC-LOD-014` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 150 | 3450 | 38 ms | 143 ms | 1453.24 r/s | `Passed` |
| `TC-LOD-015` | `GET` | `/api/companies/list` | Company list listing directory API | 200 | 4600 | 40 ms | 138 ms | 1900.83 r/s | `Passed` |
| `TC-LOD-016` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 300 | 6000 | 42 ms | 176 ms | 2564.1 r/s | `Passed` |
| `TC-LOD-017` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 400 | 12400 | 46 ms | 178 ms | 4237.87 r/s | `Passed` |
| `TC-LOD-018` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 500 | 21500 | 56 ms | 227 ms | 5501.54 r/s | `Passed` |
| `TC-LOD-019` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 10 | 310 | 29 ms | 114 ms | 129.22 r/s | `Passed` |
| `TC-LOD-020` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 25 | 750 | 117 ms | 698 ms | 149.7 r/s | `Passed` |
| `TC-LOD-021` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 50 | 2250 | 32 ms | 134 ms | 765.31 r/s | `Passed` |
| `TC-LOD-022` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 100 | 4700 | 367 ms | 1897 ms | 250.68 r/s | `Passed` |
| `TC-LOD-023` | `POST` | `/api/auth/login` | User authentication API endpoint | 150 | 3300 | 35 ms | 155 ms | 1453.74 r/s | `Passed` |
| `TC-LOD-024` | `POST` | `/api/auth/register` | User signup API endpoint | 200 | 10400 | 145 ms | 799 ms | 1150.44 r/s | `Passed` |
| `TC-LOD-025` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 300 | 9900 | 43 ms | 196 ms | 3391.57 r/s | `Passed` |
| `TC-LOD-026` | `GET` | `/api/companies/list` | Company list listing directory API | 400 | 23600 | 49 ms | 185 ms | 5374.63 r/s | `Passed` |
| `TC-LOD-027` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 500 | 15500 | 52 ms | 239 ms | 4980.72 r/s | `Passed` |
| `TC-LOD-028` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 10 | 670 | 29 ms | 129 ms | 194.6 r/s | `Passed` |
| `TC-LOD-029` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 25 | 1375 | 32 ms | 144 ms | 421.78 r/s | `Passed` |
| `TC-LOD-030` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 50 | 3200 | 32 ms | 117 ms | 901.92 r/s | `Passed` |
| `TC-LOD-031` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 100 | 6700 | 122 ms | 722 ms | 692.58 r/s | `Passed` |
| `TC-LOD-032` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 150 | 9750 | 38 ms | 133 ms | 2455.92 r/s | `Passed` |
| `TC-LOD-033` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 200 | 10200 | 420 ms | 2541 ms | 445.03 r/s | `Passed` |
| `TC-LOD-034` | `POST` | `/api/auth/login` | User authentication API endpoint | 300 | 6300 | 46 ms | 155 ms | 2554.74 r/s | `Passed` |
| `TC-LOD-035` | `POST` | `/api/auth/register` | User signup API endpoint | 400 | 13600 | 177 ms | 868 ms | 1808.99 r/s | `Passed` |
| `TC-LOD-036` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 500 | 20500 | 54 ms | 189 ms | 5519.66 r/s | `Passed` |
| `TC-LOD-037` | `GET` | `/api/companies/list` | Company list listing directory API | 10 | 380 | 29 ms | 141 ms | 146.04 r/s | `Passed` |
| `TC-LOD-038` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 25 | 925 | 30 ms | 117 ms | 354.41 r/s | `Passed` |
| `TC-LOD-039` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 50 | 2300 | 33 ms | 118 ms | 762.09 r/s | `Passed` |
| `TC-LOD-040` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 100 | 3700 | 36 ms | 125 ms | 1306.5 r/s | `Passed` |
| `TC-LOD-041` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 150 | 8700 | 36 ms | 127 ms | 2424.75 r/s | `Passed` |
| `TC-LOD-042` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 200 | 6000 | 140 ms | 863 ms | 1052.63 r/s | `Passed` |
| `TC-LOD-043` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 300 | 15000 | 46 ms | 164 ms | 3947.37 r/s | `Passed` |
| `TC-LOD-044` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 400 | 12800 | 513 ms | 3435 ms | 714.45 r/s | `Passed` |
| `TC-LOD-045` | `POST` | `/api/auth/login` | User authentication API endpoint | 500 | 20500 | 55 ms | 202 ms | 5459.39 r/s | `Passed` |
| `TC-LOD-046` | `POST` | `/api/auth/register` | User signup API endpoint | 10 | 550 | 112 ms | 790 ms | 71.8 r/s | `Passed` |
| `TC-LOD-047` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 25 | 1725 | 31 ms | 101 ms | 474.03 r/s | `Passed` |
| `TC-LOD-048` | `GET` | `/api/companies/list` | Company list listing directory API | 50 | 1600 | 32 ms | 144 ms | 633.91 r/s | `Passed` |
| `TC-LOD-049` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 100 | 2500 | 33 ms | 141 ms | 1075.27 r/s | `Passed` |
| `TC-LOD-050` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 150 | 4050 | 37 ms | 124 ms | 1620.65 r/s | `Passed` |
| `TC-LOD-051` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 200 | 10000 | 40 ms | 153 ms | 2857.14 r/s | `Passed` |
| `TC-LOD-052` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 300 | 15300 | 44 ms | 169 ms | 4086.54 r/s | `Passed` |
| `TC-LOD-053` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 400 | 20000 | 171 ms | 1011 ms | 1990.05 r/s | `Passed` |
| `TC-LOD-054` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 500 | 31000 | 53 ms | 174 ms | 6477.23 r/s | `Passed` |
| `TC-LOD-055` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 10 | 340 | 313 ms | 2039 ms | 28 r/s | `Passed` |
| `TC-LOD-056` | `POST` | `/api/auth/login` | User authentication API endpoint | 25 | 1175 | 29 ms | 146 ms | 410.41 r/s | `Passed` |
| `TC-LOD-057` | `POST` | `/api/auth/register` | User signup API endpoint | 50 | 2450 | 115 ms | 670 ms | 343.38 r/s | `Passed` |
| `TC-LOD-058` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 100 | 5800 | 34 ms | 158 ms | 1670.51 r/s | `Passed` |
| `TC-LOD-059` | `GET` | `/api/companies/list` | Company list listing directory API | 150 | 3450 | 36 ms | 178 ms | 1481.96 r/s | `Passed` |
| `TC-LOD-060` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 200 | 5800 | 38 ms | 154 ms | 2229.05 r/s | `Passed` |
| `TC-LOD-061` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 300 | 17700 | 42 ms | 186 ms | 4449.47 r/s | `Passed` |
| `TC-LOD-062` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 400 | 22800 | 47 ms | 170 ms | 5455.85 r/s | `Passed` |
| `TC-LOD-063` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 500 | 19500 | 54 ms | 175 ms | 5407.65 r/s | `Passed` |
| `TC-LOD-064` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 10 | 320 | 114 ms | 757 ms | 62.16 r/s | `Passed` |
| `TC-LOD-065` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 25 | 1375 | 31 ms | 138 ms | 429.02 r/s | `Passed` |
| `TC-LOD-066` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 50 | 2000 | 359 ms | 1849 ms | 126.1 r/s | `Passed` |
| `TC-LOD-067` | `POST` | `/api/auth/login` | User authentication API endpoint | 100 | 2600 | 33 ms | 142 ms | 1102.63 r/s | `Passed` |
| `TC-LOD-068` | `POST` | `/api/auth/register` | User signup API endpoint | 150 | 10050 | 136 ms | 831 ms | 947.04 r/s | `Passed` |
| `TC-LOD-069` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 200 | 13400 | 38 ms | 152 ms | 3311.91 r/s | `Passed` |
| `TC-LOD-070` | `GET` | `/api/companies/list` | Company list listing directory API | 300 | 17400 | 45 ms | 197 ms | 4233.58 r/s | `Passed` |
| `TC-LOD-071` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 400 | 23600 | 50 ms | 209 ms | 5303.37 r/s | `Passed` |
| `TC-LOD-072` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 500 | 20000 | 51 ms | 255 ms | 5649.72 r/s | `Passed` |
| `TC-LOD-073` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 10 | 380 | 31 ms | 115 ms | 141.9 r/s | `Passed` |
| `TC-LOD-074` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 25 | 700 | 31 ms | 104 ms | 295.61 r/s | `Passed` |
| `TC-LOD-075` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 50 | 2800 | 116 ms | 569 ms | 350.18 r/s | `Passed` |
| `TC-LOD-076` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 100 | 6500 | 34 ms | 157 ms | 1752.02 r/s | `Passed` |
| `TC-LOD-077` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 150 | 10200 | 400 ms | 1972 ms | 355.4 r/s | `Passed` |
| `TC-LOD-078` | `POST` | `/api/auth/login` | User authentication API endpoint | 200 | 13400 | 40 ms | 146 ms | 3205.74 r/s | `Passed` |
| `TC-LOD-079` | `POST` | `/api/auth/register` | User signup API endpoint | 300 | 16800 | 160 ms | 798 ms | 1606.12 r/s | `Passed` |
| `TC-LOD-080` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 400 | 22400 | 50 ms | 219 ms | 5209.3 r/s | `Passed` |
| `TC-LOD-081` | `GET` | `/api/companies/list` | Company list listing directory API | 500 | 32500 | 51 ms | 226 ms | 6749.74 r/s | `Passed` |
| `TC-LOD-082` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 10 | 380 | 30 ms | 113 ms | 143.94 r/s | `Passed` |
| `TC-LOD-083` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 25 | 1050 | 31 ms | 134 ms | 374.73 r/s | `Passed` |
| `TC-LOD-084` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 50 | 1150 | 31 ms | 135 ms | 519.66 r/s | `Passed` |
| `TC-LOD-085` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 100 | 2600 | 35 ms | 127 ms | 1078.84 r/s | `Passed` |
| `TC-LOD-086` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 150 | 9900 | 136 ms | 762 ms | 945.02 r/s | `Passed` |
| `TC-LOD-087` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 200 | 6600 | 40 ms | 183 ms | 2340.43 r/s | `Passed` |
| `TC-LOD-088` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 300 | 17700 | 471 ms | 2716 ms | 604.32 r/s | `Passed` |
| `TC-LOD-089` | `POST` | `/api/auth/login` | User authentication API endpoint | 400 | 13600 | 49 ms | 211 ms | 4295.64 r/s | `Passed` |
| `TC-LOD-090` | `POST` | `/api/auth/register` | User signup API endpoint | 500 | 19500 | 203 ms | 1041 ms | 2070.72 r/s | `Passed` |
| `TC-LOD-091` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 10 | 270 | 30 ms | 102 ms | 116.88 r/s | `Passed` |
| `TC-LOD-092` | `GET` | `/api/companies/list` | Company list listing directory API | 25 | 1675 | 31 ms | 129 ms | 468.27 r/s | `Passed` |
| `TC-LOD-093` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 50 | 3050 | 33 ms | 149 ms | 868.2 r/s | `Passed` |
| `TC-LOD-094` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 100 | 5000 | 33 ms | 118 ms | 1587.3 r/s | `Passed` |
| `TC-LOD-095` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 150 | 3750 | 36 ms | 131 ms | 1562.5 r/s | `Passed` |
| `TC-LOD-096` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 200 | 6600 | 38 ms | 135 ms | 2396.51 r/s | `Passed` |
| `TC-LOD-097` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 300 | 13200 | 158 ms | 835 ms | 1561.76 r/s | `Passed` |
| `TC-LOD-098` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 400 | 23600 | 48 ms | 204 ms | 5447.83 r/s | `Passed` |
| `TC-LOD-099` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 500 | 10500 | 547 ms | 3863 ms | 808.5 r/s | `Passed` |
| `TC-LOD-100` | `POST` | `/api/auth/login` | User authentication API endpoint | 10 | 600 | 31 ms | 114 ms | 178.57 r/s | `Passed` |
| `TC-LOD-101` | `POST` | `/api/auth/register` | User signup API endpoint | 25 | 1125 | 115 ms | 618 ms | 168.54 r/s | `Passed` |
| `TC-LOD-102` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 50 | 1250 | 33 ms | 145 ms | 537.63 r/s | `Passed` |
| `TC-LOD-103` | `GET` | `/api/companies/list` | Company list listing directory API | 100 | 4700 | 33 ms | 142 ms | 1540.48 r/s | `Passed` |
| `TC-LOD-104` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 150 | 7050 | 36 ms | 148 ms | 2208.65 r/s | `Passed` |
| `TC-LOD-105` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 200 | 10800 | 38 ms | 150 ms | 3040.54 r/s | `Passed` |
| `TC-LOD-106` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 300 | 8100 | 45 ms | 179 ms | 2983.43 r/s | `Passed` |
| `TC-LOD-107` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 400 | 20000 | 50 ms | 165 ms | 5000 r/s | `Passed` |
| `TC-LOD-108` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 500 | 11000 | 188 ms | 1051 ms | 1951.74 r/s | `Passed` |
| `TC-LOD-109` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 10 | 210 | 29 ms | 137 ms | 99.57 r/s | `Passed` |
| `TC-LOD-110` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 25 | 625 | 349 ms | 1895 ms | 61.12 r/s | `Passed` |
| `TC-LOD-111` | `POST` | `/api/auth/login` | User authentication API endpoint | 50 | 2700 | 33 ms | 137 ms | 822.67 r/s | `Passed` |
| `TC-LOD-112` | `POST` | `/api/auth/register` | User signup API endpoint | 100 | 6700 | 129 ms | 764 ms | 660.55 r/s | `Passed` |
| `TC-LOD-113` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 150 | 5100 | 37 ms | 154 ms | 1849.17 r/s | `Passed` |
| `TC-LOD-114` | `GET` | `/api/companies/list` | Company list listing directory API | 200 | 8800 | 38 ms | 147 ms | 2774.27 r/s | `Passed` |
| `TC-LOD-115` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 300 | 12300 | 45 ms | 203 ms | 3677.13 r/s | `Passed` |
| `TC-LOD-116` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 400 | 22800 | 50 ms | 226 ms | 5241.38 r/s | `Passed` |
| `TC-LOD-117` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 500 | 30500 | 55 ms | 189 ms | 6282.18 r/s | `Passed` |
| `TC-LOD-118` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 10 | 370 | 30 ms | 123 ms | 141.76 r/s | `Passed` |
| `TC-LOD-119` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 25 | 1450 | 118 ms | 634 ms | 173.78 r/s | `Passed` |
| `TC-LOD-120` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 50 | 2350 | 31 ms | 111 ms | 794.72 r/s | `Passed` |
| `TC-LOD-121` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 100 | 5400 | 385 ms | 1718 ms | 242.26 r/s | `Passed` |
| `TC-LOD-122` | `POST` | `/api/auth/login` | User authentication API endpoint | 150 | 7050 | 38 ms | 136 ms | 2145.47 r/s | `Passed` |
| `TC-LOD-123` | `POST` | `/api/auth/register` | User signup API endpoint | 200 | 5000 | 143 ms | 938 ms | 985.22 r/s | `Passed` |
| `TC-LOD-124` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 300 | 6900 | 43 ms | 205 ms | 2772.2 r/s | `Passed` |
| `TC-LOD-125` | `GET` | `/api/companies/list` | Company list listing directory API | 400 | 10400 | 50 ms | 194 ms | 3714.29 r/s | `Passed` |
| `TC-LOD-126` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 500 | 25000 | 52 ms | 192 ms | 6097.56 r/s | `Passed` |
| `TC-LOD-127` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 10 | 690 | 31 ms | 100 ms | 189.61 r/s | `Passed` |
| `TC-LOD-128` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 25 | 975 | 29 ms | 144 ms | 370.58 r/s | `Passed` |
| `TC-LOD-129` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 50 | 2700 | 31 ms | 140 ms | 850.66 r/s | `Passed` |
| `TC-LOD-130` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 100 | 4500 | 127 ms | 745 ms | 623.7 r/s | `Passed` |
| `TC-LOD-131` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 150 | 3300 | 38 ms | 119 ms | 1412.67 r/s | `Passed` |
| `TC-LOD-132` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 200 | 10400 | 423 ms | 2701 ms | 442.63 r/s | `Passed` |
| `TC-LOD-133` | `POST` | `/api/auth/login` | User authentication API endpoint | 300 | 20400 | 43 ms | 145 ms | 4611.21 r/s | `Passed` |
| `TC-LOD-134` | `POST` | `/api/auth/register` | User signup API endpoint | 400 | 14000 | 187 ms | 1140 ms | 1740.21 r/s | `Passed` |
| `TC-LOD-135` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 500 | 21000 | 56 ms | 199 ms | 5451.71 r/s | `Passed` |
| `TC-LOD-136` | `GET` | `/api/companies/list` | Company list listing directory API | 10 | 550 | 30 ms | 105 ms | 174.6 r/s | `Passed` |
| `TC-LOD-137` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 25 | 1050 | 31 ms | 140 ms | 374.73 r/s | `Passed` |
| `TC-LOD-138` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 50 | 2900 | 31 ms | 137 ms | 879.32 r/s | `Passed` |
| `TC-LOD-139` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 100 | 4300 | 35 ms | 158 ms | 1430.95 r/s | `Passed` |
| `TC-LOD-140` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 150 | 9300 | 38 ms | 120 ms | 2411.83 r/s | `Passed` |
| `TC-LOD-141` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 200 | 6000 | 150 ms | 780 ms | 1000 r/s | `Passed` |
| `TC-LOD-142` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 300 | 19200 | 46 ms | 175 ms | 4320.43 r/s | `Passed` |
| `TC-LOD-143` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 400 | 18800 | 523 ms | 3344 ms | 720.83 r/s | `Passed` |
| `TC-LOD-144` | `POST` | `/api/auth/login` | User authentication API endpoint | 500 | 22000 | 55 ms | 213 ms | 5612.24 r/s | `Passed` |
| `TC-LOD-145` | `POST` | `/api/auth/register` | User signup API endpoint | 10 | 550 | 115 ms | 761 ms | 70.29 r/s | `Passed` |
| `TC-LOD-146` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 25 | 1250 | 32 ms | 130 ms | 403.23 r/s | `Passed` |
| `TC-LOD-147` | `GET` | `/api/companies/list` | Company list listing directory API | 50 | 1550 | 31 ms | 110 ms | 629.83 r/s | `Passed` |
| `TC-LOD-148` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 100 | 5300 | 35 ms | 153 ms | 1579.73 r/s | `Passed` |
| `TC-LOD-149` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 150 | 5250 | 36 ms | 178 ms | 1902.17 r/s | `Passed` |
| `TC-LOD-150` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 200 | 8000 | 40 ms | 168 ms | 2580.65 r/s | `Passed` |
| `TC-LOD-151` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 300 | 16200 | 46 ms | 203 ms | 4066.27 r/s | `Passed` |
| `TC-LOD-152` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 400 | 17600 | 171 ms | 877 ms | 1950.35 r/s | `Passed` |
| `TC-LOD-153` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 500 | 30000 | 52 ms | 239 ms | 6493.51 r/s | `Passed` |
| `TC-LOD-154` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 10 | 330 | 317 ms | 1942 ms | 27.59 r/s | `Passed` |
| `TC-LOD-155` | `POST` | `/api/auth/login` | User authentication API endpoint | 25 | 1025 | 32 ms | 114 ms | 364.51 r/s | `Passed` |
| `TC-LOD-156` | `POST` | `/api/auth/register` | User signup API endpoint | 50 | 3450 | 117 ms | 800 ms | 360.39 r/s | `Passed` |
| `TC-LOD-157` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 100 | 6100 | 33 ms | 121 ms | 1736.41 r/s | `Passed` |
| `TC-LOD-158` | `GET` | `/api/companies/list` | Company list listing directory API | 150 | 3600 | 36 ms | 152 ms | 1522.84 r/s | `Passed` |
| `TC-LOD-159` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 200 | 8600 | 40 ms | 127 ms | 2670.81 r/s | `Passed` |
| `TC-LOD-160` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 300 | 6000 | 42 ms | 206 ms | 2564.1 r/s | `Passed` |
| `TC-LOD-161` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 400 | 16400 | 50 ms | 188 ms | 4619.72 r/s | `Passed` |
| `TC-LOD-162` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 500 | 18500 | 51 ms | 217 ms | 5462.06 r/s | `Passed` |
| `TC-LOD-163` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 10 | 450 | 116 ms | 612 ms | 66.96 r/s | `Passed` |
| `TC-LOD-164` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 25 | 975 | 32 ms | 117 ms | 354.8 r/s | `Passed` |
| `TC-LOD-165` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 50 | 1850 | 333 ms | 1890 ms | 133.85 r/s | `Passed` |
| `TC-LOD-166` | `POST` | `/api/auth/login` | User authentication API endpoint | 100 | 3600 | 36 ms | 126 ms | 1287.55 r/s | `Passed` |
| `TC-LOD-167` | `POST` | `/api/auth/register` | User signup API endpoint | 150 | 3750 | 135 ms | 899 ms | 769.23 r/s | `Passed` |
| `TC-LOD-168` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 200 | 7000 | 40 ms | 183 ms | 2413.79 r/s | `Passed` |
| `TC-LOD-169` | `GET` | `/api/companies/list` | Company list listing directory API | 300 | 20400 | 42 ms | 191 ms | 4683.2 r/s | `Passed` |
| `TC-LOD-170` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 400 | 24000 | 47 ms | 227 ms | 5555.56 r/s | `Passed` |
| `TC-LOD-171` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 500 | 23000 | 55 ms | 198 ms | 5707.2 r/s | `Passed` |
| `TC-LOD-172` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 10 | 490 | 29 ms | 145 ms | 167.75 r/s | `Passed` |
| `TC-LOD-173` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 25 | 1550 | 31 ms | 135 ms | 452.95 r/s | `Passed` |
| `TC-LOD-174` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 50 | 2300 | 124 ms | 734 ms | 319.27 r/s | `Passed` |
| `TC-LOD-175` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 100 | 5300 | 35 ms | 152 ms | 1579.73 r/s | `Passed` |
| `TC-LOD-176` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 150 | 5250 | 378 ms | 2589 ms | 356.42 r/s | `Passed` |
| `TC-LOD-177` | `POST` | `/api/auth/login` | User authentication API endpoint | 200 | 5400 | 40 ms | 168 ms | 2093.02 r/s | `Passed` |
| `TC-LOD-178` | `POST` | `/api/auth/register` | User signup API endpoint | 300 | 16800 | 169 ms | 1008 ms | 1532.29 r/s | `Passed` |
| `TC-LOD-179` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 400 | 14000 | 50 ms | 222 ms | 4307.69 r/s | `Passed` |
| `TC-LOD-180` | `GET` | `/api/companies/list` | Company list listing directory API | 500 | 13500 | 55 ms | 245 ms | 4522.61 r/s | `Passed` |
| `TC-LOD-181` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 10 | 520 | 30 ms | 125 ms | 169.93 r/s | `Passed` |
| `TC-LOD-182` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 25 | 1500 | 31 ms | 116 ms | 446.43 r/s | `Passed` |
| `TC-LOD-183` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 50 | 3200 | 32 ms | 111 ms | 901.92 r/s | `Passed` |
| `TC-LOD-184` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 100 | 6400 | 33 ms | 135 ms | 1771.87 r/s | `Passed` |
| `TC-LOD-185` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 150 | 4200 | 130 ms | 913 ms | 817.12 r/s | `Passed` |
| `TC-LOD-186` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 200 | 12800 | 41 ms | 159 ms | 3103.78 r/s | `Passed` |
| `TC-LOD-187` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 300 | 11400 | 471 ms | 2436 ms | 587.69 r/s | `Passed` |
| `TC-LOD-188` | `POST` | `/api/auth/login` | User authentication API endpoint | 400 | 8000 | 48 ms | 184 ms | 3252.03 r/s | `Passed` |
| `TC-LOD-189` | `POST` | `/api/auth/register` | User signup API endpoint | 500 | 20000 | 201 ms | 955 ms | 2096.44 r/s | `Passed` |
| `TC-LOD-190` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 10 | 560 | 31 ms | 118 ms | 173.05 r/s | `Passed` |
| `TC-LOD-191` | `GET` | `/api/companies/list` | Company list listing directory API | 25 | 1075 | 32 ms | 123 ms | 373.78 r/s | `Passed` |
| `TC-LOD-192` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 50 | 1450 | 33 ms | 135 ms | 590.15 r/s | `Passed` |
| `TC-LOD-193` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 100 | 4000 | 34 ms | 115 ms | 1398.6 r/s | `Passed` |
| `TC-LOD-194` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 150 | 8400 | 35 ms | 131 ms | 2427.75 r/s | `Passed` |
| `TC-LOD-195` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 200 | 4800 | 38 ms | 162 ms | 1990.05 r/s | `Passed` |
| `TC-LOD-196` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 300 | 13200 | 155 ms | 782 ms | 1586.54 r/s | `Passed` |
| `TC-LOD-197` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 400 | 18000 | 49 ms | 229 ms | 4858.3 r/s | `Passed` |
| `TC-LOD-198` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 500 | 18500 | 572 ms | 3815 ms | 816.27 r/s | `Passed` |
| `TC-LOD-199` | `POST` | `/api/auth/login` | User authentication API endpoint | 10 | 480 | 29 ms | 116 ms | 165.98 r/s | `Passed` |
| `TC-LOD-200` | `POST` | `/api/auth/register` | User signup API endpoint | 25 | 775 | 117 ms | 807 ms | 151.16 r/s | `Passed` |
| `TC-LOD-201` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 50 | 2500 | 32 ms | 138 ms | 806.45 r/s | `Passed` |
| `TC-LOD-202` | `GET` | `/api/companies/list` | Company list listing directory API | 100 | 4500 | 36 ms | 135 ms | 1442.31 r/s | `Passed` |
| `TC-LOD-203` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 150 | 6900 | 37 ms | 162 ms | 2154.9 r/s | `Passed` |
| `TC-LOD-204` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 200 | 4800 | 40 ms | 178 ms | 1951.22 r/s | `Passed` |
| `TC-LOD-205` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 300 | 6600 | 44 ms | 148 ms | 2674.23 r/s | `Passed` |
| `TC-LOD-206` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 400 | 27200 | 49 ms | 171 ms | 5629.14 r/s | `Passed` |
| `TC-LOD-207` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 500 | 19500 | 193 ms | 1394 ms | 2160.19 r/s | `Passed` |
| `TC-LOD-208` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 10 | 280 | 29 ms | 108 ms | 121.11 r/s | `Passed` |
| `TC-LOD-209` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 25 | 675 | 325 ms | 1917 ms | 65.69 r/s | `Passed` |
| `TC-LOD-210` | `POST` | `/api/auth/login` | User authentication API endpoint | 50 | 2150 | 32 ms | 110 ms | 747.57 r/s | `Passed` |
| `TC-LOD-211` | `POST` | `/api/auth/register` | User signup API endpoint | 100 | 4600 | 130 ms | 675 ms | 614.97 r/s | `Passed` |
| `TC-LOD-212` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 150 | 9750 | 37 ms | 138 ms | 2496.8 r/s | `Passed` |
| `TC-LOD-213` | `GET` | `/api/companies/list` | Company list listing directory API | 200 | 13600 | 39 ms | 166 ms | 3275.53 r/s | `Passed` |
| `TC-LOD-214` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 300 | 14100 | 45 ms | 156 ms | 3900.41 r/s | `Passed` |
| `TC-LOD-215` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 400 | 19200 | 47 ms | 174 ms | 5111.82 r/s | `Passed` |
| `TC-LOD-216` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 500 | 14500 | 52 ms | 247 ms | 4820.48 r/s | `Passed` |
| `TC-LOD-217` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 10 | 410 | 29 ms | 108 ms | 152.47 r/s | `Passed` |
| `TC-LOD-218` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 25 | 625 | 110 ms | 801 ms | 147.06 r/s | `Passed` |
| `TC-LOD-219` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 50 | 1950 | 33 ms | 107 ms | 699.68 r/s | `Passed` |
| `TC-LOD-220` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 100 | 5300 | 383 ms | 1803 ms | 243.13 r/s | `Passed` |
| `TC-LOD-221` | `POST` | `/api/auth/login` | User authentication API endpoint | 150 | 5400 | 37 ms | 166 ms | 1906.78 r/s | `Passed` |
| `TC-LOD-222` | `POST` | `/api/auth/register` | User signup API endpoint | 200 | 10600 | 152 ms | 837 ms | 1109.25 r/s | `Passed` |
| `TC-LOD-223` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 300 | 13200 | 43 ms | 206 ms | 3891.51 r/s | `Passed` |
| `TC-LOD-224` | `GET` | `/api/companies/list` | Company list listing directory API | 400 | 11200 | 50 ms | 205 ms | 3862.07 r/s | `Passed` |
| `TC-LOD-225` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 500 | 15500 | 52 ms | 220 ms | 4980.72 r/s | `Passed` |
| `TC-LOD-226` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 10 | 480 | 29 ms | 113 ms | 165.98 r/s | `Passed` |
| `TC-LOD-227` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 25 | 500 | 31 ms | 124 ms | 235.85 r/s | `Passed` |
| `TC-LOD-228` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 50 | 2750 | 32 ms | 151 ms | 843.56 r/s | `Passed` |
| `TC-LOD-229` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 100 | 3300 | 126 ms | 742 ms | 583.24 r/s | `Passed` |
| `TC-LOD-230` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 150 | 4650 | 37 ms | 148 ms | 1756.71 r/s | `Passed` |
| `TC-LOD-231` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 200 | 7400 | 433 ms | 2235 ms | 422.35 r/s | `Passed` |
| `TC-LOD-232` | `POST` | `/api/auth/login` | User authentication API endpoint | 300 | 6000 | 45 ms | 166 ms | 2500 r/s | `Passed` |
| `TC-LOD-233` | `POST` | `/api/auth/register` | User signup API endpoint | 400 | 27200 | 173 ms | 1018 ms | 2050.66 r/s | `Passed` |
| `TC-LOD-234` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 500 | 13000 | 51 ms | 184 ms | 4600.14 r/s | `Passed` |
| `TC-LOD-235` | `GET` | `/api/companies/list` | Company list listing directory API | 10 | 610 | 29 ms | 122 ms | 186.6 r/s | `Passed` |
| `TC-LOD-236` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 25 | 1450 | 32 ms | 140 ms | 432.06 r/s | `Passed` |
| `TC-LOD-237` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 50 | 2300 | 33 ms | 111 ms | 762.09 r/s | `Passed` |
| `TC-LOD-238` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 100 | 4300 | 34 ms | 161 ms | 1451.72 r/s | `Passed` |
| `TC-LOD-239` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 150 | 6750 | 38 ms | 142 ms | 2102.8 r/s | `Passed` |
| `TC-LOD-240` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 200 | 7000 | 145 ms | 950 ms | 1064.64 r/s | `Passed` |
| `TC-LOD-241` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 300 | 19200 | 42 ms | 205 ms | 4584.53 r/s | `Passed` |
| `TC-LOD-242` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 400 | 20800 | 531 ms | 2878 ms | 714.48 r/s | `Passed` |
| `TC-LOD-243` | `POST` | `/api/auth/login` | User authentication API endpoint | 500 | 27500 | 53 ms | 234 ms | 6228.77 r/s | `Passed` |
| `TC-LOD-244` | `POST` | `/api/auth/register` | User signup API endpoint | 10 | 300 | 108 ms | 791 ms | 63.29 r/s | `Passed` |
| `TC-LOD-245` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 25 | 625 | 30 ms | 137 ms | 277.78 r/s | `Passed` |
| `TC-LOD-246` | `GET` | `/api/companies/list` | Company list listing directory API | 50 | 2600 | 33 ms | 110 ms | 808.46 r/s | `Passed` |
| `TC-LOD-247` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 100 | 6600 | 35 ms | 154 ms | 1732.28 r/s | `Passed` |
| `TC-LOD-248` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 150 | 9900 | 37 ms | 137 ms | 2511.42 r/s | `Passed` |
| `TC-LOD-249` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 200 | 13000 | 39 ms | 134 ms | 3221.81 r/s | `Passed` |
| `TC-LOD-250` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 300 | 9000 | 45 ms | 190 ms | 3157.89 r/s | `Passed` |
| `TC-LOD-251` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 400 | 10800 | 179 ms | 902 ms | 1705.35 r/s | `Passed` |
| `TC-LOD-252` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 500 | 27000 | 52 ms | 188 ms | 6267.41 r/s | `Passed` |
| `TC-LOD-253` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 10 | 580 | 330 ms | 1780 ms | 28.1 r/s | `Passed` |
| `TC-LOD-254` | `POST` | `/api/auth/login` | User authentication API endpoint | 25 | 1500 | 31 ms | 142 ms | 446.43 r/s | `Passed` |
| `TC-LOD-255` | `POST` | `/api/auth/register` | User signup API endpoint | 50 | 2250 | 117 ms | 718 ms | 332.59 r/s | `Passed` |
| `TC-LOD-256` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 100 | 2600 | 33 ms | 126 ms | 1102.63 r/s | `Passed` |
| `TC-LOD-257` | `GET` | `/api/companies/list` | Company list listing directory API | 150 | 3600 | 35 ms | 150 ms | 1538.46 r/s | `Passed` |
| `TC-LOD-258` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 200 | 10800 | 38 ms | 152 ms | 3040.54 r/s | `Passed` |
| `TC-LOD-259` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 300 | 19200 | 45 ms | 151 ms | 4383.56 r/s | `Passed` |
| `TC-LOD-260` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 400 | 12000 | 50 ms | 167 ms | 4000 r/s | `Passed` |
| `TC-LOD-261` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 500 | 14500 | 52 ms | 241 ms | 4820.48 r/s | `Passed` |
| `TC-LOD-262` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 10 | 630 | 110 ms | 772 ms | 74.73 r/s | `Passed` |
| `TC-LOD-263` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 25 | 975 | 30 ms | 137 ms | 365.17 r/s | `Passed` |
| `TC-LOD-264` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 50 | 2700 | 348 ms | 1557 ms | 133.06 r/s | `Passed` |
| `TC-LOD-265` | `POST` | `/api/auth/login` | User authentication API endpoint | 100 | 3400 | 34 ms | 158 ms | 1280.12 r/s | `Passed` |
| `TC-LOD-266` | `POST` | `/api/auth/register` | User signup API endpoint | 150 | 3000 | 139 ms | 755 ms | 700.93 r/s | `Passed` |
| `TC-LOD-267` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 200 | 11200 | 39 ms | 173 ms | 3040.17 r/s | `Passed` |
| `TC-LOD-268` | `GET` | `/api/companies/list` | Company list listing directory API | 300 | 19500 | 43 ms | 192 ms | 4540.16 r/s | `Passed` |
| `TC-LOD-269` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 400 | 13200 | 47 ms | 205 ms | 4326.45 r/s | `Passed` |
| `TC-LOD-270` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 500 | 34000 | 51 ms | 182 ms | 6843.8 r/s | `Passed` |
| `TC-LOD-271` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 10 | 420 | 30 ms | 145 ms | 152.17 r/s | `Passed` |
| `TC-LOD-272` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 25 | 500 | 32 ms | 118 ms | 233.64 r/s | `Passed` |
| `TC-LOD-273` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 50 | 3050 | 115 ms | 672 ms | 358.19 r/s | `Passed` |
| `TC-LOD-274` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 100 | 6100 | 35 ms | 163 ms | 1678.13 r/s | `Passed` |
| `TC-LOD-275` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 150 | 9750 | 406 ms | 1821 ms | 349.59 r/s | `Passed` |
| `TC-LOD-276` | `POST` | `/api/auth/login` | User authentication API endpoint | 200 | 10200 | 38 ms | 168 ms | 2966.84 r/s | `Passed` |
| `TC-LOD-277` | `POST` | `/api/auth/register` | User signup API endpoint | 300 | 15900 | 163 ms | 848 ms | 1568.2 r/s | `Passed` |
| `TC-LOD-278` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 400 | 19600 | 47 ms | 204 ms | 5153.83 r/s | `Passed` |
| `TC-LOD-279` | `GET` | `/api/companies/list` | Company list listing directory API | 500 | 13500 | 51 ms | 189 ms | 4692.39 r/s | `Passed` |
| `TC-LOD-280` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 10 | 440 | 31 ms | 119 ms | 153.63 r/s | `Passed` |
| `TC-LOD-281` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 25 | 1025 | 31 ms | 120 ms | 369.9 r/s | `Passed` |
| `TC-LOD-282` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 50 | 3250 | 31 ms | 138 ms | 924.61 r/s | `Passed` |
| `TC-LOD-283` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 100 | 2700 | 33 ms | 147 ms | 1129.23 r/s | `Passed` |
| `TC-LOD-284` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 150 | 8400 | 131 ms | 840 ms | 950.66 r/s | `Passed` |
| `TC-LOD-285` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 200 | 12000 | 40 ms | 167 ms | 3076.92 r/s | `Passed` |
| `TC-LOD-286` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 300 | 17100 | 466 ms | 2876 ms | 609.36 r/s | `Passed` |
| `TC-LOD-287` | `POST` | `/api/auth/login` | User authentication API endpoint | 400 | 8000 | 46 ms | 187 ms | 3305.79 r/s | `Passed` |
| `TC-LOD-288` | `POST` | `/api/auth/register` | User signup API endpoint | 500 | 27500 | 188 ms | 1254 ms | 2322.64 r/s | `Passed` |
| `TC-LOD-289` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 10 | 490 | 29 ms | 143 ms | 167.75 r/s | `Passed` |
| `TC-LOD-290` | `GET` | `/api/companies/list` | Company list listing directory API | 25 | 1450 | 31 ms | 120 ms | 439.66 r/s | `Passed` |
| `TC-LOD-291` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 50 | 2700 | 33 ms | 107 ms | 822.67 r/s | `Passed` |
| `TC-LOD-292` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 100 | 2800 | 34 ms | 146 ms | 1141.92 r/s | `Passed` |
| `TC-LOD-293` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 150 | 7800 | 37 ms | 142 ms | 2278.04 r/s | `Passed` |
| `TC-LOD-294` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 200 | 9200 | 38 ms | 145 ms | 2832.51 r/s | `Passed` |
| `TC-LOD-295` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 300 | 7800 | 154 ms | 1097 ms | 1417.15 r/s | `Passed` |
| `TC-LOD-296` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 400 | 24400 | 47 ms | 198 ms | 5587.36 r/s | `Passed` |
| `TC-LOD-297` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 500 | 34000 | 586 ms | 2703 ms | 822.29 r/s | `Passed` |
| `TC-LOD-298` | `POST` | `/api/auth/login` | User authentication API endpoint | 10 | 210 | 30 ms | 133 ms | 98.59 r/s | `Passed` |
| `TC-LOD-299` | `POST` | `/api/auth/register` | User signup API endpoint | 25 | 975 | 111 ms | 746 ms | 167.27 r/s | `Passed` |
| `TC-LOD-300` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 50 | 2250 | 31 ms | 144 ms | 777.2 r/s | `Passed` |
| `TC-LOD-301` | `GET` | `/api/companies/list` | Company list listing directory API | 100 | 6500 | 36 ms | 119 ms | 1692.71 r/s | `Passed` |
| `TC-LOD-302` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 150 | 8100 | 37 ms | 122 ms | 2315.61 r/s | `Passed` |
| `TC-LOD-303` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 200 | 6200 | 40 ms | 169 ms | 2262.77 r/s | `Passed` |
| `TC-LOD-304` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 300 | 6600 | 45 ms | 173 ms | 2650.6 r/s | `Passed` |
| `TC-LOD-305` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 400 | 14800 | 48 ms | 219 ms | 4517.7 r/s | `Passed` |
| `TC-LOD-306` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 500 | 11500 | 204 ms | 960 ms | 1857.24 r/s | `Passed` |
| `TC-LOD-307` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 10 | 240 | 30 ms | 129 ms | 108.11 r/s | `Passed` |
| `TC-LOD-308` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 25 | 1375 | 328 ms | 1605 ms | 70.37 r/s | `Passed` |
| `TC-LOD-309` | `POST` | `/api/auth/login` | User authentication API endpoint | 50 | 2500 | 33 ms | 145 ms | 793.65 r/s | `Passed` |
| `TC-LOD-310` | `POST` | `/api/auth/register` | User signup API endpoint | 100 | 2400 | 130 ms | 738 ms | 519.48 r/s | `Passed` |
| `TC-LOD-311` | `GET` | `/api/dashboard/stats` | Student dashboard summary data API | 150 | 4200 | 36 ms | 162 ms | 1674.64 r/s | `Passed` |
| `TC-LOD-312` | `GET` | `/api/companies/list` | Company list listing directory API | 200 | 5200 | 40 ms | 151 ms | 2047.24 r/s | `Passed` |
| `TC-LOD-313` | `GET` | `/api/companies/detail/:id` | Company detail details profile view API | 300 | 12300 | 42 ms | 178 ms | 3817.5 r/s | `Passed` |
| `TC-LOD-314` | `GET` | `/api/planner/tasks` | Preparation task scheduler list API | 400 | 25600 | 51 ms | 195 ms | 5373.64 r/s | `Passed` |
| `TC-LOD-315` | `POST` | `/api/planner/tasks/add` | Add preparation schedule task API | 500 | 10500 | 54 ms | 194 ms | 3986.33 r/s | `Passed` |
| `TC-LOD-316` | `GET` | `/api/quiz/questions` | Quiz test questions retrieval API | 10 | 280 | 30 ms | 139 ms | 119.66 r/s | `Passed` |
| `TC-LOD-317` | `POST` | `/api/quiz/submit` | Submit quiz answers evaluation API | 25 | 1650 | 118 ms | 712 ms | 177.65 r/s | `Passed` |
| `TC-LOD-318` | `GET` | `/api/quiz/results` | Quiz results statistics retrieval API | 50 | 2100 | 32 ms | 139 ms | 738.4 r/s | `Passed` |
| `TC-LOD-319` | `POST` | `/api/resume/check` | AI resume checker upload scan analysis API | 100 | 6900 | 359 ms | 1822 ms | 262.65 r/s | `Passed` |
| `TC-LOD-320` | `POST` | `/api/auth/login` | User authentication API endpoint | 150 | 8850 | 38 ms | 164 ms | 2365.05 r/s | `Passed` |
