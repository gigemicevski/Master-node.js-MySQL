var express = require('express');
var actions = require('./actions');

var routes = express.Router();


routes.get('/items',actions.getAllOrderedItems);


module.exports = routes;