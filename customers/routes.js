var express = require('express');
const actions = require('./actions');

var routes = express.Router();


routes.get('/customers', actions.getAllCustomers);
routes.get('/customers/orders', actions.getCustomersWhoMakesOrder);
routes.get('/customers/:Customer_id', actions.getSpecificCustomer);
routes.post('/customers',actions.createCustomer);
routes.put('/customers/:Customer_id',actions.updateCustomer);
routes.delete('/customers/:Customer_id',actions.deleteCustomer);
routes.get('/customers/:Customer_id/orders', actions.getCustomerOrdersInfo);







module.exports = routes;
