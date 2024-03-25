const mongoose = require("mongoose");
const Template = require("./TemplateModel");

/* 
  The is the model for the form filled by the user
  It has a a title, text(the filled document data), department(it belongs to),
  author(the user who filled it), authorizers are the status objects which represent the status
  of the signatures for the document(ie sign not signed and other data). 
*/
const DocumentModel = new mongoose.Schema({
	title: { type: String, required: true },
	text: { type: String, required: true },
	author: { type: String, required: true },
	template: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
});

exports.DocumentModel = mongoose.model("Document", DocumentModel);
