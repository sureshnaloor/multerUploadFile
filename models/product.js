const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	productname: { type: String, required: true },
	productprice: { type: Number, required: true },
	avatar: { type: String },
});

module.exports = Product = mongoose.model('product', ProductSchema);
