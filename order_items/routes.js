var express = require('express');
var actions = require('./actions');

var routes = express.Router();


routes.get('/items',actions.getAllOrderedItems);
routes.get('/items/:Order_id',actions.getSpecificOrder);
routes.post('/items',actions.createOrderItem);
routes.put('/items/:Order_id',actions.updateOrderItem);
routes.delete('/items/:Order_id',actions.deleteOrderItem);





module.exports = routes;