const { logRequest, logResponse } = require("../utils/logger");
const { verifyToken } = require("../utils/tokenService");

const checkAuth = async (req, res, next) => {
	next(); // for development
	try {
		// if (!verifyToken(req))
		// 	return res.status(401).json({ message: "Unauthorized" });
		next();
	} catch (err) {
		next(err, req, res);
	}
};

const logRequestMiddleware = async (req, res, next) => {
	logRequest(req, res);
	next();
};

const logResponseMiddleware = async (req, res, next) => {
	logResponse(req, res);
	next();
};

module.exports = { checkAuth, logRequestMiddleware, logResponseMiddleware };
