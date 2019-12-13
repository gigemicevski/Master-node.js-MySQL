`CREATE TABLE order_statuses (
    Order_status_id tinyint(4) NOT NULL PRIMARY KEY,
    Name varchar(50) NOT NULL
  );
  INSERT INTO order_statuses(Order_status_id,Name) VALUES (1,'Processed');
  INSERT INTO order_statuses(Order_status_id,Name) VALUES (2,'Shipped');
  INSERT INTO order_statuses(Order_status_id,Name) VALUES (3,'Delivered');
  
  `