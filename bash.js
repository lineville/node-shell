const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');

// output a prompt
process.stdout.write('prompt > ');

// fires on line input
process.stdin.on('data', (data) => {
  const cmd = data.toString()
    .trim()
    .split(' ')[0];

  const fileName = data.toString()
    .trim()
    .split(' ')[1];
  switch (cmd) {
    case 'pwd': pwd();
    break;
    case 'ls': ls();
    break;
    case 'cat': cat(fileName);
    break;
    default: console.log('bad command');
  }
});
