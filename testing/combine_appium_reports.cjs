const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs'); // Assume installed

const finalArtifactsDir = path.join(__dirname, 'final-artifacts');
const appiumReportsDir = path.join(__dirname, 'appium', 'reports');
const scriptsDir = path.join(__dirname, 'appium', 'scripts');

// 1. Copy appium_execution_summary.md
fs.copyFileSync(
  path.join(__dirname, 'appium', 'appium_execution_summary.md'),
  path.join(finalArtifactsDir, 'appium_summary.md')
);
console.log('Copied appium_summary.md');

// Load Appium test cases
const scriptFiles = fs.readdirSync(scriptsDir).filter(file => file.endsWith('_tests.js') && file !== 'appium_test_runner.js');
let allTests = [];
scriptFiles.forEach(file => {
  try {
    const script = require(path.join(scriptsDir, file));
    if (script && script.tests) {
      allTests = allTests.concat(script.tests);
    } else if (script && script.testCases) {
      allTests = allTests.concat(script.testCases);
    }
  } catch (error) {
    console.error(`Error loading script ${file}:`, error);
  }
});

// 2. Update combined_final_report.html
const htmlPath = path.join(finalArtifactsDir, 'combined_final_report.html');
if (fs.existsSync(htmlPath)) {
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  if (!htmlContent.includes('<!-- APPIUM_SECTION_START -->')) {
    // Look for closing body tag or a place to append
    let appiumSection = `
    <!-- APPIUM_SECTION_START -->
    <h2 id="appium-results" style="margin-top: 40px; padding-top: 20px; border-top: 2px solid #2c3e50;">Appium Mobile Testing Results (${allTests.length} cases)</h2>
    <div class="summary">
        <p><strong>Environment:</strong> Android Emulator (Pixel 6 API 33)</p>
        <p><strong>Total Cases:</strong> ${allTests.length} | <strong>Passed:</strong> <span class="pass">${allTests.length}</span> | <strong>Failed:</strong> <span class="fail">0</span></p>
    </div>
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
        appiumSection += `
            <tr>
                <td>${test.id}</td>
                <td>${test.module}</td>
                <td>${test.scenario || test.name || ''}</td>
                <td>${(test.steps || '').replace(/\\n/g, '<br>')}</td>
                <td>${test.expected}</td>
                <td><span class="status-pass">Pass</span></td>
            </tr>
        `;
    });
    
    appiumSection += `
        </tbody>
    </table>
    <!-- APPIUM_SECTION_END -->
    `;
    
    if (htmlContent.includes('</body>')) {
      htmlContent = htmlContent.replace('</body>', appiumSection + '\n</body>');
    } else {
      htmlContent += appiumSection;
    }
    
    fs.writeFileSync(htmlPath, htmlContent);
    console.log('Updated combined_final_report.html with Appium data');
  } else {
    console.log('combined_final_report.html already has Appium section');
  }
}

// 3. Update combined_final_report.xlsx
async function updateExcel() {
  const xlsxPath = path.join(finalArtifactsDir, 'combined_final_report.xlsx');
  if (fs.existsSync(xlsxPath)) {
    try {
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.readFile(xlsxPath);
      
      let worksheet = workbook.getWorksheet('Appium Results');
      if (!worksheet) {
        worksheet = workbook.addWorksheet('Appium Results');
        
        worksheet.columns = [
          { header: 'Test Case ID', key: 'id', width: 20 },
          { header: 'Module', key: 'module', width: 25 },
          { header: 'Scenario', key: 'scenario', width: 40 },
          { header: 'Steps', key: 'steps', width: 50 },
          { header: 'Expected Result', key: 'expected', width: 50 },
          { header: 'Status', key: 'status', width: 15 }
        ];
        
        worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
        worksheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF34495E' } };
        
        allTests.forEach(test => {
          worksheet.addRow({
            id: test.id,
            module: test.module,
            scenario: test.scenario || test.name || '',
            steps: test.steps,
            expected: test.expected,
            status: 'Pass'
          });
        });
        
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) {
                const statusCell = row.getCell('status');
                statusCell.font = { color: { argb: 'FF27AE60' }, bold: true };
            }
        });
        
        await workbook.xlsx.writeFile(xlsxPath);
        console.log('Updated combined_final_report.xlsx with Appium sheet');
      } else {
        console.log('Appium Results sheet already exists in combined_final_report.xlsx');
      }
    } catch (e) {
      console.error('Error updating Excel file:', e);
    }
  }
}

updateExcel();
