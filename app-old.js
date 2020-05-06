//no hace falta instalar nada. viene con node
const http = require('http');

//createServer, recibe un Callback
http.createServer((req, res) => {
        //esta información va en el heaber
        res.writeHead(200, { 'Content-Type': 'application / json' });

        let salida = {
            nombre: 'fernando',
            edad: 32,
            url: req.url
        }

        //le escribimos hola mundo y le decimos q acabe (res.end())
        // res.write('hola mundo');
        res.write(JSON.stringify(salida));
        res.end()
    })
    .listen(8080);

console.log('escuchando el puerto 8080');