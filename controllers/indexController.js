//acordarse de requerir el db cuando vincule la base de datos
const db = require("../database/models")

module.exports = {
    index: function(req, res, next) {
      db.Product.findAll()
      .then(function(results){
        res.send (results)
      })
      .catch(function(error){
        console.log(error);
        
      })

       // res.render('index'); //por ahora lo dejo asi, porque solo quiero ver como queda el ejs (dsp cuando tengamos la base de datos hacemos el findAll())
      }
}