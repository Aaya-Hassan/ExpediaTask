var dataController = require('./data/dataController.js');
var data = require('./data/data.json')
var path = require('path')

module.exports = function (app, express) {
 app.get('/', function(req, res){
 	res.sendFile(path.join(__dirname, 'index.html'))
 })
 app.get('/api/getAll',dataController.getAll);
};

