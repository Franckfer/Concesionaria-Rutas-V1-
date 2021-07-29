let db = require('../data/dataBase');
const { sucursal } = require('./sucursalesController');
//requerimos la base de datos del JSON parseado para poder trabajar con ella




//exportamos un objeto en el cual se guardan los metodos, en este caso llamado index
// que van a gestionar(manejar) las funciones que querramos crear en la misma
module.exports = {
    index: (req, res) => {
        res.set({ 'content-type': 'text/plain;charset=utf-8' })
        //Seteo la codificacion del texto

        let marcas = []
        //guardamos en la variable un array vacio
        //en el que vamos a usarlo para guardar las marcas

        db.forEach(sucursal => {
            sucursal.autos.forEach(auto => {
                marcas.push(auto.marca)
                //usamos el metodo push que guarda un nuevo elemento al final del array
                //en la variable marcas
            })
        });
        let arrayFiltrado = marcas.filter((auto, index, array) => array.indexOf(auto) == index)
        //capturamos y filtramos las marcas para que no se repitan

        res.write(`
        Nuestras Marcas: 

        _______________

        `)

        //del array filtrado recorremos la marca y la mostramos por el navegador
        arrayFiltrado.forEach(marca => {
            res.write(`
        ${letraMayus(marca)}
            `)
        })
        res.end()
    },

    //listamos todas las marcas de los autos
    marca: (req, res) => {
        res.set({ 'content-type': 'text/plain;charset=utf-8' })

        let marcaParams = req.params.marca.trim();//metodo trim para quitar los espacios
        //capturamos la marca por parametro 

        let filtradosPorMarca = [];
        //guardamos en la variable un array vacio
        //en el que vamos a usarlo para guardar los autos filtrados por marca

        db.forEach(sucursal => {
            sucursal.autos.forEach(auto => {
                if (auto.marca.toLowerCase() === marcaParams.toLowerCase()) {
                    filtradosPorMarca.push(auto)
                    //usamos el metodo push que guarda un nuevo elemento al final del array
                    //en la variable. si la marca del auto es igual a la marca que le pasamos como parametro
                    //pusheamos el auto en la variable filtradosPorMarca, ya que el auto guarda los datos:
                    //marca, modelo, año 

                }
            })
        })
        //listamos todos los autos con la marca que pasemos como parametro en el buscador
        res.write(`
        Datos de los autos por marca: 
        
        _____________________________
        
        `)
        filtradosPorMarca.forEach(auto => {
            res.write(`
        Marca: ${letraMayus(auto.marca)}
        Modelo: ${letraMayus(auto.modelo)}
        Año: ${auto.anio}
        `)
        })
        res.end()
       
    }
}