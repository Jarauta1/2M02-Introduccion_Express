let array = ["Leticia","Elena","Rafa","Manu","Dani","Diego"]

const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send(array);
});

app.get("/add/:nombre", function (req, res) {
    array.push(req.params.nombre);
    res.send(array);
});

app.listen(3000);