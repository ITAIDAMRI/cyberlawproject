const { logRequest, logResponse } = require("../utils/logger");
const tokenService = require("../utils/tokenService");

const sharedMiddleware = {
	checkAuth: async (req, res, next) => {
		try {
			if (!tokenService.verifyToken(req))
				return res.status(401).json({ message: "Unauthorized" });
			next();
		} catch (err) {
			next(err, req, res);
		}
	},

	logRequest: async (req, res, next) => {
		logRequest(req);
		next();
	},

	logResponse: async (req, res, next) => {
		logResponse(res.status);
		return res;
	},
};

module.exports = sharedMiddleware;
