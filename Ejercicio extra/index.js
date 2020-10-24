let almacen = [
    {
        deportes: [
            {
                nombre: "Camiseta",
                precio: 30,
                stock: 2000
            },
            {
                nombre: "Deportivas",
                precio: 49,
                stock: 846
            },
            {
                nombre: "Mochila",
                precio: 29,
                stock: 1815
            }
        ]
    },
    {
        electronica: [
            {
                nombre: "GearS2",
                precio: 89,
                stock: 5
            },
            {
                nombre: "Sonos",
                precio: 229,
                stock: 654
            },
            {
                nombre: "MSI",
                precio: 899,
                stock: 12649
            }
        ]
    },
    {
        hogar: [
            {
                nombre: "Silla",
                precio: 155,
                stock: 14
            },
            {
                nombre: "Estanteria",
                precio: 659,
                stock: 23
            },
            {
                nombre: "Sillon",
                precio: 1844,
                stock: 34
            }
        ]
    },
    {
        videojuegos: [
            {
                nombre: "FIFA21",
                precio: 59,
                stock: 61
            },
            {
                nombre: "Deadpool",
                precio: 84,
                stock: 349
            },
            {
                nombre: "NBA2K21",
                precio: 59,
                stock: 84
            }
        ]
    }
]

let cesta = []

const express = require("express");
const app = express();

app.get("/deportes", function (req, res) {
    res.send(`<table>
    <tr>
    <th>Nombre</th>
    <th>Precio</th>
    <th>Stock</th>
    </tr>
    <tr>
    <td>${almacen[0].deportes[0].nombre}</td>
    <td>${almacen[0].deportes[0].precio}</td>
    <td>${almacen[0].deportes[0].stock}</td>
    </tr>
    <tr>
    <td>${almacen[0].deportes[1].nombre}</td>
    <td>${almacen[0].deportes[1].precio}</td>
    <td>${almacen[0].deportes[1].stock}</td>
    </tr>
    <tr>
    <td>${almacen[0].deportes[2].nombre}</td>
    <td>${almacen[0].deportes[2].precio}</td>
    <td>${almacen[0].deportes[2].stock}</td>
    </tr>
    `);
});

app.get("/electronica", function (req, res) {
    res.send(`<table>
    <tr>
    <th>Nombre</th>
    <th>Precio</th>
    <th>Stock</th>
    </tr>
    <tr>
    <td>${almacen[1].electronica[0].nombre}</td>
    <td>${almacen[1].electronica[0].precio}</td>
    <td>${almacen[1].electronica[0].stock}</td>
    </tr>
    <tr>
    <td>${almacen[1].electronica[1].nombre}</td>
    <td>${almacen[1].electronica[1].precio}</td>
    <td>${almacen[1].electronica[1].stock}</td>
    </tr>
    <tr>
    <td>${almacen[1].electronica[2].nombre}</td>
    <td>${almacen[1].electronica[2].precio}</td>
    <td>${almacen[1].electronica[2].stock}</td>
    </tr>
    `);
});

app.get("/hogar", function (req, res) {
    res.send(`<table>
    <tr>
    <th>Nombre</th>
    <th>Precio</th>
    <th>Stock</th>
    </tr>
    <tr>
    <td>${almacen[2].hogar[0].nombre}</td>
    <td>${almacen[2].hogar[0].precio}</td>
    <td>${almacen[2].hogar[0].stock}</td>
    </tr>
    <tr>
    <td>${almacen[2].hogar[1].nombre}</td>
    <td>${almacen[2].hogar[1].precio}</td>
    <td>${almacen[2].hogar[1].stock}</td>
    </tr>
    <tr>
    <td>${almacen[2].hogar[2].nombre}</td>
    <td>${almacen[2].hogar[2].precio}</td>
    <td>${almacen[2].hogar[2].stock}</td>
    </tr>
    `);
});

app.get("/videojuegos", function (req, res) {
    res.send(`<table>
    <tr>
    <th>Nombre</th>
    <th>Precio</th>
    <th>Stock</th>
    </tr>
    <tr>
    <td>${almacen[3].videojuegos[0].nombre}</td>
    <td>${almacen[3].videojuegos[0].precio}</td>
    <td>${almacen[3].videojuegos[0].stock}</td>
    </tr>
    <tr>
    <td>${almacen[3].videojuegos[1].nombre}</td>
    <td>${almacen[3].videojuegos[1].precio}</td>
    <td>${almacen[3].videojuegos[1].stock}</td>
    </tr>
    <tr>
    <td>${almacen[3].videojuegos[2].nombre}</td>
    <td>${almacen[3].videojuegos[2].precio}</td>
    <td>${almacen[3].videojuegos[2].stock}</td>
    </tr>
    `);
});

let indice

app.get("/deportes/:productoDeporte/:cantidadDeporte", function (req, res) {
    let productoDeporte = req.params.productoDeporte;
    let cantidadDeporte = parseInt(req.params.cantidadDeporte);
    if (productoDeporte == "Camiseta") {
        indice = 0
    } else if (productoDeporte == "Deportivas") {
        indice = 1
    } else if (productoDeporte == "Mochila") {
        indice = 2
    } else {
        res.send(`<h2>No disponemos de un producto que se llame "${productoDeporte}"</h2>`)
    }
    if (cantidadDeporte <= almacen[0].deportes[indice].stock) {
        let cargaDeporte = { Producto: almacen[0].deportes[indice].nombre, Precio: almacen[0].deportes[indice].precio, Cantidad: cantidadDeporte }
        cesta.push(cargaDeporte)
        res.send(`Se ha añadido ${productoDeporte} a tu cesta. Cantidad: ${cantidadDeporte}`)
    } else {
        res.send(`<h1>No hay suficiente stock de ${productoDeporte}</h1>`)
    }
})

app.get("/electronica/:productoElectronica/:cantidadElectronica", function (req, res) {
    let productoElectronica = req.params.productoElectronica;
    let cantidadElectronica = parseInt(req.params.cantidadElectronica);
    if (productoElectronica == "GearS2") {
        indice = 0
    } else if (productoElectronica == "Sonos") {
        indice = 1
    } else if (productoElectronica == "MSI") {
        indice = 2
    } else {
        res.send(`<h2>No disponemos de un producto que se llame "${productoElectronica}"</h2>`)
    }
    if (cantidadElectronica <= almacen[1].electronica[indice].stock) {
        let cargaElectronica = { Producto: almacen[1].electronica[indice].nombre, Precio: almacen[1].electronica[indice].precio, Cantidad: cantidadElectronica }
        cesta.push(cargaElectronica)
        res.send(`Se ha añadido ${productoElectronica} a tu cesta. Cantidad: ${cantidadElectronica}`)
    } else {
        res.send(`<h1>No hay suficiente stock de ${productoElectronica}</h1>`)
    }
})

app.get("/hogar/:productoHogar/:cantidaHogar", function (req, res) {
    let productoHogar = req.params.productoHogar;
    let cantidaHogar = parseInt(req.params.cantidaHogar);
    if (productoHogar == "Silla") {
        indice = 0
    } else if (productoHogar == "Estanteria") {
        indice = 1
    } else if (productoHogar == "Sillon") {
        indice = 2
    } else {
        res.send(`<h2>No disponemos de un producto que se llame "${productoHogar}"</h2>`)
    }
    if (cantidaHogar <= almacen[2].hogar[indice].stock) {
        let cargaHogar = { Producto: almacen[2].hogar[indice].nombre, Precio: almacen[2].hogar[indice].precio, Cantidad: cantidaHogar }
        cesta.push(cargaHogar)
        res.send(`Se ha añadido ${productoHogar} a tu cesta. Cantidad: ${cantidaHogar}`)
    } else {
        res.send(`<h1>No hay suficiente stock de ${productoHogar}</h1>`)
    }
})

app.get("/videojuegos/:productoVideojuegos/:cantidadVideojuegos", function (req, res) {
    let productoVideojuegos = req.params.productoVideojuegos;
    let cantidadVideojuegos = parseInt(req.params.cantidadVideojuegos);
    if (productoVideojuegos == "FIFA21") {
        indice = 0
    } else if (productoVideojuegos == "Deadpool") {
        indice = 1
    } else if (productoVideojuegos == "NBA2K21") {
        indice = 2
    } else {
        res.send(`<h2>No disponemos de un producto que se llame "${productoVideojuegos}"</h2>`)
    }
    if (cantidadVideojuegos <= almacen[3].videojuegos[indice].stock) {
        let cargaVideojuegos = { Producto: almacen[3].videojuegos[indice].nombre, Precio: almacen[3].videojuegos[indice].precio, Cantidad: cantidadVideojuegos }
        cesta.push(cargaVideojuegos)
        res.send(`Se ha añadido ${productoVideojuegos} a tu cesta. Cantidad: ${cantidadVideojuegos}`)
    } else {
        res.send(`<h1>No hay suficiente stock de ${productoVideojuegos}</h1>`)
    }
})

app.get("/cesta", function (req, res) {
    res.send(cesta)
})

let mensaje = ""
let total = 0

app.get("/compra", function (req, res) {
    for (let i = 0; i < cesta.length; i++) {
        mensaje += `<p>Ha comprado ${cesta[i]["Cantidad"]} de ${cesta[i]["Producto"]}, será ${cesta[i]["Precio"]*cesta[i]["Cantidad"]} €</p>`
    }
    for (let i= 0; i < cesta.length; i++) {
        total += cesta[i]["Precio"]*cesta[i]["Cantidad"]
    }

    res.send(`${mensaje}
    <p>Todo ello le costara ${total} €</p>`)
    cesta = []
})

app.listen(3000);

