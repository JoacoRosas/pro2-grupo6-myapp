//acordarse de requerir el db cuando vincule la base de datos
const db = require("../database/models")

module.exports = {
    index: function(req, res, next) {
      let filtro = {
        order: [["created_at", "DESC"]],
        include: [{association: "user"}]
      }
    
      db.Product.findAll(filtro)
      .then(function(results){
        //return res.send(results);
        return res.render('index', {productos: results});
      })
      .catch(function(error){
        console.log(error);
        
      })

       
      }
}