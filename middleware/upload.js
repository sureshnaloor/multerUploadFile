const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
		let ext = path.extname(file.originalname);
		cb(null, req.body.name + ext);
	},
});

var upload = multer({
	storage: storage,
	fileFilter: function (req, file, cb) {
		if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg') {
			cb(null, true);
		} else {
			console.log('only jpg and png type are allowed!');
			cb(null, false);
		}
	},

	limits: {
		fileSize: 1024 * 1024 * 10,
	},
});

module.exports = upload;
