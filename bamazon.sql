

DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cherries", "Produce", 10, 20 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Canteloupe", "Produce", 20, 20 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Artichoke", "Produce", 10, 20 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cheerios", "Packages", 5, 50 );