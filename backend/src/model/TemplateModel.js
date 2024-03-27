const mongoose = require("mongoose");
/*
    this model repesent unfilled document created by staff
    it is simillar to the document template expect it has an array of Users instead of Status's
    the signatories is used to create the array of Status for the document model
*/
const TemplateModel = new mongoose.Schema({
	title: { type: String, required: true },
	text: { type: String, required: true },
	author: { type: String, required: true },
    
});

exports.TemplateModel = mongoose.model("Template", TemplateModel);
