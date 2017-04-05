var express = require('express');
var path = require('path')
var app = express();

require('./server/routes.js')(app, express);

app.use(express.static(__dirname + '/client'));

app.use('/', function(req, res){
 	res.send(express.static(__dirname + '/client'))
 })

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
});