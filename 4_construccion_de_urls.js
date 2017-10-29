var express = require("express");
var app = express();

app.listen(3000);
console.log("Server lanzado...");

/**
 * Hasta ahora hemos estado usando rutas estaticas, pero obviamente nosotros
 * queremos poder usar rutas dinamicas, para poder transportar en estas informacion
 * para ello, podemos hacerlo de la siguiente manera: /path/:id esto hara que se
 * cree una variable id, que contendra como valor lo que sea que almacene :id en la url
 * por ejemplo, si en la url ponemos localhost:3000/path/123, esto hara que el parametro
 * id en la peticion valga 123
 */
app.get("/:id", (req, res) => {
    res.send("el valor de id es: " + req.params.id);
});

/**
 * de esta manera podemos recibir tanto valores distintos como queramos en la url
 */
app.get("/:id/:name", (req, res) => {
    res.send("id: " + req.params.id + " con nombre: " + req.params.name);
});
/**
 * Asi mismo, si solo pasamos 1 parametro, se activara el primer app.get(), pero si pasamos 2 parametros, se activara el segundo
 * si queremos que se ejecute un determinado codigo, cuando no se pase ningun parametro, debemos definirlo por separado con path "/"
 */
/**
 * Tambien se puede usar expresiones regulares, si queremos restringir los valores que tome cierto parametro.
 * Lo siguiente indica que el id debe ser de 5 digitos de longitud y numerico
 * Notese que esto no sobreescribe la ruta /:id, esto es por que son rutas distintas, si introducimos una ruta que no encaja con la
 * definicion, obtendremos un cannot get <la ruta de peticion>, esto es algo a tener muy en cuenta.
 * Notese, que a esta ruta nunca accedemos, esto es porque, a la hora de acceder a una ruta, se busca en orden, y la primera ruta
 * que cumple con el formato, es a la que se accede, como antes de esta se a declarado /:id, a esta nunca se accedera, por ello,
 * la declaracion de rutas debe ir de mas especifica, a mas generica, y nunca al reves.
 */
app.get('/:id([0-9]{5})', (req, res) => {
    res.send("el id numerico que has introducido, es: " + req.params.id);
});
/**
 * Para evitar que nos muestre un error, hay una ruta maestra, a la cual se accedera, si la ruta no esta declarada anteriormente
 * Como express, guarda las rutas en orden, esta ruta maestra debe estar al final, de lo contrario, las rutas que se declaren
 * despues de esta, no se tendran en cuenta, debido a que se llamara a la ruta maestra.
 */
app.get("*", (req, res) => {
    res.send("la url que has intentado acceder, no es valida. En este caso la ruta maestra, solo hace la funcion de try catch");
});