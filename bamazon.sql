--Create Database--
CREATE DATABASE bamazonDB;

--select database to use--
USE bamazonDB;

 --create table called products and add columns: --
CREATE TABLE PRODUCTS (
itemID VARCHAR (30) NOT NULL,
productName VARCHAR (30) NOT NULL,
deptName VARCHAR (30) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stockQty INTEGER(10) NOT NULL
);

 --Insert data to be displayed in the table--
INSERT INTO products(itemID,productName,deptName,price, stockQty)
VALUES("ABC123", "Headphones", "Electronics",10,12);

INSERT INTO products(itemID,productName,deptName,price, stockQty)
VALUES("DEF456", "JayZ CD", "Music",19.99,30);

INSERT INTO products(itemID,productName,deptName,price, stockQty)
VALUES("GHI789", "Green Socks", "Clothing",2,20);

INSERT INTO products(itemID,productName,deptName,price, stockQty)
VALUES("JKL012","Cooper Mug Shaker", "Home",24.99, 40 );

INSERT INTO products(itemID,productName,deptName,price, stockQty)
VALUES("MNO345", "Best Cookbook", "Books", 7.99, 25);

INSERT INTO products(itemID,productName,deptName,price, stockQty)
VALUES("PQR678","Men's Genesis RCT Bike", "Sports", 149.00, 20);

INSERT INTO products(itemID,productName,deptName,price, stockQty)
VALUES("ABC124","Apple iPad mini","Electronics", 349.00, 33);

INSERT INTO products(itemID,productName,deptName,price, stockQty)
VALUES("GHI790", "Blue Socks", "Clothing",2,26);

INSERT INTO products(itemID,productName,deptName,price, stockQty)
VALUES("NNN000", "Purple Lipstick","Makeup", 6.99,42);

INSERT INTO products(itemID,productName,deptName,price, stockQty)
VALUES("MMM111","Rose Gold Hoop Earrings","Jewelry",58.99,30);