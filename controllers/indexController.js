//acordarse de requerir el db cuando vincule la base de datos

module.exports = {
    index: function(req, res, next) {
        res.render('index', { title: 'Express' });
      }
}