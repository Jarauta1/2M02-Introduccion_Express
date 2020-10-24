const express = require("express");
const app = express();

let array = require("./array")

let numero = require("./aleatorio")

app.get("/", function (req, res) {
    res.send(array);
});

app.get("/add", function (req, res) {
  let num = numero()
array[num] = array[num] + 1;
  res.send(`Número: ${num}  
  Array: ${array}`);
});

app.listen(3000);