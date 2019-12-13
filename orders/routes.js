var express = require('express');
const actions = require('./actions');

var routes = express.Router();


routes.get('/orders', actions.getOrders);
routes.get('/orders/status/:Status',actions.getYourOrderStatus);
routes.get('/info',actions.getOrdersInfo);
routes.delete('/orders',actions.deleteOrder);
routes.get('/group',actions.getGroupOrders);
routes.post('/orders',actions.createOrder);
routes.get('/orders/:Order_id',actions.getSpecificOrder);
routes.get('/total/:Customer_id',actions.getTotalOrder);
routes.get('/info/:Order_id',actions.getSpecificOrdersInfo);


module.exports = routes;