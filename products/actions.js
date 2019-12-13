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


createProductQuery = (product) => {
    const query = 'INSERT INTO products (Name,Quantity_in_stock,Unit_price) VALUES (?,?,?)';
    return new Promise((resolve, reject) => {
        con.query(query,[product.Name,product.Quantity_in_stock,product.Unit_price], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
            });
    });
};

createProduct = async(req, res, next) => {
    const newProduct = req.body;
    
    try {
        await createProductQuery(newProduct);
        res.status(201).send("New product has been created");  
    } catch (error) {
        res.status(500).send(error.message);
    }
};


deleteProductsQuery = (productId) => {
    const query = "DELETE FROM products WHERE Product_id = ?";
    return new Promise((resolve,reject) => {
        con.query(query,[productId],(error,results,fields) => {
            if(error){
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

deleteProduct = async(req,res) => {
    const productId = req.params.Product_id;
    
    try {
        await deleteProductsQuery(productId);
        res.status(200).send(`Product with id ${productId} has been DELETED`);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    deleteProduct
}