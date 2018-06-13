const request = require('request');

module.exports = (url, done) => {
  request(url, (err, response, body) => {
    if (err) {
      throw err;
    } else {
      done(body)
    }
  })
}
