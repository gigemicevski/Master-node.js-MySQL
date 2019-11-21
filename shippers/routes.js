var express = require('express');
const actions = require('./actions');

var routes = express.Router();


routes.get('/shippers', actions.getShippers);

module.exports = routes;