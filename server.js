var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  
require('./server/routes.js')(app, express);
app.use(express.static(__dirname + '/app/client'));

// app.use('/', function(req, res){
//  	res.send(express.static('/app/client'))
//  })


app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
});