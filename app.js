const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const mustache = require('mustache-express');
const dataFile = require('./data.js');

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static(__dirname+'/public'));

app.get('/index', function(req, res){
    res.render('index', dataFile);
});

app.get('/index/:id', function(req, res){
  res.render('robot', dataFile.users[req.params.id-1]);
})

app.listen(port, function() {
  console.log('Example listening on port 3000')
})
