const express = require("express");
const app = express();

app.use(express.static("public"))

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
});

app.get("/work", (req, res) => {
    res.sendFile(__dirname + "/views/work.html")
});

app.get("/pictures", (req, res) => {
    res.sendFile(__dirname + "/views/pictures.html")
});

app.listen(3000);

