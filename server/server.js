var express = require('express');
var app = express();

require('./routes.js')(app, express);

app.use(express.static(__dirname + '/.././client'));

app.set('port', (process.env.PORT || 6965));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});