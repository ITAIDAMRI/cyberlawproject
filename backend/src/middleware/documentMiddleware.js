const DocumentService = require("../services/DocumentService");

const documentMiddleware = {
	createDocument: async (req, res, next) => {
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
	},

	fetchDocumentList: async (req, res, next) => {
		try {
			const result = await DocumentService.fetchDocumentList(req, res);
			console.log("result", result);
			if (result.success) {
				res = {
					status: 200,
					json: result.data,
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
	},
};

module.exports = documentMiddleware;
