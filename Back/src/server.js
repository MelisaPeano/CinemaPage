const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const app = express();


app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api", router);



module.exports = app;

// este es el paso 2. Las solicitudes pasan por los middlewares y luego van 
// a el enrutador. 