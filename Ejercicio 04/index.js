const express = require("express");
const app = express();

let saludo = require("./saludarEnExpress")

app.get("/saludarEnExpress", function (req, res) {
    res.send(saludo());
});

app.listen(3000);