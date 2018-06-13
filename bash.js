const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');

// output a prompt
const done = (output) => {
  console.log(output);
  process.stdout.write('Node ~> ');
}

// fires on line input

process.stdin.on('data', (data) => {
  const cmd = data.toString()
    .trim()
    .split(' ')[0];

  const firstArg = data.toString()
    .trim()
    .split(' ')[1];
  switch (cmd) {
    case 'pwd': pwd(done);
    break;
    case 'ls': ls(done);
    break;
    case 'cat': cat(firstArg, done);
    break;
    case 'curl': curl(firstArg, done);
    break;
    default: console.log('bad command');
  }
});

done('You have entered the Node Shell')
