

const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logsDir)) {
  console.log('Removing log files...');
  fs.readdirSync(logsDir).forEach(file => {
    console.log(`delete files...${file}`);
    fs.unlinkSync(path.join(logsDir, file));
  });
  fs.rmdirSync(logsDir);
  console.log('Logs directory removed');
} else {
  console.log('Logs directory does not exist');
}


