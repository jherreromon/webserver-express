const express = require('express');
const app = express();

const hbs = require('hbs');

//llamamos al fichero de helpers
require('./hbs/helpers');

//configuración para heroku

const port = process.env.PORT || 3000;

//usar express HBS (copiado desde la pagina "npm hbs")
//__dirname, sirve para este donde este instalado, coja la ruta global que 
//haya en el servidor de turno

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//para decirle a express q queremos visualizar un contenido fijo
//y de dominio pùblico utilizamos app.use. Si ponemos en el navegador
//localhost:3000-> se visualizara la página index.html
//si tenemos una peticion app.get, puede ocurrir que no se visualice 

app.use(express.static(__dirname + '/public'));

//realizamos una petición 'get'  siempre q pasamos una '/'
//req->solicitud
//res->respuesta

/*  app.get('/', (req, res) => {
    //res.send('hola mundo')
    let salida = {
        nombre: 'fernando',
        edad: 32,
        url: req.url
    };
    //res.send-> lo pasa a formato JSON
    res.send(salida);
}); */

//trabajamos con una solicitud xpress
//y luego renderizamos la pagina 'home.hbs'-> res.render('home')
//pasamos tb las variables q se sustituiran en home.hbs

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'juan herRerO',
        anio: new Date().getFullYear()
    });

});
//habrimos una conexion para el fichero about.hbs

app.get('/about', (req, res) => {

    res.render('about', {

        anio: new Date().getFullYear()
    })

});

/*app.get('/data', (req, res) => {


    res.send('hola Data');


}); */
// tb recibe un callback-> ese callback, 
// manda el mensaje cuando se levanta el puerto
app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});