const express = require("express");
const app = express();

app.get("/:numero", function (req, res) {
    let numero = req.params.numero;
    res.send(`Número aleatorio: ${parseInt(Math.random() * (numero - 0) + 0)}`);
});


app.listen(3000);