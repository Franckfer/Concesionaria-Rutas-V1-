let express = require('express');
let router = express.Router();
let controller = require('../controllers/homeController')
//requerimos el archivo homeController que guarda el metodo que queremos utilizar

router.get('/', controller.index)
//pasamos como segundo parametro el metodo que requerimos para poder utilizar la funcion que este ultimo guarda

letraMayus = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
    //Funcion flecha creada para poder pasar la primera letra de un string 
    //guardado en un JSON a mayuscula
}

module.exports = router;