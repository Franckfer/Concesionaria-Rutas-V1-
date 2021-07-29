// Dentro del IDE, creamos nuestro punto de acceso, es decir, el archivo app.js. En el mismo
// indicaremos que utilizaremos Express con la siguiente línea:
let express = require('express');
// Como require(express) nos retorna una función, debemos invocarla en la siguiente linea:
let app = express();
// Ahora, en la variable app, vamos a tener disponible todos los métodos del framework.




/* Enrutadores */

//creamos las variables donde vamos a guardar las rutas requeridas
let autosRouter = require('./routes/autos');
let homeRouter = require('./routes/home');
let marcasRouter = require('./routes/marcas');
let sucursalesRouter = require('./routes/sucursales');

/* Rutas */

// establecemos las rutas base de la aplicacion donde le indicamos como 
// primer parametro la ruta que queremos escuchar(listen) en nuestro servidor,
// y como segundo parametro pasamos la variable que guarda y gestiona a nuestro enrutador
app.use('/', homeRouter);
app.use('/sucursales', sucursalesRouter);
app.use('/marcas', marcasRouter);
app.use('/autos', autosRouter);


app.listen(3000, () => { console.log("Servidor levantado")})
// Levantamos un servidor en el puerto 3000 y mostramos por consola un mensaje indicando que el servidor esta en funcionamiento