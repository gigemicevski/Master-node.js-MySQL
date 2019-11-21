const con = require('../database');


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
    const query = "SELECT o.Order_id,o.Order_date,c.First_name,c.Last_name,os.Name AS status FROM orders o JOIN customers c ON o.Customer_id = c.Customer_id JOIN  order_statuses os ON o.Status = os.Order_status_id";
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

module.exports = {
   getOrders,
   getYourOrderStatus,
   getOrdersInfo
}