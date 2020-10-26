let almacen = require("./almacen")

function mostrarProductos(tienda) {
    if (tienda == "deportes") {
        orden = 0
    } else if (tienda == "electronica") {
        orden = 1
    } else if (tienda == "hogar") {
        orden = 2
    } else if (tienda == "videojuegos") {
        orden = 3
    }
    return `<table>
    <tr>
    <th>Nombre</th>
    <th>Precio</th>
    <th>Stock</th>
    </tr>
    <tr>
    <td>${almacen[orden][tienda][0].nombre}</td>
    <td>${almacen[orden][tienda][0].precio}</td>
    <td>${almacen[orden][tienda][0].stock}</td>
    </tr>
    <tr>
    <td>${almacen[orden][tienda][1].nombre}</td>
    <td>${almacen[orden][tienda][1].precio}</td>
    <td>${almacen[orden][tienda][1].stock}</td>
    </tr>
    <tr>
    <td>${almacen[orden][tienda][2].nombre}</td>
    <td>${almacen[orden][tienda][2].precio}</td>
    <td>${almacen[orden][tienda][2].stock}</td>
    </tr>
    `;
}

module.exports = mostrarProductos;