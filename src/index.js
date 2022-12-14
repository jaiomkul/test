const express = require("express");

const cors = require("cors");

const productsController = require("./controllers/product.controller");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productsController);

module.exports = app;
