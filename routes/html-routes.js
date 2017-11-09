var path = require("path");

module.exports = function(app) {
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/home.html"));
  });
  app.get("/store", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/store.html"));
  });
  app.get("/shopping_cart", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views.shopping_cart"));
  });
  app.get("/checkout", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/checkout.html"));
  });
  app.get("/about", function(req, res) {
    res.sendFile(path.joing(__dirname, "../public/views/about.html"));
  });

};