const express = require('express');

const router = express.Router();
const Product = require('../models/product');

// for uploading form multipart formbody
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/test', (req, res) => {
	res.status(200).json({ msg: 'inside product root route' });
});

router.post('/', upload.single(), (req, res) => {
	console.log('file', req.file);
	console.log('files', req.files);
	console.log('body', req.body);
	const product = new Product({
		productname: req.body.name,
		productprice: req.body.price,
	});
	product
		.save()
		.then((resp) => res.send(resp))
		.catch((err) => console.log(err));
});

router.get('/', (req, res) => {
	Product.find({})
		.then((resp) => res.json(resp))
		.catch((err) => console.log(err));
});

module.exports = router;
