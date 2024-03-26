const { verify } = require("jsonwebtoken");
const { data } = require("../mockData/mockUserData.js");
const tokenService = require("../utils/tokenService.js");

const authMiddleware = {
	verifyLoggedIn: async (req, res, next) => {
		return res
			.status(200)
			.json({ success: true, message: "You are logged in !" });
	},

	login: async (req, res, next) => {
		const { email, password } = req.query;
		let result = {
			success: false,
			message: "Wrong username or password",
		};

		for (let usr of data.users) {
			if (usr.email === email && usr.password === password) {
				result = {
					success: true,
					message: "You are logged in !",
					user: usr,
				};
			}
		}

		if (!result.success) {
			res.status(401).json({
				success: false,
				message: "Wrong username or password",
			});
		}

		const token = tokenService.createToken(result.user);
		result.user.token = token;
		return res.status(200).json(result);
	},
};

module.exports = authMiddleware;
