var http = require('http');
var urls  = require('url');
var fs   = require('fs');
var enrutador= require ('./enrutador');

function inicio(router,manejador){
http.createServer(function(peticion,respuesta){

   var url= urls.parse(peticion.url).pathname;
  var contenido= router(manejador,url,respuesta);
	/*respuesta.writeHead(200,{"Content-type":"text/plain"});
	respuesta.write(contenido);
	respuesta.end();*/


}).listen(2000,function(){

	console.log("Conectado al servidor en el puerto 2000");
});


}

exports.inicio=inicio;

