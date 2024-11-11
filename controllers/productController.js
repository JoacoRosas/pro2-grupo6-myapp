//acordarse de requerir el db cuando vincule la base de datos


module.exports = {
    detalle: function (req, res) { //detalle de un solo producto
        return res.render('product')
    },

    showFormCreate: function (req, res) { //mostrar el formulario para crear un producto
        return res.render('productAdd')
    }, 

    saveFormCreate: function (req, res) { //post que guarda y procesa la informacion que se relleno en el form (el de arriba)
        
    }, 

    search: function (req, res) { //resultados de busqueda del query (barra de navegacion)
        return res.render('searchResults')
    },
}

