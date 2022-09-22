const express = require("express");

const productsController = require("./src/controllers/product.controller");

const app = express();

app.use("/products", productsController);

module.exports = app;
