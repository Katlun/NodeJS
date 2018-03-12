/**
* Pequena aplicação criada com nodejs sem a necessidade framework
*/
var http = require('http');

var server = http.createServer(function(req,res){

	var categoria = req.url;

	if (categoria == '/tecnologia') {
		res.end("<html><body>Noticias de Tecnologias.</body></html>");
	}else if(categoria == '/moda'){
		res.end("<html><body>Noticias de Moda.</body></html>");
	}else if(categoria == '/beleza'){
		res.end("<html><body>Noticias de beleza.</body></html>");
	}
		res.end("<html><body>Portal de Noticias.</body><html>");
}).listen(3000);