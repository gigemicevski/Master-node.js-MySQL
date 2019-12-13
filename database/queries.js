const getSpecificItem = "SELECT Order_id,order_items.Product_id,Quantity,products.Name,products.Unit_price FROM `e-shop`.order_items JOIN products ON order_items.Product_id = products.Product_id WHERE Order_id = ?";
const getOrder = "select c.Customer_id,c.First_name,o.Order_id,oi.Product_id,oi.Unit_price,oi.Quantity,p.Name from customers c join orders o ON o.Customer_id = c.Customer_id join order_items oi ON oi.Order_id = o.Order_id  join products p ON p.Product_id = oi.Product_id where c.Customer_id = ?";


module.exports = {
    getSpecificItem,
    getOrder
}