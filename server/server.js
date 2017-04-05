var express = require('express');
var app = express();

require('./routes.js')(app, express);

app.use(express.static(__dirname + '/.././client'));

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
});