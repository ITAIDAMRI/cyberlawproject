const mongoose = require("mongoose");
const DocumentModel = require("../model/DocumentModel");
const TemplateModel = require("../model/TemplateModel");

const connectDB = async () => {
	mongoose
		.connect(process.env.MONGO_URL)
		.then((res) => {
			console.log("[DATABASE]\tDATABASE CONNECTED");
			console.log("[DATABASE]\t", res.models);
		})
		.catch((error) => console.log("[DATABASE]\t\tCONNECTION ERROR"));
};

module.exports = { connectDB };
