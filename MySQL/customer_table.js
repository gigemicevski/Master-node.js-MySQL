`CREATE TABLE IF NOT EXISTS customers(
	Customer_id INT AUTO_INCREMENT PRIMARY KEY,
    First_name VARCHAR(20) NOT NULL,
    Last_name VARCHAR(30),
    Birth_date date DEFAULT NULL,
    Phone varchar(50) default null,
    Address varchar(50) NOT NULL,
    City varchar(50) NOT NULL
);


INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (1,'Babara','MacCaffrey','1986-03-28','781-932-9754','0 Sage Terrace','Waltham');
INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (2,'Ines','Brushfield','1986-04-13','804-427-9456','14187 Commercial Trail','Hampton');
INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (3,'Freddi','Boagey','1985-02-07','719-724-7869','251 Springs Junction','Colorado Springs');
INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (4,'Ambur','Roseburgh','1974-04-14','407-231-8017','30 Arapahoe Terrace','Orlando');
INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (5,'Clemmie','Betchley','1973-11-07',NULL,'5 Spohn Circle','Arlington');
INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (6,'Elka','Twiddell','1991-09-04','312-480-8498','7 Manley Drive','Chicago');
INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (7,'Ilene','Dowson','1964-08-30','615-641-4759','50 Lillian Crossing','Nashville');
INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (8,'Thacher','Naseby','1993-07-17','941-527-3977','538 Mosinee Center','Sarasota');
INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (9,'Romola','Rumgay','1992-05-23','559-181-3744','3520 Ohio Trail','Visalia');
INSERT INTO customers(Customer_id,First_name,Last_name,Birth_date,Phone,Address,City) VALUES (10,'Levy','Mynett','1969-10-13','404-246-3370','68 Lawn Avenue','Atlanta');

select * from customers;`