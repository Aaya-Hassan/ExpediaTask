var dataController = require('./data/dataController.js');
var data = require('./data/data.json')

module.exports = function (app, express) {
 app.get('/', function(req, res){
 	res.send('backend')
 })
 app.get('/api/getAll',dataController.getAll);
};

