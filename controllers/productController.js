//acordarse de requerir el db cuando vincule la base de datos
const db = require("../database/models")

module.exports = {
    detalle: function (req, res) { //detalle de un solo producto
        let idAgarrado = req.params.id;
        let filtro = {
            include: [{association: "user"}]
        }

        db.Product.findByPk(idAgarrado, filtro)
        .then(function(results) {
            //return res.send(results)
            return res.render('product', {producto: results})
        })
        .catch(function(error) {
            console.log(error);
        })
        
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

