var express = require('express');
const actions = require('./actions');

var routes = express.Router();


routes.get('/order_status', actions.getOrderStatus);

module.exports = routes;
