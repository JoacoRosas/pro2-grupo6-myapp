const db = require('../database/models');
const bcrypt = require("bcryptjs")

module.exports = {
    register: function(req, res) {
      return  res.render('register'); //por ahora lo dejo asi, porque solo quiero ver como queda el ejs (dsp cuando tengamos la base de datos hacemos el findAll())
      },

    login: function(req,res){
      return res.render('login');
    },

    loginUser: function(req,res){
      let form = req.body;

      if (form.email == '') {
        return res.send('El email no puede estar vacío')
      } else if (form.password == '') {
        return res.send('El campo contraseña no puede estar vacío')
      } else {
        let filtro = {
          where: {email: form.email}
        }

        db.User.findOne(filtro)
          .then(function(results) {
              if (results != undefined) {
                  let validarClave = bcrypt.compareSync(form.password, results.password)

                  if (validarClave){
                      //hacerlo despues//req.session.user = results.dataValues; //propiedad que solo me trae los datos de la tabla que tengamos en el modelo (solo results es mucha info basura)
                      // return res.send(res.locals.user)
                      return res.redirect("/")
                  } else {
                      return res.send("Clave incorrecta")
                  }
              } else {
                  return res.send("No se encontro un usuario")
              }
          })
          .catch(function(error) {
              console.log(error);
          })
      }
    },

    results: function(req,res){
      let form = req.body;

      if(form.email == ""){
        return res.send('El email no puede estar vacío')
      }
      //falta el caso de email duplicado
      else if (form.name == "") {
        return res.send('Campo obligatorio')//aca no me dicen que valide
      }
      else if (req.body.password == "") {
        return res.send('Campo obligatorio')
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
    }
}