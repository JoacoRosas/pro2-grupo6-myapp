//acordarse de requerir el db cuando vincule la base de datos

module.exports = {
    index: function(req, res, next) {
        res.render('index'); //por ahora lo dejo asi, porque solo quiero ver como queda el ejs (dsp cuando tengamos la base de datos hacemos el findAll())
      }
}