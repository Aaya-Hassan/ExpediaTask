var dataController = require('./data/dataController.js');


module.exports = function (app, express) {
 app.get('/api/getAll',dataController.getAll);
};

