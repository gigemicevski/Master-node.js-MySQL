var express = require('express');
const actions = require('./actions');

var routes = express.Router();


routes.get('/orders', actions.getOrders);
routes.get('/orders/:Status',actions.getYourOrderStatus);
routes.get('/info',actions.getOrdersInfo);

module.exports = routes;