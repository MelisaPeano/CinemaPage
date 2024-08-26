const express = require("express");
const router = require("./src/routes/index");
const cors = require("cors");
const morgan = require("morgan");


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(router);


module.exports = app;