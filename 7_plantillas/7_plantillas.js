var express = require("express");
var app = express();

app.listen(3000);
console.log("servidor lanzado...");
/**
 * como generador de plantillas, usaremos pug, que es un motor de plantillas para express
 * los generadores de plantillas, nos sirven para no abarrotar nuestro servidor de codigo
 * HTML con concatenaciones de cadenas.
 * 
 * Pug es un motor muy potente con muchas caracteristicas como filtros, inclusiones,
 * herencia, interpolacion, etc...
 * 
 * para usar pug, debemos instalarlo con npm install pug --save
 * 
 * Una vez instalado, no tenemos que incluirlo
 * Lo que debemos hacer es establecerlo como nuestro motor de platillas con las
 * siguientes sentencias
 */
/**
 * Entiendo, que "view engine" es una "frase reservada", que determina para express, el uso de un
 * determinado motor, y es, por asi decirlo, un link al parser de para este motor
 */
app.set("view engine","pug");
/**
 * Ahora debemos indicar la carpeta en la que estaran las vistas, que renderizara el motor
 * las vistas de pug, tienn su extension
 */
app.set("views","./views");
/**
 * Para visualizar esta vista, debemos enviar su render al cliente en la respuesta a un
 * metodo de peticion, la ruta, no necesariamente tiene porque tener su mismo nombre, ya que
 * hemos declarado antes la carpeta en la que se buscaran los archivos a renderizar, debemos
 * indicar que archivo se renderizara sin la extension
 */
app.get("/primeraVista",(req,res) => {
    res.render("vista");
})