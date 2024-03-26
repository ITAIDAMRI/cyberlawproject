import React, { useRef, useEffect, useState, useContext } from "react";
import { Card, Container, Button, Dropdown, Alert} from "react-bootstrap";
import { Toolbar, Inject, WordExport, DocumentEditorContainerComponent } from '@syncfusion/ej2-react-documenteditor';
import { MainContext } from "../../context/mainContext";
import { createDocument } from "../../api/documents";
import "./editorStyle.css"

const TextEditor = ({refresh, document}) => {
  const [DocsList, setDocsList] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [error, setError] = useState('');

  const documentTitleInput = useRef(null);

  const {user} = useContext(MainContext)



  const editorStyle = {
    width: "100%",
    height: "95%"
  };

  const documentContainerRef = useRef(null);

  
  const saveAsDocx = async () => {
    if (!titleInput) {
      console.error('Title cannot be empty')
      setError('Title cannot be empty')
      return;
    } else setError(null)

    const documentData = documentContainerRef.current.documentEditor.serialize();
    try {
      const response = await fetch('http://localhost:5000/api/documents/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Data: documentData, title: titleInput }),
      });
      if (response.ok) {
        console.log('Document saved successfully!');
      } else {
        console.error('Failed to save document:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving document:', error);
    }
  };
  

  const handleCreateDocument = async () => {
    const documentData = documentContainerRef.current.documentEditor.serialize();
    const documentTitle = documentTitleInput.current.value || "UNTITLED";
    const result = await createDocument(documentTitle, documentData, user)
    if(result.status === 200) refresh()
  }

  useEffect(() => {
    if(document){
      documentContainerRef.current.documentEditor.open(document.text)
      documentTitleInput.current.value = document.title
    }
  }, [document])

  const fetchDocument = async () => {
    if (!selectedDocument) {
      console.error('No document selected')
      setError('No document selected')
      return;
    } else setError(null)

    try {
      const response = await fetch('http://localhost:5000/documents/fetchDocument', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: selectedDocument }), // Send selected document title
      });
      if (response.ok) {
        const document = await response.json();
        documentContainerRef.current.documentEditor.open(document.text); // Set the text in the editor
        console.log('Document fetched successfully!');
      } else {
        console.error('Failed to fetch document:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching document:', error);
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
        <input type="text" placeholder="Enter title" ref={documentTitleInput}/>
      </div>
        <Button className="bg-dark" onClick={handleCreateDocument} >Save to Database</Button>
        <Button className="bg-dark" onClick={saveAsDocx} style={{marginRight: '10px'}}>Save as Docx</Button>
        
      </div>
      
      <div className="editorWindowContainer">
      <DocumentEditorContainerComponent 
        height="80svh" 
        width="80svw"
        ref={documentContainerRef}>
        <Inject services={[Toolbar, WordExport]} />
      </DocumentEditorContainerComponent>
      </div>

  
    </div>
  );
};

export default TextEditor;
