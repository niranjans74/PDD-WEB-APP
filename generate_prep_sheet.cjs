const ExcelJS = require('exceljs');
const path = require('path');

async function generateExcel() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('SDE Prep Topics');

  // Define Columns
  worksheet.columns = [
    { header: 'S.No', key: 'sno', width: 8 },
    { header: 'Company Name', key: 'company', width: 22 },
    { header: 'Easy Topics', key: 'easy', width: 45 },
    { header: 'Medium Topics', key: 'medium', width: 50 },
    { header: 'Hard Topics', key: 'hard', width: 50 }
  ];

  // Data to insert
  const data = [
    {
      sno: 1,
      company: 'Apple',
      easy: 'Arrays & Strings, Two Pointers, Linked Lists, Math & Geometry',
      medium: 'Trees & Graphs, Sliding Window, Intervals, Matrix',
      hard: 'Advanced DP, Hard Graphs, Tries'
    },
    {
      sno: 2,
      company: 'Google',
      easy: 'Hash Maps, Binary Search, Bit Manipulation',
      medium: 'Dynamic Programming, Graph Traversal (BFS/DFS), Tries & Strings, Heaps & Priority Queues',
      hard: 'Segment Trees, Binary Lifting, Advanced Math'
    },
    {
      sno: 3,
      company: 'Microsoft',
      easy: 'Linked Lists, Trees (Basic), Strings',
      medium: 'System Design Basics, Binary Search Trees, Backtracking, Greedy Algorithms',
      hard: 'Advanced System Design, Tries, Hard DP'
    },
    {
      sno: 4,
      company: 'IBM',
      easy: 'Loops & Conditions, Basic SQL, Arrays',
      medium: 'Queues & Stacks, Object-Oriented Programming, Database Normalization',
      hard: 'Cloud Architecture Basics, Complex SQL Queries'
    },
    {
      sno: 5,
      company: 'JPMorgan Chase',
      easy: 'Basic Math, String Manipulation, Sorting',
      medium: 'Hash Tables, Financial Algorithms, Data Structures',
      hard: 'Dynamic Programming, Graph Algorithms, Concurrency & Multithreading'
    },
    {
      sno: 6,
      company: 'Amazon',
      easy: 'Arrays & Hashing, Linked Lists, Binary Search',
      medium: 'Trees & Graphs, Dynamic Programming, Sliding Window, Two Pointers',
      hard: 'Advanced Graphs, LRU Cache, Hard DP'
    },
    {
      sno: 7,
      company: 'Meta (Facebook)',
      easy: 'Array Manipulation, Binary Tree Path, Valid Palindrome',
      medium: 'Subarray Sum, Binary Tree Right Side View, Simplify Path, K Closest Points',
      hard: 'Binary Tree Maximum Path Sum, Serialize & Deserialize Binary Tree, Minimum Window Substring'
    },
    {
      sno: 8,
      company: 'TCS',
      easy: 'Numerical Ability, Logical Reasoning, Basic Coding (Arrays/Strings)',
      medium: 'Data Structures (Stacks/Queues), DBMS & SQL Queries, Operating Systems Basics',
      hard: 'Advanced Coding (Graphs/DP), System Design Fundamentals'
    },
    {
      sno: 9,
      company: 'Infosys',
      easy: 'Mathematical Ability, Verbal Ability, Pseudocode Solving',
      medium: 'Data Structures (Trees/Linked Lists), OOP Concepts, DBMS Normalization',
      hard: 'Competitive Programming, SQL Query Optimization'
    },
    {
      sno: 10,
      company: 'Wipro',
      easy: 'Aptitude & Verbal, Basic Programming',
      medium: 'Searching & Sorting, Object-Oriented Programming, Database Fundamentals',
      hard: 'Intermediate Data Structures, Computer Networks'
    },
    {
      sno: 11,
      company: 'Cognizant',
      easy: 'Quantitative Aptitude, Automata Debugging',
      medium: 'Data Structures Fundamentals, SQL Queries, Behavioral Preparation',
      hard: 'Coding & Algorithm Design, Web Development Basics'
    },
    {
      sno: 12,
      company: 'Accenture',
      easy: 'Cognitive Ability, English Ability',
      medium: 'Pseudocode & Common Applications, Network Security Basics, Coding Assessment',
      hard: 'Advanced Algorithms, Cloud Computing Concepts'
    },
    {
      sno: 13,
      company: 'Goldman Sachs',
      easy: 'Numerical Aptitude, Probability & Statistics',
      medium: 'DSA (Stack, Queue, Map), OOPs & C++/Java Concepts, Operating Systems',
      hard: 'Advanced Dynamic Programming, System Scalability'
    },
    {
      sno: 14,
      company: 'Morgan Stanley',
      easy: 'Mathematical Aptitude, Basic CS Concepts',
      medium: 'Algorithms (Trees/Sorting), Java Multithreading, Database Management',
      hard: 'System Design Basics, Advanced Algorithmic Design'
    },
    {
      sno: 15,
      company: 'Bloomberg',
      easy: 'Basic DSA (Arrays/Lists), Financial Concepts Basics',
      medium: 'Hash Maps & Heap, Low-Level Design Patterns, Process Scheduling',
      hard: 'Distributed Caching, Memory-Efficient Algorithms'
    }
  ];

  worksheet.addRows(data);

  // Apply rich styling
  // 1. Header Styling
  const headerRow = worksheet.getRow(1);
  headerRow.font = { name: 'Segoe UI', size: 11, bold: true, color: { argb: 'FFFFFFFF' } };
  headerRow.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF1F4E78' } // Dark steel blue
  };
  headerRow.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
  headerRow.height = 30;

  // 2. Data Row Styling & Borders
  worksheet.eachRow({ includeHeader: false }, function (row, rowNumber) {
    row.font = { name: 'Segoe UI', size: 10 };
    row.alignment = { vertical: 'top', horizontal: 'left', wrapText: true };

    // Zebra striping for readability
    if (rowNumber % 2 === 0) {
      row.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFF2F6F9' } // Very light slate gray
      };
    } else {
      row.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFFFF' }
      };
    }

    // Border styling
    row.eachCell({ includeEmpty: true }, function (cell) {
      cell.border = {
        top: { style: 'thin', color: { argb: 'FFD9D9D9' } },
        left: { style: 'thin', color: { argb: 'FFD9D9D9' } },
        bottom: { style: 'thin', color: { argb: 'FFD9D9D9' } },
        right: { style: 'thin', color: { argb: 'FFD9D9D9' } }
      };

      // Right align S.No column
      if (cell.col === 1) {
        cell.alignment = { vertical: 'top', horizontal: 'center' };
      }

      // Make company names bold and distinct
      if (cell.col === 2) {
        cell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: 'FF1F4E78' } };
      }
    });

    // Auto-adjust row height based on content wrapping
    let maxLines = 1;
    row.eachCell(function (cell) {
      if (typeof cell.value === 'string') {
        const lines = cell.value.split('\n').length;
        const colWidth = worksheet.getColumn(cell.col).width || 10;
        const approxLines = Math.ceil(cell.value.length / colWidth);
        const cellLines = Math.max(lines, approxLines);
        if (cellLines > maxLines) {
          maxLines = cellLines;
        }
      }
    });
    row.height = Math.max(26, maxLines * 15 + 10);
  });

  // Enable gridlines explicitly
  worksheet.views = [{ showGridLines: true }];

  // Save the workbook
  const outputPath = path.join(__dirname, 'SDE_Company_Prep_Topics.xlsx');
  await workbook.xlsx.writeFile(outputPath);
  console.log(`Successfully updated prep sheet at: ${outputPath}`);
}

generateExcel().catch(err => {
  console.error('Error generating excel sheet:', err);
  process.exit(1);
});
