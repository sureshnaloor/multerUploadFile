const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(cors());
app.use(morgan('dev'));

const productRoutes = require('./routes/products');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const url = 'mongodb://localhost:127.0.0.1/imageUpload';
mongoose.connect(
	url,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log(`mongodb connected`);
	}
);

app.use('/products', productRoutes);

// app.get('/', (req, res) => {
// 	res.status(200).json({ msg: 'root route' });
// });

app.listen(7777, () => console.log('server listening at port 5555'));
