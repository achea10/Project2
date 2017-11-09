var express = require("express");
var router = express.Router();

var db = require("../modules");

router.get("/store", function (req, res) {
	db.Products.findAll ()
		.then(function(dbProducts) {
			console.log(dbProducts) ;

		})
});

router.post()