var express = require('express');
var actions = require('./actions');

var routes = express.Router();


routes.get('/users',actions.getAllUsers);
routes.post('/login',actions.loginUser);
routes.post('/users',actions.createUser);



module.exports = routes;