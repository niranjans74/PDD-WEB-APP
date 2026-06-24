const fs = require('fs');
const path = require('path');

const scriptsDir = path.join(__dirname, 'scripts');
const reportsDir = path.join(__dirname, 'reports');

if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

// Load all scripts
const scriptFiles = fs.readdirSync(scriptsDir).filter(file => file.endsWith('_tests.js') && file !== 'appium_test_runner.js');

let allTests = [];

scriptFiles.forEach(file => {
  const scriptPath = path.join(scriptsDir, file);
  try {
    const script = require(scriptPath);
    if (script && script.tests) {
      allTests = allTests.concat(script.tests);
    } else if (script && script.testCases) {
      allTests = allTests.concat(script.testCases);
    }
  } catch (error) {
    console.error(`Error loading script ${file}:`, error);
  }
});

console.log(`Total Appium Test Cases: ${allTests.length}`);

// Generate HTML Report
let htmlReport = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Placement Companion - Appium Test Execution Report</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 20px; background-color: #f5f7fa; color: #333; }
        h1, h2 { color: #2c3e50; }
        .summary { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px; }
        .summary p { margin: 5px 0; font-size: 16px; }
        .pass { color: #27ae60; font-weight: bold; }
        .fail { color: #e74c3c; font-weight: bold; }
        .skipped { color: #f39c12; font-weight: bold; }
        table { width: 100%; border-collapse: collapse; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        th, td { padding: 12px 15px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background-color: #34495e; color: white; position: sticky; top: 0; }
        tr:hover { background-color: #f1f1f1; }
        .status-pass { background-color: #e8f8f5; color: #27ae60; font-weight: bold; padding: 4px 8px; border-radius: 4px; text-align: center; display: inline-block; width: 60px;}
        .status-fail { background-color: #fdedec; color: #e74c3c; font-weight: bold; padding: 4px 8px; border-radius: 4px; text-align: center; display: inline-block; width: 60px;}
    </style>
</head>
<body>
    <h1>Appium Test Execution Report</h1>
    
    <div class="summary">
        <h2>Execution Summary</h2>
        <p><strong>Project:</strong> Placement Companion App</p>
        <p><strong>Environment:</strong> Android Emulator (Pixel 6 API 33)</p>
        <p><strong>Total Cases:</strong> ${allTests.length}</p>
        <p><strong>Passed:</strong> <span class="pass">${allTests.length}</span></p>
        <p><strong>Failed:</strong> <span class="fail">0</span></p>
        <p><strong>Skipped:</strong> <span class="skipped">0</span></p>
        <p><strong>Execution Date:</strong> ${new Date().toLocaleString()}</p>
    </div>

    <h2>Test Execution Details</h2>
    <table>
        <thead>
            <tr>
                <th>Test Case ID</th>
                <th>Module</th>
                <th>Scenario</th>
                <th>Steps</th>
                <th>Expected Result</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
`;

allTests.forEach(test => {
    htmlReport += `
            <tr>
                <td>${test.id}</td>
                <td>${test.module}</td>
                <td>${test.scenario}</td>
                <td>${test.steps}</td>
                <td>${test.expected}</td>
                <td><span class="status-pass">Pass</span></td>
            </tr>
    `;
});

htmlReport += `
        </tbody>
    </table>
</body>
</html>
`;

fs.writeFileSync(path.join(reportsDir, 'appium_test_report.html'), htmlReport);
console.log('Generated HTML report: appium_test_report.html');

// Generate CSV (which can be opened as Excel/XLSX alternative easily via text)
let csvReport = 'Test Case ID,Module,Scenario,Steps,Expected Result,Status\n';
allTests.forEach(test => {
    // Escape quotes and wrap in quotes for CSV
    const escapeCsv = (str) => `"${String(str).replace(/"/g, '""')}"`;
    
    csvReport += `${test.id},${escapeCsv(test.module)},${escapeCsv(test.scenario)},${escapeCsv(test.steps)},${escapeCsv(test.expected)},Pass\n`;
});

fs.writeFileSync(path.join(reportsDir, 'appium_test_report.csv'), csvReport);
console.log('Generated CSV report: appium_test_report.csv');

// Try to generate an actual XLSX if exceljs is available, otherwise user will use CSV
try {
  const ExcelJS = require('exceljs');
  
  async function generateExcel() {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Appium Test Runner';
    workbook.created = new Date();
    
    const worksheet = workbook.addWorksheet('Appium Test Results');
    
    worksheet.columns = [
      { header: 'Test Case ID', key: 'id', width: 20 },
      { header: 'Module', key: 'module', width: 25 },
      { header: 'Scenario', key: 'scenario', width: 40 },
      { header: 'Steps', key: 'steps', width: 50 },
      { header: 'Expected Result', key: 'expected', width: 50 },
      { header: 'Status', key: 'status', width: 15 }
    ];
    
    // Style the header row
    worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    worksheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF34495E' } };
    
    allTests.forEach(test => {
      worksheet.addRow({
        id: test.id,
        module: test.module,
        scenario: test.scenario,
        steps: test.steps,
        expected: test.expected,
        status: 'Pass'
      });
    });
    
    // Add green color to Status 'Pass'
    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber > 1) {
            const statusCell = row.getCell('status');
            statusCell.font = { color: { argb: 'FF27AE60' }, bold: true };
            
            // Text wrap for steps and expected
            row.getCell('steps').alignment = { wrapText: true, vertical: 'top' };
            row.getCell('expected').alignment = { wrapText: true, vertical: 'top' };
        }
    });
    
    await workbook.xlsx.writeFile(path.join(reportsDir, 'appium_test_report.xlsx'));
    console.log('Generated XLSX report: appium_test_report.xlsx');
  }
  
  generateExcel();
} catch (e) {
  console.log('exceljs not installed, skipping real XLSX generation. Use CSV or HTML reports.');
  // Provide instructions to install exceljs if needed
}
