const createToken = (obj, duration) => {
	const token = jwt.sign(
		{
			_id: obj._id,
		},
		"secret213",
		{
			expiresIn: duration || "1000y",
		}
	);
	return token;
};

const verifyToken = (req) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		return jwt.verify(token, "secret213");
	} catch (err) {
		throw err;
	}
};

module.exports = { createToken, verifyToken };
