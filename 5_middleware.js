var express = require("express");
var app = express();

app.listen(3000);

/**
 * Los middleware son funciones que tienen acceso al objeto request (de peticion) y al objeto
 * response (de respuesta) y la siguiente funcion middleware en el ciclo peticion-respuesta
 * estas funciones son usadas para modificar la peticion y la respuesta, para tareas como
 * parseos de cuerpos de peticion, añadir cabeceeras en la respuesta, etc...
 * 
 */
/**
 * app.use es un metodo para configurar los middleware que usan las rutas del objeto servidor
 * http de express. El metodo es definido como parte de Connect, del cual esta basado Express
 * app.use(middleware)
 */
/**
 * la llamada de funcion next(), es muy importante, pues es lo que indica que hay mas procesos
 * como requisitos de esta peticion y estos se encuentran en el siguiente middleware
 * Este middleware en concreto se llama siempre que se haga una peticion al servidor, ya que no
 * tiene como primer parametro una ruta
 */
app.use((req, res, next) => {
    console.log("peticion recbida: " + Date.now());
    console.log("probando app.use");
    next();
})
/**
 * Podemos restringir el middleware a una ruta especifica y sus subrutas, proporcionando la ruta,
 * como primer parametro
 * Este middleware, sera lo primero que se ejecutara con motivo de la peticion, para indicar que se
 * seguiran ejecutando cosas, y que no se pare aqui, indicamos el next(), de lo contrario,
 * nunca se ejecutara la funcion app.get, por que ya se a ejecutado una funcion con motivo de la 
 * peticion, y por ende, el cliente, esperara por tiempo indefinido una respuesta, que esta funcion
 * no envia, dejando conlgado.
 * En este caso, la siguiente funcion al middleware, es el manejador de la ruta (route handler), que
 * se encarga de devolver la respuesta para esa ruta concreta y ese metodo de http
 */
app.use("/path", (req, res, next) => {
    console.log("ahora esto se ejecutara siempre que se llame a la ruta /path o un derivado suyo");
    next();
});

app.get("/path", (req, res) => {
    res.send("Ahora si que devolvemos un valor, y por ende, ya no necesitamos hacer una llamada a next, pues este es la funcion de respuesta");
});

/**
 * Cuando trabajamos con middlewares debemos tener en cuenta el orden en el que se incluyen, y dado que la ruta tambien coincide, esta tambien
 * debe de ser tomada en cuenta.
 * En el siguiente ejemplo, veremos en que orden se ejecutan las funciones, y como un manejador de ruta, tambien puede hacer la funcion de
 * middleware, es decir, que se puede seguir ejecutando mas codigo tras el envio de la respuesta al cliente.
 * Esta primera funcion hara de dispatcher, y en funcion de la ruta y el metodo http, con el que se halla accedido a el, se ejecutara el arbol
 * de procesos correspondiente
 */
app.use((req, res, next) => {
    console.log("funcion ejecutada antes de devolver los datos");
    next(); //no debemos olvidar el next(); si estamos hablando de un middleware
});
/**
 * como vemos el ambito de app.use y el de la siguiente funcion, no tiene por que coincidir, app.use, afecta en este caso a todas las peticiones
 * sin embargo el app.get solo actua ante las peticiones en "/"
 */
app.get("/", (req, res, next) => {
    res.send("Aqui devolvemos la respuesta al cliente, pero esta funcion es un middleware");
    next();
});
/**
 * Ahora esta funcion, responde tambien ante la ruta "/" ya que es una funcion "derivada" del app.get anterior, esto nos permite crear arboles
 * de middleware de una complejidad relevante
 */
app.use("/", (req, res) => {
    console.log("funcion final, que se ejecuta tras haber enviado la respuesta al cliente");
});

/**
 * Por lo tanto podemos concluir que el flujo de ejecucion es el siguiente
 * 
 * REQUEST -> multiples middlewares(opcional) -> Route handler(donde la respuesta se envia) -> multiples middlewares(opcional) ->
 * -> RESPONSE tras haber ejecutado los middlewares
 */