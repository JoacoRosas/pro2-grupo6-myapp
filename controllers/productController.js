//acordarse de requerir el db cuando vincule la base de datos
const db = require("../database/models")
const op = db.Sequelize.Op;

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
        if (req.session.user == undefined) {
            return res.redirect('/')
        } else {
            return res.render('productAdd')
        }
    }, 

    saveFormCreate: function (req, res) { //post que guarda y procesa la informacion que se relleno en el form (el de arriba)
        let form = req.body;

        if (form.name == '') {
            res.send("El nombre del producto no puede estar vacio")
        } else if (form.image == '') {
            res.send("La imagen no puede estar vacia")
        } else if (form.description == '') {
            res.send('La descripción no puede estar vacia')
        } else {
            db.Product.create(form)
            .then(function(results) {
                return res.redirect('/')
            })
            .catch(function(error) {
                console.log(error);
            })
        }

    }, 

    search: function (req, res) { //resultados de busqueda del query (barra de navegacion)
        let qs = req.query.search;

        let filtro = {
            where : [{name:{
                [op.like] : `%${qs}%`
            }}],
            order: [["created_at", "DESC"]],
            include: [{association: "user"}]
        }

        db.Product.findAll(filtro)
        .then(function(results) {
            //return res.send(results)
            return res.render('searchResults', {productos: results})
        })
        .catch(function(error) {
            console.log(error);
        }) 
    },

    showUpdate: function(req, res) { //get que muestra el formulario para poder editarlo
        if (req.session.user == undefined) { //si no tene cuenta, te redirige a la pagina home
            return res.redirect('/')
        } else {
            let idProducto = req.params.idProducto;

            db.Product.findByPk(idProducto)
                .then(function(results) {
                    if (req.session.user.id == results.user_id) { //si tenes cuenta, pero queres editar un producto que vos no creaste, te deja donde estas (pagina de detalle)
                        return res.render('updateProduct', {producto: results})
                    } else {
                        return res.redirect(`/products/detalle/${idProducto}`)
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        }
    },

    saveUpdate: function(req, res) { //post que procesa la informacion y actualiza el producto
        let form = req.body;

        let filtro = {
            where: {id: form.id}
        }

        if (form.name == '') {
            res.send("El nombre del producto no puede estar vacio")
        } else if (form.image == '') {
            res.send("La imagen no puede estar vacia")
        } else if (form.description == '') {
            res.send('La descripción no puede estar vacia')
        } else {
            db.Product.update(form, filtro)
                .then(function(results) {
                    return res.redirect(`/products/detalle/${form.id}`)
                })
                .catch(function(error) {
                    console.log(error);
                })
        }
    }
}

