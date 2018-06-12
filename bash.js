const pwd = require('./pwd.js');
const ls = require('./ls.js');

// output a prompt
process.stdout.write('prompt > ');

// fires on line input
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  switch (cmd) {
    case 'pwd': pwd();
    break;
    case 'ls': ls();
    break;
    default: console.log('bad command');
  }
});
