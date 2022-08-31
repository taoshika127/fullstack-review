const express = require('express');
let app = express();
const { postHandler, getHandler }= require('./requestHandler.js');

app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json());

app.post('/repos', (req, res) => {
  console.log('getting request from client');
  postHandler(req, res)
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', getHandler
  // TODO - your code here!
  // This route should send back the top 25 repos
);

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

