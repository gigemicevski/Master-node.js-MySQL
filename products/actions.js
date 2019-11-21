const con = require('../database');


getAllProductsQuery = () => {
    const query = "SELECT * FROM products";
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

getAllProducts = async(req, res) => {
    try {
        const products = await getAllProductsQuery();
        res.status(200).send(products);  
    } catch (error) {
        res.status(500).send(error);
    }
};


module.exports = {
    getAllProducts
}