const con = require('../database');
const { orderCommentValidator } = require('../helper');
const {getOrder} =require('../database/queries');




getOrdersQuery = () => {
    const query = "SELECT * FROM orders";
    return new Promise((resolve, reject) => {
        con.query(query, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
          });
    });
};

getOrders = async(req, res) => {
    try {
        const order = await getOrdersQuery();
        res.status(200).send(order);  
    } catch (error) {
        res.status(500).send(error);
    }
};

getSpecificOrderQuery = (orderid) => {
    const query = "SELECT * FROM orders WHERE Order_id = ?";
    return new Promise((resolve,reject) => {
        con.query(query,[orderid],(error,results,fields) => {
            if(error){
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

getSpecificOrder = async(req,res,next) => {
    const orderid = req.params.Order_id;
  
    
    if(orderid <= 0) {
        var error = new Error('Orderid can not be less then 1!');
        error.status = 401;
        return next(error);
    }
    
        try {
            const order = await getSpecificOrderQuery(orderid);
            res.status(200).send(order[0]);  
        } catch (error) {
            res.status(500).send(error.message);
        }
    
}

getYourOrderStatusQuery = (orderStatus) => {
    const query = "SELECT * FROM orders WHERE Status = ?";
    return new Promise((resolve,reject) => {
        con.query(query,[orderStatus],(error,results,fields) => {
            if(error){
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

getYourOrderStatus = async(req,res,next) => {
    const orderStatus = req.params.Status;

    try {
        const statusOrder = await getYourOrderStatusQuery(orderStatus);
        res.status(200).send(statusOrder);  
    } catch (error) {
        res.status(500).send(error.message);
    }
}

getOrdersInfoQuery = () => {
    const query = "select o.Order_id,o.Order_date,c.First_name AS Customer,sh.Name AS Shipper,os.Name AS Status from orders o join customers c on o.Customer_id = c.Customer_id left join shippers sh on o.Shipper_id = sh.Shipper_id join order_statuses os on o.Status = os.Order_status_id order by Order_id;";
    return new Promise((resolve, reject) => {
        con.query(query, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
          });
    });
};

getOrdersInfo = async(req, res) => {
    try {
        const orderInfo = await getOrdersInfoQuery();
        res.status(200).send(orderInfo);  
    } catch (error) {
        res.status(500).send(error);
    }
};

getSpecificOrdersInfoQuery = (OrderId) => {
    const query = "select o.Order_id,o.Order_date,c.First_name AS Customer,sh.Name AS Shipper,os.Name AS Status from orders o join customers c on o.Customer_id = c.Customer_id left join shippers sh on o.Shipper_id = sh.Shipper_id join order_statuses os on o.Status = os.Order_status_id where o.Order_id = ?";
    return new Promise((resolve, reject) => {
        con.query(query,[OrderId] ,(error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
          });
    });
};

getSpecificOrdersInfo = async(req, res) => {
    const OrderId = req.params.Order_id;
    try {
        const orderInfo = await getSpecificOrdersInfoQuery(OrderId);
        res.status(200).send(orderInfo);  
    } catch (error) {
        res.status(500).send(error);
    }
};

getGroupOrdersQuery = () => {
    const query = "SELECT COUNT(Order_id), Status FROM orders GROUP BY Status";
    return new Promise ((resolve,reject) => {
        con.query(query,(error,results,fields) => {
            if(error){
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

getGroupOrders = async(req, res) => {
    try {
        const orderGroup = await getGroupOrdersQuery();
        res.status(200).send(orderGroup);  
    } catch (error) {
        res.status(500).send(error);
    }
};

createOrderQuery = (order) => {
    const query = 'INSERT INTO orders (Customer_id,Order_date,Status,Comments) VALUES (?,Now(),?,?)';
    return new Promise((resolve, reject) => {
        con.query(query,[order.Customer_id,order.Status,order.Comments], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
            });
    });
};

createOrder = async(req, res, next) => {
    const newOrder = req.body;
    const newOrderStatus = req.body.Status;
    const newOrderComments = orderCommentValidator(req.body.Comments);

    if(newOrderStatus >= 3) {
        var error = new Error("status can't be greater then 2!");
        error.status = 401;
        return next(error);
    };
    if(newOrderStatus <= 0) {
        var error = new Error("status can't be 0!");
        error.status = 401;
        return next(error);
    };
    if(!newOrderComments) {
        var error = new Error("Comments can not be less then 5 characters!");
        error.status = 402;
        return next(error);
    };
    try {
        await createOrderQuery(newOrder);
        res.status(201).send("New order has been created");  
    } catch (error) {
        res.status(500).send(error.message);
    }
};


deleteOrderQuery = (orderId) => {
    const query = "DELETE FROM orders WHERE Order_id = ?";
    return new Promise((resolve,reject) => {
        con.query(query,[orderId],(error,results,fields) => {
            if(error){
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

deleteOrder = async(req,res) => {
    const orderId = req.params.Order_id;

    try {
        await deleteOrderQuery(orderId);
        res.status(200).send(`Order with id ${orderId} has been DELETED`);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


getTotalOrderQuery = (customerId) => {
    return new Promise((resolve, reject) => {
        con.query(getOrder,[customerId] ,(error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
          });
    });
};

getTotalOrder = async(req, res) => {
    customerId = req.params.Customer_id;
  
    try {
        const total = await getTotalOrderQuery(customerId);
        res.status(200).send(total);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
   getOrders,
   getYourOrderStatus,
   getOrdersInfo,
   deleteOrder,
   getGroupOrders,
   createOrder,
   getSpecificOrder,
   getTotalOrder,
   getSpecificOrdersInfo
}