var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var index = require('./routers/index');
var messages = require('./routers/messages');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeINTRO');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// parse application/json , define this BEFORE adding routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/messages', messages);


app.listen(3000, function () {
  console.log('On port 3000');
});