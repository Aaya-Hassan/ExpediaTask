var express = require('express');
var path = require('path')
var app = express();

require('./server/routes.js')(app, express);

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res){
 	res.sendFile(path.resolve(__dirname, '/client','index.html'))
 })

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
});