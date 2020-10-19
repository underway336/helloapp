const apiGreetings = require('./greetings');
module.exports = function(app) {
 apiGreetings(app);
 // other routes
};

const express = require('express');
const MongoClient    = require('mongodb').MongoClient;
const app = express();
// parse application/json
app.use(require('body-parser').json());
// register endpoint
require('./index')(app, database);
MongoClient.connect('mongodb://localhost:27017/test', (err, database) => {
 if (err) return console.log(err)
 app.listen(3333, () => {
   console.log('server started!');
 });
}) 



 



    


