const con = require('../database');
const {Customer,Orders} = require('../models');


getAllCustomersQuery = () => {
    const query = "SELECT * FROM customers;";
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

getAllCustomers = async(req, res) => {
    try {
        const customers = await getAllCustomersQuery();
        res.status(200).send(customers);  
    } catch (error) {
        res.status(500).send(error);
    }
};

getCustomersWhoMakesOrderQuery = () =>{
    const query = "SELECT c.Customer_id,c.First_name,o.Order_id FROM orders o LEFT JOIN customers c ON c.Customer_id = o.Customer_id ORDER BY c.Customer_id";
    return new Promise ((resolve,reject) => {
        con.query(query,(error,results,fields) => {
            if(error){
                reject(error)
            } else {
                resolve(results);
            }
        })
    })
}

getCustomersWhoMakesOrder = async(req, res) => {
    try {
        const customersOrder = await getCustomersWhoMakesOrderQuery();
        res.status(200).send(customersOrder);  
    } catch (error) {
        res.status(500).send(error);
    }
};

getSpecificCustomerQuery = (customerId) => {
    const query = "SELECT * FROM customers WHERE Customer_id = ?";
    return new Promise((resolve,reject) => {
        con.query(query,[customerId],(error,results,fields) => {
            if(error){
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

getSpecificCustomer = async(req,res,next) => {
    const customerId = req.params.Customer_id;
    
    if(customerId <= 0) {
        var error = new Error('CustomerId can not be less then 1!');
        error.status = 401;
        return next(error);
    }

    try {
        const customer = await getSpecificCustomerQuery(customerId);
        res.status(200).send(customer[0]);  
    } catch (error) {
        res.status(500).send(error.message);
    }
}


createCustomerQuery = (customer) => {
    const query = 'INSERT INTO customers (First_name,Last_name,Birth_date,Address,City) VALUES (?,?,?,?,?)';
    return new Promise((resolve, reject) => {
        con.query(query,[customer.First_name,customer.Last_name,customer.Birth_date,customer.Address,customer.City], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
            });
    });
};

createCustomer = async(req, res, next) => {
    const newCustomer = req.body;
    
    try {
        const result = await createCustomerQuery(newCustomer);
        res.status(201).send("New customer has been created");  
    } catch (error) {
        res.status(500).send(error.message);
    }
};

updateCustomerQuery = (id, customer) => {
    const query = 'UPDATE customers SET First_name = ?, Last_name = ?, Birth_date = ?, Phone = ?, Address = ?,City = ? WHERE Customer_id = ?';
    const list = [customer.First_name, customer.Last_name, customer.Birth_date, customer.Phone, customer.Address,customer.City, id];

    return new Promise((resolve, reject) => {
        con.query(query, list, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                console.log(results)
                if(results.affectedRows == 0) {
                    reject("There is no customer with that ID")
                }
                resolve(results);
            }
          });
    });
};

updateCustomer = async(req, res) => {
    const customerRequest = req.body;
    const customerId = req.params.Customer_id
    try {
        await updateCustomerQuery(customerId, customerRequest);
        res.status(201).send("Customer has been updated!");
    } catch (error) {
        res.status(500).send(error)
    }
};

deleteCutomerQuery = (customerId) => {
    const query = "DELETE FROM customers WHERE Customer_id = ?";
    return new Promise((resolve,reject) => {
        con.query(query,[customerId],(error,results,fields) => {
            if(error){
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

deleteCustomer = async(req,res) => {
    const customerId = req.params.Customer_id;

    try {
        await deleteCutomerQuery(customerId);
        res.status(200).send(`Customer with id ${customerId} has been DELETED`);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


getCustomerOrdersInfoQuery = (customerid) => {
    const query = 'SELECT c.First_name, c.Last_name, c.Phone, o.Order_date, o.Status, o.Shipped_date FROM customers as c JOIN orders as o ON c.Customer_id = o.Order_id WHERE c.Customer_id = ?';
    return new Promise((resolve, reject) => {
        con.query(query, [customerid], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
          });
    });
};

getCustomerOrdersInfo = async(req, res) => {
    const customerId = req.params.Customer_id;
    try {
        const result = await getCustomerOrdersInfoQuery(customerId);
        const dbCustomer = result[0];
        let customer = new Customer(dbCustomer.First_name, dbCustomer.Last_name, dbCustomer.Birth_date, dbCustomer.Phone, dbCustomer.Address,dbCustomer.City, []);
        let orders = result.map(x => {
            return new Orders(x.Order_date, x.Status, x.Comments,x.Shipped_date,x.Shipper_id);
        });
        customer.orders = orders;
        res.status(201).send(customer);  
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = {
    getAllCustomers,
    createCustomer,
    getSpecificCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomersWhoMakesOrder,
    getCustomerOrdersInfo
}