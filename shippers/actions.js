const con = require('../database');


getShippersQuery = () => {
    const query = "SELECT * FROM shippers";
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

getShippers = async(req, res) => {
    try {
        const shippers = await getShippersQuery();
        res.status(200).send(shippers);  
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
   getShippers
}