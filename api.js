const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const PORT = 9107;

//Middleware

app.use((req, res, next) => {
    console.log(
        "Request Received: ",
        new Date().toLocaleString("en-US", {
            timeZone: "Asia/Calcutta",
        })
    );
    next();
});
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.get("/blockchain", (req, res) => {
    res.send(bitcoin);
});

//Error Handling

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

//Server Config

var server = app.listen(PORT, () => {
    console.log(`Listening At ${PORT} ...`);
});
