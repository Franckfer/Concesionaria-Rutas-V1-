let express = require('express'); //Requerimos express
let router = express.Router(); 
// dentro de la variable router guardamos el metodo Router de express para poder usar esa funcion
let controller = require('../controllers/autosController')
// requerimos al controlador de autosController


/* GET index autos */
//obtenemos el controlador de autos
router.get('/', controller.index)

/* GET Autos */
//obtenemos la ruta parametrizada de autos segun la marca que le pasemos
router.get('/:marca', controller.marca)

//obtenemos la ruta parametrizada de autos segun la marca que le pasemos
//pero no es obligatoria
router.get('/:marca/:dato?', controller.dato)


module.exports = router;
//exportamos el modulo para poder requerirlo en donde lo necesitemos