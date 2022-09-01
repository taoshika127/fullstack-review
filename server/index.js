const express = require('express');
const cool = require('cool-ascii-faces');
let app = express();

const { postHandler, getHandler }= require('./requestHandler.js');

app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json());

app.post('/repos', postHandler
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
);

app.get('/repos', getHandler
  // TODO - your code here!
  // This route should send back the top 25 repos
);

app.get('/cool', (req, res) => res.send(cool()));

let port = process.env.PORT;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

