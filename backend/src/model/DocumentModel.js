const mongoose = require("mongoose");
const Template = require("./TemplateModel");

const DocumentModel = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: String, required: true },
    template: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
    finalDate: { type: Date, required: true } // New field for final date
});

exports.DocumentModel = mongoose.model("Document", DocumentModel);