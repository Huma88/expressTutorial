var express = require("express"); // incluimos express
var app = express(); // inicializamos express
/**
 * todas las importaciones deben estar antes de declarar la escucha
 */

/** 
 * declaramos que la aplicacion escuchara el puerto 3000, 
 * aunque esta funcion puede recibir mas parametros:
 * port: que es el que usamos ahora mismo
 * host: nombre del dominio, necesario cuando se despliega la aplicacion
 * backlog: el numero maximo de conexiones pendientes en cola, por default 511
 * callback: funcion asincrona llamada cuando se lanza el servidor, escuchando peticiones
 */
app.listen(3000);
console.log("Server lanzado...");

    /**
     * app.get dice que sucedera cuando se haga uan peticion get, a una determinada ruta, 
     * y el callback, tiene la peticion, y la respuesta
     */
app.get("/", (req, res) => {
    /**
     *  en res tenemos .send con el que devolvemos algo, texto, obj, ... .sendFile, 
     * que devuelve un archivo, index.html por ejemplo, para este ejemplo sera:
     * "hola mundo".
     */
    res.send("Hola mundo");

});

/**
 * lanzamos el servidor usando node nombreArchivo.js y accedemos a el a traves de localhost:puertoDeEscucha/rutaGet 
 * (en este caso la ruta get es "/" y el puerto 3000) por lo tanto, accederemos usando localhost:3000/
 */