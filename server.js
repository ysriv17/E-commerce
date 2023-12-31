const express = require("express");
const dotenv = require("dotenv").config()
const cors = require("cors")
const port = process.env.PORT || 5000
const app = express();
const router = require("./user/routes/router");
const Dbconnect = require("./config/Dbconnection");

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.json());
app.use("/user", router);

Dbconnect();

app.listen(port, () => {
    console.log("server is running", port)
})