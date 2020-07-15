const Product = require('../models/product');

// show list of products
const products = (req, res, next) => {
	Product.find({})
		.then((resp) => res.json({ resp }))
		.catch((err) => res.json({ msg: `an error occured: ${err}` }));
};

const productbyid = (req, res, next) => {
	let id = req.body.id;
	Product.findById({ id })
		.then((resp) => res.json(resp))
		.catch((err) => res.json({ msg: `an error occured: ${err}` }));
};

const addproduct = (req, res, next) => {
	let product = new Product({
		productname: req.body.name,
		productprice: req.body.price,
	});
	if (req.file) {
		product.avatar = req.file.path;
	}

	product
		.save()
		.then((product) => res.json({ product }))
		.catch((err) => res.json({ msg: `an error occured: ${err}` }));
};

const updateproduct = (req, res, next) => {
	let id = req.body.id;
	let updatedData = {
		productname: req.body.name,
		productprice: req.body.price,
	};
	Product.findByIdAndUpdate(id, { $set: updatedData })
		.then(() => res.json('product updated succesfully'))
		.catch((err) => res.json({ msg: `an error occured: ${err}` }));
};

const deleteproduct = (req, res, next) => {
	let id = req.body.id;
	Product.findByIdAndRemove(id)
		.then(() => res.json({ msg: 'record of product deleted successfully' }))
		.catch((err) => res.json({ msg: `an error occured: ${err}` }));
};

module.exports = {
	products,
	productbyid,
	deleteproduct,
	updateproduct,
	addproduct,
};
