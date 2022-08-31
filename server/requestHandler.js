const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const { save, readTop25 } = require('../database/index.js');


module.exports = {
  postHandler: ((req, res) => {
    var term = req.body.username;
    getReposByUsername(term, (data) => {
      save(data, () => {
        res.status(201).send(term);
      })
    })
  }),

  getHandler: ((req, res) => {
    readTop25((data) => {
      res.status(200).send(data);
    })
  })
};