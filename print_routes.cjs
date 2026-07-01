const fs = require('fs');
const code = fs.readFileSync('server.cjs', 'utf-8');
const regex = /app\.(get|post|put|patch|delete)\(['"]([^'"]+)['"]/g;
let match;
while ((match = regex.exec(code)) !== null) {
    if (match[2].includes('admin')) {
        console.log(match[1].toUpperCase() + ' ' + match[2]);
    }
}
