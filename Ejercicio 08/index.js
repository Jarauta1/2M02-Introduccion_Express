const express = require("express");
const app = express();

let array = require("./array")
let aleatorio = require("./aleatorio")

app.get("/", function (req, res) {
    res.send(array);
});

app.get("/add", function (req, res) {
    let num = aleatorio()
    array[num] = array[num] + 1;
    res.send(`Número: ${num}  
    Array: ${array}`);
});

app.get("/borrar/:numero", function (req, res) {
    let opcion = parseInt(req.params.numero);
    for (let i = 0; i < array.length; i++) {
        if (opcion == array[i]) {
            array[i] = 0
        }
    }
    res.send(`El número borrado es ${opcion} y el array queda: ${array}`)
});

app.listen(3000);