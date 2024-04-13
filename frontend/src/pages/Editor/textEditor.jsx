import React, { useRef, useEffect, useState, useContext } from "react";
import { Card, Container, Button, Dropdown, Alert } from "react-bootstrap";
import {
	Toolbar,
	Inject,
	WordExport,
	DocumentEditorContainerComponent,
} from "@syncfusion/ej2-react-documenteditor";
import {
	PdfPageSettings,
	PdfDocument,
	PdfPageOrientation,
	PdfBitmap,
	SizeF,
} from "@syncfusion/ej2-pdf-export";
import { MainContext } from "../../context/mainContext";
import { createDocument } from "../../api/documents";
import "./editorStyle.css";
import constants from "../../util/constants";

const TextEditor = ({ refresh, document }) => {
	useEffect(() => {
		if (document) console.log("document", document.priority);
	}, [document]);

	const [DocsList, setDocsList] = useState([]);
	const [selectedDocument, setSelectedDocument] = useState("");
	const [titleInput, setTitleInput] = useState("");
	const [finalDateInput, setFinalDateInput] = useState("");
	const [error, setError] = useState("");
	const [priority, setPriority] = useState(0);

	const documentTitleInput = useRef(null);
	const documentFinalDateInput = useRef(null);
	const { user } = useContext(MainContext);

	const editorStyle = {
		width: "100%",
		height: "95%",
	};

	useEffect(() => {
		if (document) setPriority(document.priority);
	}, [document]);

	const documentContainerRef = useRef(null);

	const pdfConverter = async (objRef) => {
		const obj = objRef.current.documentEditor;
		if (!obj) {
			throw new Error("Ref object is not initialized");
		}
		let pdfdocument = new PdfDocument();
		let count = obj.pageCount;
		obj.documentEditorSettings.printDevicePixelRatio = 2;
		for (let i = 1; i <= count; i++) {
			await new Promise((resolve, reject) => {
				let format = "image/jpeg";
				let image = obj.exportAsImage(i, format);
				image.onload = function () {
					let imageHeight = parseInt(
						image.style.height.toString().replace("px", "")
					);
					let imageWidth = parseInt(
						image.style.width.toString().replace("px", "")
					);
					let section = pdfdocument.sections.add();
					let settings = new PdfPageSettings(0);
					if (imageWidth > imageHeight) {
						settings.orientation = PdfPageOrientation.Landscape;
					}
					settings.size = new SizeF(imageWidth, imageHeight);
					section.setPageSettings(settings);
					let page = section.pages.add();
					let graphics = page.graphics;
					let imageStr = image.src.replace("data:image/jpeg;base64,", "");
					let pdfImage = new PdfBitmap(imageStr);
					graphics.drawImage(pdfImage, 0, 0, imageWidth, imageHeight);
					resolve();
				};
				image.onerror = function (error) {
					reject(error);
				};
			});
		}
		pdfdocument.save(
			(obj.documentName === "" ? "sample" : obj.documentName) + ".pdf"
		);
	};
	const saveAsDocx = async () => {
		try {
			pdfConverter(documentContainerRef);
		} catch (error) {
			console.error("Error saving document:", error);
		}
	};

	const handleCreateDocument = async () => {
		const documentData =
			documentContainerRef.current.documentEditor.serialize();
		const documentTitle = documentTitleInput.current.value || "UNTITLED";
		const documentFinalDate = finalDateInput; // Get final date from state
		const result = await createDocument(
			documentTitle,
			documentData,
			user,
			documentFinalDate,
			priority
		);
		if (result.status === 200) refresh();
	};

	useEffect(() => {
		if (document) {
			if (documentTitleInput.current) {
				documentTitleInput.current.value = document.title;
			}
			if (documentFinalDateInput.current) {
				documentFinalDateInput.current.value = document.finalDate;
			}
			documentContainerRef.current.documentEditor.open(document.text);
		}
	}, [document]);
	const fetchDocument = async () => {
		if (!selectedDocument) {
			console.error("No document selected");
			setError("No document selected");
			return;
		} else setError(null);

		try {
			const response = await fetch(
				"http://localhost:5000/documents/api/fetchDocument",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ title: selectedDocument }), // Send selected document title
				}
			);
			if (response.ok) {
				const document = await response.json();
				documentContainerRef.current.documentEditor.open(document.text); // Set the text in the editor
				console.log("Document fetched successfully!");
			} else {
				console.error("Failed to fetch document:", response.statusText);
			}
		} catch (error) {
			console.error("Error fetching document:", error);
		}
	};

	// const handleTitleChange = (event) => {
	//   setTitleInput(event.target.value);
	// };

	return (
		<div className="mainEditorContainer">
			<div className="editorToolbar">
				<div className="editorTitleContainer">
					<h3 className="text-light">Document Title:</h3>
					<input
						type="text"
						placeholder="Enter title"
						ref={documentTitleInput}
					/>
				</div>

				<Button className="bg-dark" onClick={handleCreateDocument}>
					Save to Database
				</Button>
				<Button
					className="bg-dark"
					onClick={saveAsDocx}
					style={{ marginRight: "10px" }}
				>
					Save as PDF
				</Button>
			</div>
			<div className="documentParametersContainer">
				<div className="priorityContainer">
					<h3 className="text-light">Priority:</h3>
					<input
						type="range"
						min="1"
						max="3"
						value={priority}
						onChange={(e) => setPriority(e.target.value)}
					/>
					<h4 className="text-light">{constants.priority[priority]}</h4>
				</div>

				<div className="finalDateContainer">
					<h3 className="text-light">Final Date:</h3>
					<input
						type="date"
						value={finalDateInput}
						onChange={(e) => setFinalDateInput(e.target.value)}
					/>
				</div>
			</div>
			<div className="editorWindowContainer">
				<DocumentEditorContainerComponent
					height="80svh"
					width="80svw"
					ref={documentContainerRef}
				>
					<Inject services={[Toolbar, WordExport]} />
				</DocumentEditorContainerComponent>
			</div>
		</div>
	);
};

export default TextEditor;
