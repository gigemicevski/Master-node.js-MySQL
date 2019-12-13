var express = require('express');
var actions = require('./actions');
var auth = require('../middlewares/auth');

var routes = express.Router();


routes.get('/users',actions.getAllUsers);
routes.post('/login',auth,actions.loginUser);
routes.post('/users',actions.createUser);
routes.delete('/users',actions.deleteUser);



module.exports = routes;