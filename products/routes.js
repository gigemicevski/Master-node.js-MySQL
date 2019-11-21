var express = require('express');
var actions = require('./actions');

var routes = express.Router();

routes.get('/products', actions.getAllProducts);





module.exports = routes;
