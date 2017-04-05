var dataController = require('./data/dataController.js');
var data = require('./data/data.json')

module.exports = function (app, express) {
 
 app.get('/api/getAll',dataController.getAll);
};

