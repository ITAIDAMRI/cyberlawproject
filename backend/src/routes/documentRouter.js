const express = require("express");
const sharedMiddleware = require("../middleware/sharedMiddleware");
const documentMiddleware = require("../middleware/documentMiddleware");

const documentRouter = express.Router();

documentRouter.post(
    "/",
    sharedMiddleware.logRequest,
    [sharedMiddleware.checkAuth],
    documentMiddleware.createDocument, // Update this middleware to handle finalDate
    sharedMiddleware.logResponse
);

documentRouter.get(
    "/",
    sharedMiddleware.logRequest,
    [sharedMiddleware.checkAuth, documentMiddleware.fetchDocumentList],
    sharedMiddleware.logResponse
);

module.exports = documentRouter;