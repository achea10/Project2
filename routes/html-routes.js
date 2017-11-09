var path = require("path");

module.exports = function(app) {
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/home.html"));
  });
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/home.html"));
  });
  app.get("/store", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/store.html"));
  });
  app.get("/shopping_cart", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/shopping_cart.html"));
  });
  app.get("/checkout", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/checkout.html"));
  });
  app.get("/about", function(req, res) {
    res.sendFile(path.joing(__dirname, "../public/views/about.html"));
  });

};