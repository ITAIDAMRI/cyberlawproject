const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
// import usersRouter from "./routes/userRouter.js";
// import documentRouter from "./routes/documentRouter";
const dotenv = require("dotenv");
const { connectDB } = require("./dbConnection/mongoDBConneciton.js");
const app = express();
const documentRouter = require("./routes/documentRouter");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
dotenv.config();

connectDB();

// app.use("/users", usersRouter);
app.use("/documents", documentRouter);

app.use((err, req, res, next) => {
	console.log(`[ERROR ON REQUEST]\t`, err);
	let message = "Internal Server Error";
	let statusCode = 404;
	if (err.errors && err.errors[0]) {
		message = err.errors[0].msg;
		statusCode = 400;
	} else if (err[0]) {
		message = err[0].msg;
		statusCode = 400;
	} else if (err.message) {
		message = err.message;
		statusCode = 400;
	} else {
		message = err;
		statusCode = 400;
	}
	res.status(statusCode).json({ message });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
