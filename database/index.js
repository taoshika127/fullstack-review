const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  description: String,
  html_url: String,
  watchers_count: Number

});

let Repo = mongoose.model('Repo', repoSchema);
//Repo is a mongoose model, similar to a Mongo collection or sql table

let save = (reposArr, cb) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var promises = [];
  reposArr.forEach(repo => {
    var name = repo.name;
    var description = repo.description;
    var html_url = repo.html_url;
    var watchers_count = repo.watchers_count;
    promises.push(Repo.create({name, description, html_url, watchers_count}));
  })
  Promise.all(promises).then(() => {
    console.log('successfully saved to db!');
    cb();
  })
}


module.exports.save = save;