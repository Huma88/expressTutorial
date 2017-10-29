var express = require("express");
var app = express();
/** definir rutas como vimos en el tema 2, es muy tedioso, para separar las rutas, de nuestro codigo principal, usaremos
 * enrutadores, express, ya trae el suyo propio, que sera el que usemos, el cual es Express.Router, para implementarlo
 * crearemos otro archivo donde requeriremos su uso, y declararemos las rutas [CONTINUAR EN enrrutador.js LINEA 1]
 */
var things = require("./things.js"); //ambos archivos deben estar en la misma carpeta, en caso contario, la ruta debe señalar al archivo
var archivoEjemplo2 = require("./archivoEjemplo2.js");

app.listen(3000);
console.log("Server lanzado...");

app.use("/things", things);
app.use("/archivoEjemplo2", archivoEjemplo2);
/**
 * con esto, lo que hacemos es, redirigir todo el trafico de localhost:3000/things al archivo things, tratando alli cada una de
 * sus rutas, con lo que la ruta / de ese archivo, en realidad es /things/, si hubiese en ese archivo, una ruta a /path, seria
 * /things/path, esto nos permite, crear de forma muy controlable y sostenible, arboles de rutas, sin tener que tenerlas todas
 * en un mismo archivo, que seria todo un caos encontrarse rutas ruta1/ruta2/ruta3,...... asi mismo, podemos hacer app.use, de
 * tantos archivos como queramos.
 */
/**
 * [CONTINUAR EN archivoEjemplo2.js LINEA 1]
 */



