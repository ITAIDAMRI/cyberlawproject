const express = require("express");
const {
	checkAuth,
	logRequestMiddleware,
	logResponseMiddleware,
} = require("../middleware/sharedMiddleware");
const {
	createDocumentMiddleware,
} = require("../middleware/documentMiddleware");

const documentRouter = express.Router();

documentRouter.post("/", 
	logRequestMiddleware,
	[
		checkAuth,
	],
	createDocumentMiddleware,
	logResponseMiddleware,
);

//returns document
// router.post('/fetchDocument', documentController.fetchDocument);

// //return an array of document titles
// router.get('/fetchDocsList', documentController.fetchDocsList);

module.exports = documentRouter;
