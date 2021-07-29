let fs = require('fs');
//requerimos el modulo file system para poder utilizar sus funciones

let dbParseado = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))
//guardamos en la varible un objeto JSON y usamos el metodo (parse) para 
//poder transformar el texto a un formato equivalente a JS,
//del modulo file system usamos el metodo (readFileSync)
//en el cual le pasamos como parametro la ruta en donde se encuentra el archivo
//que queremos leer

module.exports = dbParseado;
//exportamos el JSON parseado para poder utilizar su contenido 