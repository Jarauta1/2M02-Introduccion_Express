let almacen = require("./almacen")

let cesta = []

function addCesta(producto, cantidad, tienda) {

    let indice
    let orden2

    if (tienda == "deportes") {
        orden2 = 0
    } else if (tienda == "electronica") {
        orden2 = 1
    } else if (tienda == "hogar") {
        orden2 = 2
    } else if (tienda == "videojuegos") {
        orden2 = 3
    }

    if (producto === almacen[orden2][tienda][0].nombre) {
        indice = 0
    } else if (producto === almacen[orden2][tienda][1].nombre) {
        indice = 1
    } else if (producto === almacen[orden2][tienda][2].nombre) {
        indice = 2
    } else {
        return `<h2>No disponemos de un producto que se llame "${producto}"</h2>`
    }

    if (cantidad <= almacen[orden2][tienda][indice].stock) {
        let carga = { Producto: almacen[orden2][tienda][indice].nombre, Precio: almacen[orden2][tienda][indice].precio, Cantidad: cantidad }
        cesta.push(carga)
        return `Se ha añadido ${producto} a tu cesta. Cantidad: ${cantidad}`
    } else {
        return `<h1>No hay suficiente stock de ${producto}</h1>`
    }
}

let objeto ={ funcion: addCesta, tabla: cesta}

module.exports= objeto;