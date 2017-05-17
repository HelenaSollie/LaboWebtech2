var Message = require('../models/message');

function create (req, res){

	// save a new instance of this model
	var newMessage = new Message({
		username: req.body.username,
		message: req.body.message
	});
	
	newMessage.save(function (err, message) {
	  if (err) return console.error(err);
	  res.send(message);
	});
}
module.exports.create = create;

function getAll (req, res) {
	Message.find( function(err, messages){
		if (err) return console.error(err);
		res.send(messages);
	});
}

module.exports.getAll = getAll;

function getMessageById (req,res){
        Message.findOne({_id: req.params.id}, function(err, message) {
            if (err)
                res.send(err);
            res.json(message);
        });
  
}

module.exports.getMessageById = getMessageById;

function getMessageByUser(req, res){
	Message.find({username:req.params.username}, function(err, message) {
            if (err)
                res.send(err);
            res.json(message);
        });
}

module.exports.getMessageByUser = getMessageByUser;