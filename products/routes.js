var express = require('express');
var actions = require('./actions');

var routes = express.Router();

routes.get('/products', actions.getAllProducts);
routes.delete('/products/:Product_id',actions.deleteProduct);
routes.post('/products',actions.createProduct);




module.exports = routes;
