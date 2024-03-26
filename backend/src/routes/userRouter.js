const express = require("express");
const sharedMiddleware = require("../middleware/sharedMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/login", authMiddleware.login);

router.get(
	"/checkLoggedIn",
	// sharedMiddleware.checkAuth,
	authMiddleware.verifyLoggedIn
);

// router.post('/signup', signup);

// router.post('/login', login);

module.exports = router;
