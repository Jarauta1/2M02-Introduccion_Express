const express = require("express");
const app = express();

let objeto = require("./addCesta")

let addCesta = objeto.funcion
let cesta = objeto.tabla
let mostrarProductos = require("./mostrarProductos")


app.get("/deportes", function (req, res) {
    let mostrarDeportes = mostrarProductos("deportes");
    res.send(mostrarDeportes);
    console.log()
});

app.get("/electronica", function (req, res) {
    let mostrarElectronica = mostrarProductos("electronica");
    res.send(mostrarElectronica);
});

app.get("/hogar", function (req, res) {
    let mostrarHogar = mostrarProductos("hogar");
    res.send(mostrarHogar);
});

app.get("/videojuegos", function (req, res) {
    let mostrarVideojuegos = mostrarProductos("videojuegos");
    res.send(mostrarVideojuegos);
});

app.get("/deportes/:producto/:cantidad", function (req, res) {
    let producto = req.params.producto;
    let cantidad = parseInt(req.params.cantidad);
    let mensaje = addCesta(producto,cantidad,"deportes")
    res.send(mensaje)

})

app.get("/electronica/:producto/:cantidad", function (req, res) {
    let producto = req.params.producto;
    let cantidad = parseInt(req.params.cantidad);
    let mensaje = addCesta(producto,cantidad,"electronica")
    res.send(mensaje)
})

app.get("/hogar/:producto/:cantidad", function (req, res) {
    let producto = req.params.producto;
    let cantidad = parseInt(req.params.cantidad);
    let mensaje = addCesta(producto,cantidad,"hogar")
    res.send(mensaje)
})

app.get("/videojuegos/:producto/:cantidad", function (req, res) {
    let producto = req.params.producto;
    let cantidad = parseInt(req.params.cantidad);
    let mensaje = addCesta(producto,cantidad,"videojuegos")
    res.send(mensaje)
})

app.get("/cesta", function (req, res) {
    res.send(cesta)
})

let mensajeCompra = ""
let total = 0

app.get("/compra", function (req, res) {
    for (let i = 0; i < cesta.length; i++) {
        mensajeCompra += `<p>Ha comprado ${cesta[i]["Cantidad"]} de ${cesta[i]["Producto"]}, será ${cesta[i]["Precio"] * cesta[i]["Cantidad"]} €</p>`
    }
    for (let i = 0; i < cesta.length; i++) {
        total += cesta[i]["Precio"] * cesta[i]["Cantidad"]
    }

    res.send(`${mensajeCompra}
    <p>Todo ello le costara ${total} €</p>`)
    cesta = []
})

app.listen(3000);

