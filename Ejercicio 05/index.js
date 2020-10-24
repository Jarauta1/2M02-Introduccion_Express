let objeto = { nombre: "Diego", apellido: "Jarauta", edad: "33" }

const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send(objeto);
});

app.get("/nombre/:nombre", function (req, res) {
    objeto.nombre = req.params.nombre;
    res.send(objeto);
});

app.get("/apellido/:apellido", function (req, res) {
    objeto.apellido = req.params.apellido;
    res.send(objeto);
});

app.get("/edad/:edad", function (req, res) {
    objeto.edad = parseInt(req.params.edad);
    res.send(objeto);
});

app.listen(3000);