var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController')

/* GET home page. */
router.get('/detalle/:id', productController.detalle);

router.get('/register', productController.showFormCreate);

//router.post('/register', productController.saveFormCreate); lo ponemos bien cuando hagamos esto (mientras lo dejamos asi)

router.get('/search', productController.search); 

module.exports = router;