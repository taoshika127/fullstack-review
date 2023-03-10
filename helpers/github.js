const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (term, cb) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    method: 'get',
    url: `https://api.github.com/users/${term}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  axios(options).then((response) => {
    var arr = response.data;
    cb(arr);
  });
}

module.exports.getReposByUsername = getReposByUsername;