var express = require('express');
var customerRouter = require('./customers/routes');
var productRouter = require('./products/routes');
var orderStatusRouter = require('./order_status/routes');
var orderRouter = require('./orders/routes');
var shippersRouter = require('./shippers/routes');
var usersRouter = require('./users/routes');
var orderedItemsRouter = require('./order_items/routes');

const appRouter = express.Router();


appRouter.use(customerRouter);
appRouter.use(productRouter);
appRouter.use(orderStatusRouter);
appRouter.use(orderRouter);
appRouter.use(shippersRouter);
appRouter.use(usersRouter);
appRouter.use(orderedItemsRouter);

module.exports = appRouter;