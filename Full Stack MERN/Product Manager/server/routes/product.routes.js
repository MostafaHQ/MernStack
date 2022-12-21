const ProductController = require("../controllers/product.controller.js");

module.exports = function (app) {
  app.post("/api/products", ProductController.createProduct);
  app.get("/api/products", ProductController.getAllProducts);
  app.get("/api/products/:id", ProductController.getProduct);
  app.put("/api/people/:id", ProductController.updateProduct);
  app.delete("/api/products/:id", ProductController.deleteProduct);
};
