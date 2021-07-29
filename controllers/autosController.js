let db = require('../data/dataBase');
//requerimos la base de datos del JSON parseado para poder trabajar con ella


let autosController = {
    autos: () => {
        //creamos la funcion autos que recorre el array
        //y cuando lo invcamos nos returna los datos del auto    
        
        let autos = []
        //array vacio donde vamos a guardar los datos pusheados
        

        //en la base de datos recorremos la sucursal, de esa
        //sucursal recorremos el array de autos y de cada auto recoorido
        //usamos el metodo push para guardar los datos del auto en un array vacio
        //capturado en una variable
        db.forEach(sucursal => {
            sucursal.autos.forEach(auto => {
                autos.push(auto)
            })
        });
        return autos
        //retornamos la funcion que contiene los datos de autos
    },
    index: function(req, res) {
        res.send(autosController.autos())
        //enviamos el metodo de autosController que es una funcion
    },
    marca: (req, res) => {
        let marcaParams = req.params.marca.trim();
        //capturamos la marca por parametro y usamos trim para quitar los espacios

        let filtradosPorMarca = [];
        //array vacio donde vamos a guardar los datos pusheados

        autosController.autos().forEach(auto => {
            if(auto.marca.toLowerCase() === marcaParams.toLowerCase()){
                filtradosPorMarca.push(auto)
            //recorremos la funcion que contiene un array de objetos y pusheamos los datos que 
            //sean iguales a los datos que le pasmos por parametro en un array vacio    
            }
        })  

        res.send(filtradosPorMarca)
        

        //enviamos al navegador los autos filtrados por marca
    },
    dato: (req, res) => {
        let marcaParams = req.params.marca.trim();
        let datoParams = req.params.dato.trim();
        

        let filtradosPorMarca = [];
        //array vacio donde vamos a guardar los datos pusheados


        autosController.autos().forEach(auto => {
            if(auto.marca.toLowerCase() === marcaParams.toLowerCase()){
                filtradosPorMarca.push(auto) //tambien podemosb usar el metodo filter
            //recorremos la funcion que contiene un array de objetos y pusheamos los datos que 
            //sean iguales a los datos que le pasmos por parametro en un array vacio    
            }
        })

        let filtradosPorDato = filtradosPorMarca.filter(auto => {
            return auto.anio == datoParams || auto.color.toLowerCase() === datoParams.toLowerCase()
        })
            //usamos el metodo filter y compararamos si la propiedad anio del auto 
            //es igual al dato que le pasamos por parametro
            // o la propiedad color del auto es igual al dato que le pasamos como parametro
            //lo returnamos y lo capturamos en la variable filtradosPorDato


        //si los datos filtrados fueron encontrados los enviamos al navegador 
        //sino enviamos el mensaje :
        //No hay datos que coincidan con tu busqueda
        if(filtradosPorDato.length > 0){
            res.send(filtradosPorDato)
        }else {
            res.send("No hay datos que coincidan con tu busqueda")
        }

    }
}


module.exports = autosController