const hbs = require('hbs');

//ponemos cada palabra en mayusculas (capitalizar)
//capitalizar-> sería variable a utilizar en .hbs

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    // arr.forEach(function callback(currentValue, index, array) {
    // tu iterador
    //}
    //arr.slice([inicio [, fin]])->Extrae DESDE UNA  posición del array.
    palabras.forEach((palabra, idx) => {
            palabras[idx] = palabra.charAt(0).toUpperCase() +
                palabra.slice(1).toLowerCase();
        })
        //juntamos el arreglo de palabras y lo separamos x un espacio
    return palabras.join(' ');

});

//helpers->sustityen valores en los ficheros .hbs
//getAnio-> sería variable a utilizar en .hbs
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});