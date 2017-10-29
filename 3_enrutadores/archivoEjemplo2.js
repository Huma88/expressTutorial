var express = require("express");
var router = express.Router();

/**
 * Si no declaramos un get para / , no podremos acceder a /archivoEjemplo2, por que no habra get para el
 * sin embargo, si que podremos acceder a /archivoEjemplo2/pepe, este es un detalle a tener en cuenta, y
 * con el que tener cuidado
 */
router.get("/pepe", (req, res) => {
    res.send("Hemos creado un arbol de rutas muy simple");
});

module.exports = router;
/**
 * para entender como funciona el module.exports, vamos a visualizarlo de la siguiente manera:
 * imaginemos que router es: var router = {} (que es lo que es).
 * Ahora lo que hacemos es, router.get y creamos ese metodo dentro, con algun nombre o algun identificador
 * interno que hace que no se sobreescriba.
 * tras ello, visualizamos del mismo modo module, es decir, var module = {}
 * y creamos dentro module. exports como module. exports = {}
 * al que añadimos la variable router, (que a su vez en un gran conjunto de metodos)
 * y gracias a algun tipo de identificador interno, sucede lo mismo que con los multiples metodos get de router,
 * no se sobreescriben, de esta manera, y gracias a la gestion de node, podemos usarlos en otros archivos usando
 * solamente el require(./nombreArchivo), que podria tambien estar en otra carpeta
 */