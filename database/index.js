const Promise = require('bluebird');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(`${process.env.MONGODB_PATH}`);
// const MongoClient = require('mongodb').MongoClient;
// MongoClient.connect({useNewUrlParser: true});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  owner: String,
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
    var owner = repo.owner.login;
    var description = repo.description;
    var html_url = repo.html_url;
    var watchers_count = repo.watchers_count;
    // promises.push(Repo.find({html_url}).then((response) => {
    //   if (response.length === 0) {
    //     Repo.create({name, owner, description, html_url, watchers_count})
    //   }
    // }));
    promises.push(Repo.findOneAndUpdate({html_url}, {name, owner, description, html_url, watchers_count}, {upsert: true}));
  })
  Promise.all(promises).then(() => {
    console.log('saved all repos to mongodb');
    cb();
  })
};

let readTop25 = (cb) => {
  Repo.find().limit(25).sort({watchers_count: -1}).then((data) => {
    cb(data);
  })
}

module.exports = { save, readTop25 };