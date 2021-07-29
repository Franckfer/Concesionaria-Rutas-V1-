let db = require('../data/dataBase')
//requerimos la base de datos del JSON parseado para poder trabajar con ella


//exportamos un objeto en el cual se guardan los metodos en este caso llamado index
// que van a gestionar las funciones que querramos
module.exports = {
    index: (req, res) => { 
        //usamos el metodo set de (res) para Setear la codificacion del texto
        //usamos el metodo write de (res) para poder pasar un string
        //en el navagador, en este caso mostramos un texto
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write(` 
        ****************************
        Bienvenid@s a nuestra página
        ****************************
        Empresa lider en el mercado.

        ____________________________
        
        Nuestras sucursales son: 
        ____________________________
        `)
        // utilizamos el metodo de array foreach para recorrer el archivo 
        // guardado en la variable db y mostrar el texto que esta guardado 
        // en el array que le pasemos como paramtro dentro del callback
        //usamos el metodo end de (res) para finalizar y mostrar lo que pasamos en res.write
        db.forEach(sucursal => { 
        res.write(`
        ${sucursal.sucursal}
            `)
        })
        res.end()
    }
}

