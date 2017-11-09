module.exports = function (sequelize, DataTypes) {
	var Products = sequelize.define("products", {
		product_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,  
			allowNull: false 
		},

		line_id: {
			type: DataTypes.INTEGER
			allowNull:false
		}

		item_name: {
			type: DataTypes.STRING,
			allowNull: false
		},

		price: {
			type: DataTypes.INTEGER,
			allowNull: false
		},

		stock: {
			type: DataTypes.INTEGER,
			allowNull: false

		}
	});

	Products.associate = function(modules) {
		Products.belongsTo(modules.OrderDetails, {
			foreignkey: order_id
		});
	};
	return Products;

	var OrderDetails = sequelize.define("OrderDetails", {
		order_id : {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false
		},

		line_id: {
			type: DataTypes.INTEGER
			allowNull:false
		},

		item_name: 
	})

};


INSERT INTO orderdetails (line_id, order_id, item_name, quantity) VALUES (1224, 5228, 'Glimmer Lipstick', 0);
INSERT INTO orderdetails (line_id, order_id, item_name, quantity) VALUES (3579, 5228, 'Glow Eye Shadow', 0);
INSERT INTO orderdetails (line_id, order_id, item_name, quantity) VALUES (6985, 5228, 'Nail Polish', 0);
INSERT INTO orderdetails (line_id, order_id, item_name, quantity) VALUES (5429, 5228, 'Fragrance', 0);
INSERT INTO orderdetails (line_id, order_id, item_name, quantity) VALUES (8741, 5228, 'Firming Serum', 0);
