const express = require("express");
const app = express();

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
});

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html")
});

app.listen(3000);
