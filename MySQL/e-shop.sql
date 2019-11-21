-- CREATE TABLE users (
--   Users_id INT AUTO_INCREMENT PRIMARY KEY,
--   Email varchar(200) NOT NULL unique,
--   Password varchar(200) NOT NULL 
-- );

-- INSERT INTO users(Users_id,Email,Password) VALUES (1,'zazagabac@gmail.com',123456);
-- INSERT INTO users(Users_id,Email,Password) VALUES (2,'gabac123@gmail.com',123456);
-- INSERT INTO users(Users_id,Email,Password) VALUES (3,'idetako11@gmail.com',123456);
-- INSERT INTO users(Users_id,Email,Password) VALUES (4,'bashki123@gmail.com',123456);
-- INSERT INTO users(Users_id,Email,Password) VALUES (5,'totlo999@gmail.com',123456);
-- INSERT INTO users(Users_id,Email,Password) VALUES (6,'mishkajupu@gmail.com',123456);
-- INSERT INTO users(Users_id,Email,Password) VALUES (7,'kotoramo@gmail.com',123456);
-- INSERT INTO users(Users_id,Email,Password) VALUES (8,'nielsen11@gmail.com',123456);
-- INSERT INTO users(Users_id,Email,Password) VALUES (9,'momikkuu@gmail.com',123456);
-- INSERT INTO users(Users_id,Email,Password) VALUES (10,'zghimani@gmail.com',123456);


-- CREATE TABLE IF NOT EXISTS customers(
-- 	Customer_id INT AUTO_INCREMENT PRIMARY KEY,
--     First_name VARCHAR(20) NOT NULL,
--     Last_name VARCHAR(30),
--     Birth_date date DEFAULT NULL,
--     Phone varchar(50) DEFAULT NULL,
--     Address varchar(50) NOT NULL,
--     City varchar(50) NOT NULL
-- );


-- INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (1,'Babara','MacCaffrey','1986-03-28','781-932-9754','0 Sage Terrace','Waltham');
-- INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (2,'Ines','Brushfield','1986-04-13','804-427-9456','14187 Commercial Trail','Hampton');
-- INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (3,'Freddi','Boagey','1985-02-07','719-724-7869','251 Springs Junction','Colorado Springs');
-- INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (4,'Ambur','Roseburgh','1974-04-14','407-231-8017','30 Arapahoe Terrace','Orlando');
-- INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (5,'Clemmie','Betchley','1973-11-07',NULL,'5 Spohn Circle','Arlington');
-- INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (6,'Elka','Twiddell','1991-09-04','312-480-8498','7 Manley Drive','Chicago');
-- INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (7,'Ilene','Dowson','1964-08-30','615-641-4759','50 Lillian Crossing','Nashville');
-- INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (8,'Thacher','Naseby','1993-07-17','941-527-3977','538 Mosinee Center','Sarasota');
-- INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (9,'Romola','Rumgay','1992-05-23','559-181-3744','3520 Ohio Trail','Visalia');
-- INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (10,'Levy','Mynett','1969-10-13','404-246-3370','68 Lawn Avenue','Atlanta');

-- select * from customers;

-- SELECT * FROM `e-shop`.customers WHERE Customer_id = 1;

-- CREATE TABLE IF NOT EXISTS products(
-- 	Product_id INT AUTO_INCREMENT PRIMARY KEY,
--     Name VARCHAR(50) NOT NULL,
--     Quantity_in_stock INT NOT NULL,
--     Unit_price decimal(4,2) NOT NULL
-- );

-- INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (1,'Foam Dinner Plate',70,1.21);
-- INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (2,'Pork - Bacon,back Peameal',49,4.65);
-- INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (3,'Lettuce - Romaine, Heart',38,3.35);
-- INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (4,'Brocolinni - Gaylan, Chinese',90,4.53);
-- INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (5,'Sauce - Dressing',94,1.63);
-- INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (6,'Petit Baguette',14,2.39);
-- INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (7,'Sweet Pea Sprouts',98,3.29);
-- INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (8,'Island Oasis - Raspberry',26,0.74);
-- INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (9,'Longan',67,2.26);
-- INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (10,'Broom - Push',6,1.09);

-- SELECT * FROM products;

-- CREATE TABLE order_statuses (
--   Order_status_id tinyint(4) NOT NULL PRIMARY KEY,
--   Name varchar(50) NOT NULL
-- );
-- INSERT INTO order_statuses(Order_status_id,Name) VALUES (1,'Processed');
-- INSERT INTO order_statuses(Order_status_id,Name) VALUES (2,'Shipped');
-- INSERT INTO order_statuses(Order_status_id,Name) VALUES (3,'Delivered');

-- SELECT * FROM `e-shop`.order_statuses;

-- CREATE TABLE shippers (
--   Shipper_id smallint(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   Name varchar(50) NOT NULL
-- );
-- INSERT INTO shippers(Shipper_id,Name) VALUES (1,'Hettinger LLC');
-- INSERT INTO shippers(Shipper_id,Name) VALUES (2,'Schinner-Predovic');
-- INSERT INTO shippers(Shipper_id,Name) VALUES (3,'Satterfield LLC');
-- INSERT INTO shippers(Shipper_id,Name) VALUES (4,'Mraz, Renner and Nolan');
-- INSERT INTO shippers(Shipper_id,Name) VALUES (5,'Waters, Mayert and Prohaska');


-- CREATE TABLE orders (
--   Order_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   Customer_id int(11) NOT NULL,
--   Order_date date NOT NULL,
--   Status tinyint(4) NOT NULL DEFAULT '1',
--   Comments varchar(2000) DEFAULT NULL,
--   Shipped_date date DEFAULT NULL,
--   Shipper_id smallint(6) DEFAULT NULL,
--   KEY `fk_orders_customers_idx` (`Customer_id`),
--   KEY `fk_orders_shippers_idx` (`Shipper_id`),
--   KEY `fk_orders_order_statuses_idx` (`Status`),
--   CONSTRAINT `fk_orders_customers` FOREIGN KEY (`Customer_id`) REFERENCES `customers` (`Customer_id`) ON UPDATE CASCADE,
--   CONSTRAINT `fk_orders_order_statuses` FOREIGN KEY (`Status`) REFERENCES `order_statuses` (`Order_status_id`) ON UPDATE CASCADE,
--   CONSTRAINT `fk_orders_shippers` FOREIGN KEY (`Shipper_id`) REFERENCES `shippers` (`Shipper_id`) ON UPDATE CASCADE
-- );
-- INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (1,6,'2019-01-30',1,NULL,NULL,NULL);
-- INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (2,7,'2018-08-02',2,NULL,'2018-08-03',4);
-- INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (3,8,'2017-12-01',1,NULL,NULL,NULL);
-- INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (4,2,'2017-01-22',1,NULL,NULL,NULL);
-- INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (5,5,'2017-08-25',2,'','2017-08-26',3);
-- INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (6,10,'2018-11-18',1,'Aliquam erat volutpat. In congue.',NULL,NULL);
-- INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (7,2,'2018-09-22',2,NULL,'2018-09-23',4);
-- INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (8,5,'2018-06-08',1,'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',NULL,NULL);
-- INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (9,10,'2017-07-05',2,'Nulla mollis molestie lorem. Quisque ut erat.','2017-07-06',1);
-- INSERT INTO orders(Order_id,Customer_id,Order_date,Status,Comments,Shipped_date,Shipper_id) VALUES (10,6,'2018-04-22',2,NULL,'2018-04-23',2);

-- CREATE TABLE order_items (
--   Order_id int(11) NOT NULL AUTO_INCREMENT,
--   Product_id int(11) NOT NULL,
--   Quantity int(11) NOT NULL,
--   Unit_price decimal(4,2) NOT NULL,
--   PRIMARY KEY (Order_id,Product_id),
--   KEY `fk_order_items_products_idx` (Product_id),
--   CONSTRAINT `fk_order_items_orders` FOREIGN KEY (Order_id) REFERENCES orders (Order_id) ON UPDATE CASCADE,
--   CONSTRAINT `fk_order_items_products` FOREIGN KEY (Product_id) REFERENCES products (Product_id) ON UPDATE CASCADE
-- ) ;
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (1,4,4,3.74);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (2,1,2,9.10);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (2,4,4,1.66);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (2,6,2,2.94);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (3,3,10,9.12);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (4,3,7,6.99);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (4,10,7,6.40);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (5,2,3,9.89);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (6,1,4,8.65);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (6,2,4,3.28);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (6,3,4,7.46);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (6,5,1,3.45);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (7,3,7,9.17);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (8,5,2,6.94);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (8,8,2,8.59);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (9,6,5,7.28);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (10,1,10,6.01);
-- INSERT INTO order_items(Order_id,Product_id,Quantity,Unit_price) VALUES (10,9,9,4.28);





-- alter table orders
-- add Product_id int default(1);

-- alter table orders
-- add constraint foreign key (Product_id)
-- references `e-shop`.products(Product_id);

-- ALTER TABLE orders DROP Product_id;

-- SELECT * FROM orders JOIN customers ON orders.Customer_id = customers.Customer_id;

-- SELECT * FROM orders o 
-- JOIN customers c ON o.Customer_id = c.Customer_id 
-- JOIN  order_statuses os ON o.Status = os.Order_status_id;


-- SELECT o.Order_id,o.Order_date,c.First_name,c.Last_name,os.Name AS status
-- FROM orders o 
-- JOIN customers c ON o.Customer_id = c.Customer_id 
-- JOIN  order_statuses os ON o.Status = os.Order_status_id;

-- SELECT * FROM orders WHERE Shipped_date >= '2018-00-00';

-- SELECT c.Customer_id,c.First_name,o.Order_id
-- FROM orders o
-- LEFT JOIN customers c
-- 	ON c.Customer_id = o.Customer_id
-- ORDER BY c.Customer_id;


-- SELECT c.First_name, c.Last_name, c.Phone, o.Order_date, o.Status, o.Shipped_date 
-- FROM customers as c 
-- JOIN orders as o 
-- ON c.Customer_id = o.Order_id 
-- WHERE c.Customer_id = ?

