let express = require('express');
let router = express.Router();
let controller = require('../controllers/marcasController')

/* GET index marcas */
//obtenemos el controlador de marcas
router.get('/', controller.index)


/* GET Marcas */
//obtenemos la ruta parametrizada de marcas
router.get('/:marca', controller.marca)


module.exports = router;