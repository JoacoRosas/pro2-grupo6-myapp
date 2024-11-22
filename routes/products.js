var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController')

/* GET home page. */
router.get('/detalle/:id', productController.detalle);

router.get('/register', productController.showFormCreate);

router.post('/register', productController.saveFormCreate);

router.get('/search', productController.search); 

router.get('/update/:idProducto', productController.showUpdate);

router.post('/update', productController.saveUpdate);

module.exports = router;