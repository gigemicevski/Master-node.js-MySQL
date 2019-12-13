// CREATE TABLE orders (
//     Order_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     Customer_id int(11) NOT NULL,
//     Order_date date NOT NULL,
//     Status tinyint(4) NOT NULL DEFAULT '1',
//     Comments varchar(2000) DEFAULT NULL,
//     Shipped_date date DEFAULT NULL,
//     Shipper_id smallint(6) DEFAULT NULL,
//     KEY `fk_orders_customers_idx` (`Customer_id`),
//     KEY `fk_orders_shippers_idx` (`Shipper_id`),
//     KEY `fk_orders_order_statuses_idx` (`Status`),
//     CONSTRAINT `fk_orders_customers` FOREIGN KEY (`Customer_id`) REFERENCES `customers` (`Customer_id`) ON UPDATE CASCADE,
//     CONSTRAINT `fk_orders_order_statuses` FOREIGN KEY (`Status`) REFERENCES `order_statuses` (`Order_status_id`) ON UPDATE CASCADE,
//     CONSTRAINT `fk_orders_shippers` FOREIGN KEY (`Shipper_id`) REFERENCES `shippers` (`Shipper_id`) ON UPDATE CASCADE
//   );
//   INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (1,6,'2019-01-30',1,NULL,NULL,NULL);
//   INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (2,7,'2018-08-02',2,NULL,'2018-08-03',4);
//   INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (3,8,'2017-12-01',1,NULL,NULL,NULL);
//   INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (4,2,'2017-01-22',1,NULL,NULL,NULL);
//   INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (5,5,'2017-08-25',2,'','2017-08-26',3);
//   INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (6,10,'2018-11-18',1,'Aliquam erat volutpat. In congue.',NULL,NULL);
//   INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (7,2,'2018-09-22',2,NULL,'2018-09-23',4);
//   INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (8,5,'2018-06-08',1,'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',NULL,NULL);
//   INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (9,10,'2017-07-05',2,'Nulla mollis molestie lorem. Quisque ut erat.','2017-07-06',1);
//   INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (10,6,'2018-04-22',2,NULL,'2018-04-23',2);