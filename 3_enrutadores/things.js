var express = require("express");
var router = express.Router();

router.get("/", (req,res) => { //creamos los metodos de peticion de datos, en el enrutador
    res.send("ruta get en el archivo things.js obviamente el nombre del archivo no importa");
});

router.post("/", (req,res) => {
    res.send("ruta post en el archivo things.js obvimante el nombre del archivo no importa");
});

//Para terminar y que podamos usar el enrutador en el archivo principal, debemos exportar el enrutador, para poder importarlo con require
module.exports = router;
//[CONTINUAR EN 3enrutadores LINEA 7]