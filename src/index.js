const express = require("express");

cons cors = require("cors")

const productsController = require("./controllers/product.controller");

const app = express();

app.use(cors())
app.use("/products", productsController);

module.exports = app;
