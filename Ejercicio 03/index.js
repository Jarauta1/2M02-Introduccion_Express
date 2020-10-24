const express = require("express");
const app = express();

let array = ["Ander", "Roberto", "Elena", "Bego", "Luis"]

app.get("/personas", function (req, res) {
    let mensaje = ""
    for (let i= 0; i < array.length; i++) {
        mensaje += `<h1>${array[i]}</h1>`
    }
    res.send(mensaje);
});

app.get("/personas/:parametro", function (req, res) {
    let parametro = req.params.parametro;
    for (let i= 0; i < array.length; i++) {
        if (parametro == array[i]) {
            res.send(parametro);
        }
    }
    res.send("Error")
});


app.listen(3000);