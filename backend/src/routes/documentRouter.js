const express = require("express");
const sharedMiddleware = require("../middleware/sharedMiddleware");
const documentMiddleware = require("../middleware/documentMiddleware");

const documentRouter = express.Router();

documentRouter.post(
	"/",
	sharedMiddleware.logRequest,
	[sharedMiddleware.checkAuth],
	documentMiddleware.createDocument,
	sharedMiddleware.logResponse
);

documentRouter.get(
	"/",
	sharedMiddleware.logRequest,
	[sharedMiddleware.checkAuth, documentMiddleware.fetchDocumentList],
	sharedMiddleware.logResponse
);

//returns document
// router.post('/fetchDocument', documentController.fetchDocument);

// //return an array of document titles
// router.get('/fetchDocsList', documentController.fetchDocsList);

module.exports = documentRouter;
