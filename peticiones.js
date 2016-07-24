var archivo= require('./directorio');
var fs = require('fs');
var manejador={};
manejador['/']=inicio;
manejador['/servicios']=servicios;
manejador['/contacto']=contacto;

function inicio(resp){
    page= directorio("index.html");
	resp.writeHead(200,{"Content-type":"text/html"});
	resp.write(page);
	resp.end();
}

function servicios(resp){

	resp.writeHead(200,{"Content-type":"text/html"});
	resp.write("Servicios");
	resp.end();
}


function contacto(resp){

	resp.writeHead(200,{"Content-type":"text/html"});
	resp.write("Contacto");
	resp.end();
}
exports.manejador=manejador;