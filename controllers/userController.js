

module.exports = {
    register: function(req, res) {
        res.render('register'); //por ahora lo dejo asi, porque solo quiero ver como queda el ejs (dsp cuando tengamos la base de datos hacemos el findAll())
      },

    login: function(req,res){
      res.render('login');
    },

    loginUser: function(req,res){
      res.render('loginUser')
    },
    results: function(req,res){
      res.render('results')
    }
}