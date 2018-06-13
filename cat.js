const fs = require('fs');
module.exports = (fileName, done) => {
  // take the filename and output to the console the contents
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      throw err
    } else {
      done(data)
    }
  })

}
