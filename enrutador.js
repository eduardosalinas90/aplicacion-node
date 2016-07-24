function router(manejador,url,resp){

	if(typeof manejador[url] === 'function'){

		return manejador[url](resp);
	}else {

	resp.writeHead(404,{"Content-type":"text/html"});
	resp.write("Pagina No existe Error 404");
	resp.end();
	}

}

exports.router=router;