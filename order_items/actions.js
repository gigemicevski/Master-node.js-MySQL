const con = require('../database');

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

module.exports = {
    getAllOrderedItems
}