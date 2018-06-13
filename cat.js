const fs = require('fs');
module.exports = (fileName) => {
  // take the filename and output to the console the contents
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      throw err
    } else {
      process.stdout.write(data)
      process.stdout.write('\nprompt > ');
    }
  })

}
