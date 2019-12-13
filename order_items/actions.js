const con = require('../database');
const {Order_items} = require('../models');
const {getSpecificItem} =require('../database/queries');


getAllOrderedItemsQuery = () => {
    const query = "SELECT * FROM order_items;";
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

getAllOrderedItems = async(req, res) => {
    try {
        const items = await getAllOrderedItemsQuery();
        res.status(200).send(items);  
    } catch (error) {
        res.status(500).send(error);
    }
};

getSpecificOrderQuery = (orderId) => {
    return new Promise((resolve,reject) => {
        con.query(getSpecificItem,[orderId],(error,results,fields) => {
            if(error){
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

getSpecificOrder = async(req,res,next) => {
    const orderId = req.params.Order_id;
    
    try {

        const order = await getSpecificOrderQuery(orderId);

        let totalOrder = order.map(o => {
            return new Order_items(o.Product_id, o.Quantity, o.Unit_price, o.total_price);
        });
        
        res.status(200).send(totalOrder);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

createOrderQuery = (order) => {
    const query = 'INSERT INTO order_items (Product_id,Quantity,Unit_price) VALUES (?,?,?)';
    return new Promise((resolve, reject) => {
        con.query(query,[order.Product_id,order.Quantity,order.Unit_price], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
            });
    });
};

createOrderItem = async(req, res, next) => {
    const newOrder = req.body;
    
     try {
        await createOrderQuery(newOrder);
        res.status(201).send("New order_item has been created");  
    } catch (error) {
        res.status(500).send(error.message);
    }
};

updateOrderQuery = (id, order) => {
    const query = 'UPDATE order_items SET Product_id = ?, Quantity = ?, Unit_price = ? WHERE Order_id = ?';
    const list = [order.Product_id, order.Quantity, order.Unit_price, id];

    return new Promise((resolve, reject) => {
        con.query(query, list, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                if(results.affectedRows == 0) {
                    reject("There is no order with that ID")
                }
                resolve(results);
            }
          });
    });
};

updateOrderItem = async(req, res) => {
    const orderRequest = req.body;
    const orderId = req.params.Order_id;
    try {
        await updateOrderQuery(orderId, orderRequest);
        res.status(201).send("OrderItem has been updated!");
    } catch (error) {
        res.status(500).send(error)
    }
};

deleteOrderQuery = (orderId) => {
    const query = "DELETE FROM order_items WHERE Order_id = ?";
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

deleteOrderItem = async(req,res) => {
    const orderID = req.params.Order_id;

    try {
        await deleteOrderQuery(orderID);
        res.status(200).send(`Order with id ${orderID} has been DELETED`);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports = {
    getAllOrderedItems,
    getSpecificOrder,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem
}