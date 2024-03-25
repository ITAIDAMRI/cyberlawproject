const DocumentService = require("../services/DocumentService");

const createDocumentMiddleware = async (req, res, next) => {
	try {
		const result = await DocumentService.createDocument(req, res);
		if (result.success) {
			res = {
				status: 200,
				json: result.message,
			};
		} else {
			res = {
				status: 400,
				json: result.message,
			};
		}
		next();
	} catch (err) {
		next(err, req, res);
	}
};

module.exports = { createDocumentMiddleware };
