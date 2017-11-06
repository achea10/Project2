DROP DATABASE IF EXISTS products_db;

CREATE DATABASE products_db;

USE products_db;

CREATE TABLE customers (
  customer_id INTEGER NOT NULL,
  customer_name VARCHAR(100),
  customer_address VARCHAR(50),
  customer_creditcard INTEGER NOT NULL,
  user_id VARCHAR (100),
  user_password VARCHAR (100),
  PRIMARY KEY (customer_id)
  );
    
CREATE TABLE orders (
  order_id INT NOT NULL,
  customer_id INTEGER NOT NULL,
  total DECIMAL (10, 2) NULL,
  PRIMARY KEY (order_id),
  FOREIGN KEY (customer_id) REFERENCES customers (customer_id)  
);

CREATE TABLE orderdetails (
 line_id INT NOT NULL,
 order_id INT NOT NULL,
 item_name VARCHAR (100) NOT NULL,
 quantity INTEGER NULL,
 PRIMARY KEY (line_id),
 FOREIGN KEY (order_id) REFERENCES orders (order_id)
);

CREATE TABLE product_items (
  product_id INTEGER NOT NULL,
  line_id INT NOT NULL,
  item_name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NULL,
  stock INTEGER NULL,
  PRIMARY KEY (product_id),
  FOREIGN KEY (line_id) REFERENCES orderdetails (line_id)
);
