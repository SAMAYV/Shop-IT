const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middlewares/errors");

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
app.use(bodyparser.urlencoded({ extended: true }));

// Import all the routes
const products = require("./routes/product");
const auth = require("./routes/auth");
const payment = require("./routes/payment");
const order = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", payment);
app.use("/api/v1", order);

// Middleware to handle error
app.use(errorMiddleware);

module.exports = app;
