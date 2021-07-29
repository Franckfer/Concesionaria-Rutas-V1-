let express = require('express');
let router = express.Router();

let controller = require('../controllers/sucursalesController')
// requerimos al controlador de sucursales



/* GET Main sucursales */
//obtenemos el controlador principal 
router.get('/', controller.index)

/* GET Sucursal */
//obtenemos la ruta parametrizada de sucursales
router.get('/:sucursal', controller.sucursal)


module.exports = router;