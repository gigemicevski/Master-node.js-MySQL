const con = require('../database');


getOrderStatusQuery = () => {
    const query = "SELECT * FROM order_statuses";
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

getOrderStatus = async(req, res) => {
    try {
        const orderStatus = await getOrderStatusQuery();
        res.status(200).send(orderStatus);  
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
   getOrderStatus
}