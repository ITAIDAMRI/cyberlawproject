const logRequest = (req, message, next) => {
	// console.log(
	// 	`[${req.method}] ${req.path}\n\tbody:\t${req.body}\n\tquery:\t${req.query}`
	// );
	// if (message) console.log("[MESSAGE]\n\t", message);
};

const logResponse = (res) => {
	if (res.status) console.log("[RESPONSE]\n\t", res.status);
};

const logDBAction = (message) => {
	console.log("message", message);
};

module.exports = { logRequest, logDBAction, logResponse };
