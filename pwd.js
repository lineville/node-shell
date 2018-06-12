module.exports = function () {
  process.stdout.write(process.cwd());
  // process.stdout.write(__dirname); also works
  process.stdout.write('\nprompt > ');
}

