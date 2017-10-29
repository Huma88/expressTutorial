var express = require("express");
var app = express();
/**
 * Debemos mencionar tambien, que hay middlewares de terceros, pensados para una inmensa cantidad de propositos, a continuacion dejamos 
 * una pagina en la cual se pueden encontrar: http://expressjs.com/en/resources/middleware.html
 * 
 * Ahora veremos como se implementan estos middlewares de terceros, lo haremos con 3 muy comunmente usados en aplicaciones de express:
 * body-parser: se utiliza para parsear el cuerpo de peticiones con informacion
 * cookie-parser: parsea la cabecera cookie y puebla req.cookie con un objeto cuyas claves son los nombres de las cookies
 * express-session: crea un middleware de sesion con las opciones dadas, se hablara mas de el en la seccion de secciones
 * 
 * para installar los middlewares, debemos incluirlos con npm install nombre-middleware --save para que se agreguen tambien como dependencias
 */
/**
 * Lo que debemos hacer una vez instalados, es incluirlos en el archivo
 */
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var expressSession = require("express-session");

/**
 * ahora creamos los distintos middlewares, en el github de cada uno, pueden verse todas sus opciones
 */
app.use(bodyParser.urlencoded({ extended: false })); //para parsear informacion en la url
app.use(bodyParser.json()); //para parsear informacion en formato json

app.use(cookieParser());

// express-session como hemos dicho lo veremos en el tema de sesiones