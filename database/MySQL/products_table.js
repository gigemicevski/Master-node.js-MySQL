`CREATE TABLE IF NOT EXISTS products(
	Product_id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Quantity_in_stock INT NOT NULL,
    Unit_price decimal(4,2) NOT NULL
);

INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (1,'Foam Dinner Plate',70,1.21);
INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (2,'Pork - Bacon,back Peameal',49,4.65);
INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (3,'Lettuce - Romaine, Heart',38,3.35);
INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (4,'Brocolinni - Gaylan, Chinese',90,4.53);
INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (5,'Sauce - Dressing',94,1.63);
INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (6,'Petit Baguette',14,2.39);
INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (7,'Sweet Pea Sprouts',98,3.29);
INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (8,'Island Oasis - Raspberry',26,0.74);
INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (9,'Longan',67,2.26);
INSERT INTO products(Product_id,Name,Quantity_in_stock,Unit_price) VALUES (10,'Broom - Push',6,1.09);

SELECT * FROM products;`