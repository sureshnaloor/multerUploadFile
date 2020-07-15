const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');
const upload = require('../middleware/upload');

router.get('/', productController.products);
router.get('/productbyid', productController.productbyid);
router.post(
	'/addproduct',
	upload.single('avatar'),
	productController.addproduct
);
router.post('/updateproduct', productController.updateproduct);
router.post('/deleteproduct', productController.deleteproduct);

module.exports = router;
