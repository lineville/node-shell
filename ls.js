const fs = require('fs');
module.exports = function (done) {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      done(files.join('\n'))
    }
  })
};
