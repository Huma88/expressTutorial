var express = require("express");
var app = express();

app.listen(3000);
console.log("Server lanzado...");

//existe app.get, app.post, app.put y app.delete todos los verbs de HTTP
app.get("/path", (req, res) => { //cuando en la url, se llame a /path, es decir: localhost:3000/path, se dispara el handler, que es el callback
    res.send("Estamos accediendo a la ruta definida /path");
    //solo se manda el primer .send si intentamos mandar varios, nos dira que no se pueden modificar las cabeceras
    //res.send("como ya no hay una ruta definida a / , si intentamos acceder a ella, nos dira que no se pudo obtener un get");
});

//Podemos tener todos los metodos que queramos apuntando al mismo punto siempre y cuando sean de tipo distinto, si hay mas de un get, solo se
// usara el primero declarado
app.get("/path", (req, res) => {
    res.send("como ya no hay una ruta definida a / , si intentamos acceder a ella, nos dira que no se pudo obtener un get");
});
//via post
app.post("/path", (req, res) => {
    res.send("Esta vez accedemos al mismo punto, pero via post");
});
/**
 * hay un metodo para manejar todos los tipos de entrada a un determinado punto, usando .all
 * de nuevo, si hay ya un metodo para ese punto declarado anteriormente, se usara ese, no este
 * como apunte este metodo se usa esencialmente para crear middlewares, que se comentaran mas adelante
 */
app.all("/path", (req, res) => {
    res.send("ahora es irrelenvante que metodo http usemos");
});