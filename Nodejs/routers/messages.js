// access the router object, so that we can add routes to it
var express = require('express');
var router = express.Router()
var controller = require('../controllers/message')
var Message = require('../models/message');
var mongoose = require('mongoose');

router.get('/', function(req, res, next){
	res.render('message');
});
router.post('/output', controller.getAll);
router.post('/', controller.create);
router.get('/output', controller.getAll);
router.get('/:id', controller.getMessageById);
router.get('/user/:user', controller.getMessageByUser);

module.exports = router;