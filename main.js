var http= require("./servidor");
var enrutador= require ('./enrutador');
var peticiones= require ('./peticiones');


http.inicio(enrutador.router,peticiones.manejador);