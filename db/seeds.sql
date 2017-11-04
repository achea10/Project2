INSERT INTO customers (customer_id, customer_name, customer_address, customer_creditcard, user_id, user_password) VALUES (1441, 'Jane', '115 E Mansion Rd', 0, 'jane', 'doe123');

INSERT INTO orders (order_id, customer_id, total) VALUES (5228, 1441, 0);

INSERT INTO orderdetails (line_id, order_id, item_name, quantity) VALUES (1224, 5228, 'Glimmer Lipstick', 0);
INSERT INTO orderdetails (line_id, order_id, item_name, quantity) VALUES (3579, 5228, 'Glow Eye Shadow', 0);
INSERT INTO orderdetails (line_id, order_id, item_name, quantity) VALUES (6985, 5228, 'Nail Polish', 0);
INSERT INTO orderdetails (line_id, order_id, item_name, quantity) VALUES (5429, 5228, 'Fragrance', 0);
INSERT INTO orderdetails (line_id, order_id, item_name, quantity) VALUES (8741, 5228, 'Firming Serum', 0);

INSERT INTO product_items (product_id, line_id, item_name, price, stock) VALUES (123, 1224, 'Glimmer Lipstick', 22.00, 250);
INSERT INTO product_items (product_id, line_id, item_name, price, stock) VALUES (321, 3579, 'Glow Eye Shadow', 68.00, 500);
INSERT INTO product_items (product_id, line_id, item_name, price, stock) VALUES (852, 6985, 'Nail Polish', 18.50, 500);
INSERT INTO product_items (product_id, line_id, item_name, price, stock) VALUES (264, 5429, 'Fragrance', 118.00, 250);
INSERT INTO product_items (product_id, line_id, item_name, price, stock) VALUES (549, 8741, 'Firming Serum', 102.00, 300);

