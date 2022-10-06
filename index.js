/*const op=require('./ejercicio1');
console.log(op)

var option = 2;
switch(option){
    case 1:
        op.suma(28, 1);
        break;
    case 2:
        op.resta(30, 1);
        break;
    case 3:
        op.mult(2, 4);
        break;
    case 4:
        op.divide(25,5);
        break;
    case 5:
        op.potencia(2, 3);
        break;
    case 6:
        op.radica(9, 2);
        break;
}*/

//1. Requerir modulo http
const http=require('http')
//Función callback para manejar el servidor
function handleServer(req, res){
    res.writeHead(404,{"Content-type":'text-html'})
    res.write('<h1>esta es la respuesta del servidor :D</h1>')
    res.end();
}

//2. Crear el server
const server=http.createServer(handleServer).listen(5000)