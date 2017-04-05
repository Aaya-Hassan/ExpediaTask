var Data = require('./data.json')
var newObj={};

module.exports = {
	getAll:function(req,res){
     for(var key in Data){ 
     	if(newObj[key]===undefined){
     		newObj[key]=Data[key];
        }    
      }
     res.json(newObj);
    }
}