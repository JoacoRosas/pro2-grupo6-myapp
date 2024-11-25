const db = require('../database/models');
const bcrypt = require("bcryptjs")

module.exports = {
    register: function(req, res) {
      if (req.session.user != undefined) {
        return res.redirect('/')
      } else {
        return  res.render('register');
      }
    },

    login: function(req,res){
      if (req.session.user != undefined) {
        return res.redirect('/')
      } else {
        return res.render('login');
      }
    },

    loginUser: function(req,res){
      let form = req.body;

      let filtro = {
          where:{
              email: form.email
          }
      }

      db.User.findOne(filtro)
      .then(function(result){

          if (result != undefined) {

              let validarClave = bcrypt.compareSync( form.password , result.password);
              
              if (validarClave) {
                req.session.user = result.dataValues;
                return res.redirect("/");
              } else {
                  return res.send("Clave incorrecta");
              }

          } else {
              return res.send("No se encontro un usuario");
          }
      }).catch(function(error){
          return console.log(error);
          
      })
    },

    results: function(req,res){
      let form = req.body;

      if(form.email == ""){
        return res.send('El email no puede estar vacío')
      }
      else if (form.name == "") {
        return res.send('El username no puede estar vacío')
      }
      else if (req.body.password == "") {
        return res.send('La contraseña no puede estar vacío')
      }
      else{
        let pass = bcrypt.hashSync(form.password, 10)
        form.password = pass;
        
        db.User.create(form)
        .then(function(results) {
            return res.redirect('/users/login')
        })
        .catch(function(error) {
            console.log(error);
        })
      }
    },

    logout: function(req, res){
      req.session.destroy()
      return res.redirect("/")
    }
}