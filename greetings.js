module.exports = function(app) {
 app.get('/greetings', (req, res) => {
   res.send('Response')
 });
};

module.exports = function(app, database) {	
 app.post('/greetings', (req, res) => {
   const greeting = {
     author: req.body.author,
     title: req.body.title,
     text: req.body.text
   };
   database.collection('greetings').insert(greeting, (err, result) => {
     if (err) {
       res.send(err);
     } else {
       res.send(result.ops[0]);
     }
   });
 })
};                                    