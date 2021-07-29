let db = require('../data/dataBase');
//requerimos la base de datos del JSON parseado para poder trabajar con ella



//exportamos un objeto en el cual se guardan los metodos, en este caso llamado index
// que van a gestionar(manejar) las funciones que querramos crear en la misma
module.exports = {
    index : (req, res) => {
        //usamos el metodo set de (res) para Setear la codificacion del texto
        //usamos el metodo write de (res) para poder imprimir el nombre de la sucursal, el telefono
        //y la direccion, y mostrarle en el navegador
        //en el navagador, en este caso mostramos un texto
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write(`
        ****************************
        -------- SUCURSALES --------
        ****************************
        Empresa lider en el mercado.

        ____________________________
        Nuestras sucursales: 
        ____________________________
        `)
        db.forEach(element => {
            res.write(`

        ${element.sucursal} 

        Teléfono: ${element.telefono}

        Dirección: ${element.direccion}

        ___________________________________________________________________________________________________
        `)
        })
        res.end()
        //usamos el metodo end de (res) para detener el bucle del foreach y poder mostrar por consola los datos
    },
    sucursal : (req, res) => {
        //capturamos parametro de la ruta sucursal y usamos el metodo trim() para sacarle los espacios al principio
        // y final de string
        let paramsSucursal = req.params.sucursal.trim(); // Capturo el parametro de la ruta
        res.set({'content-type':'text/plain;charset=utf-8'}) //Seteo la codificacion del texto
        let sucursal = db.find(element => element.sucursal.toLowerCase() === paramsSucursal.toLowerCase())
        //Find me devuelte el objeto de la sucursal solicitada, mientras que 
        //el parametro sea igual al elemento buscado, si no lo encuentra devuelve undefined
        
        // si la sucursal es distinta a undefined devolvemos algo
        //sino devolvemos la sucursal no existe
        if(sucursal !== undefined){
            res.write(`
            ****************************
            -------- ${sucursal.sucursal.toUpperCase()} --------
            ****************************
            ____________________________

            Telefono: ${sucursal.telefono}
    
            Dirección:
            ${sucursal.direccion}

            `)
    
            res.write(`Cantidad de autos: ${sucursal.autos.length}

            _________________________________________________________________________
            Nuestros autos
            _________________________________________________________________________
            `)

            sucursal.autos.forEach(auto => {
                res.write(` 
            Marca: ${letraMayus(auto.marca)}
            Modelo: ${letraMayus(auto.modelo)}
            Año: ${auto.anio}

            __________________________________________________________________________
                `)
            })
        } else {
            res.write(` La sucursal ${req.params.sucursal} no existe`)
        }
        res.end()
        //usamos el metodo end de (res) para finalizar y mostrar lo que pasamos en res.write
    }
}