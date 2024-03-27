import "./documentStyle.css";
import EditorPage from "../Editor/textEditor"; // Import the EditorPage component
import { Container } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/mainContext";
import { getUserDocuments } from "../../api/documents";
import TextEditor from "../Editor/textEditor";

export default function Documents() {
  const {user} = useContext(MainContext)
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null)
  const [editor, setEditor] = useState(<></>)

  const refreshUserDocuments = async () => {
    const result = await getUserDocuments(user);
    if (result.success) {
      setDocuments(result.data);
    }
  };
  
  useEffect(() => {
    refreshUserDocuments()
  }, [])
  
 const handleChooseDocument = (document) => {
  if (document) { // Ensure document is not null
    setEditor(<TextEditor document={document} refresh={refreshUserDocuments} />);
  } else {
    console.error("Invalid document:", document);
  }
};

const handleNewDocument = () => {
  setEditor(<TextEditor refresh={refreshUserDocuments} />);
}


  


const showDocuments = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // This will return only the date portion
  };

  // Sort documents based on finalDate in ascending order
  const sortedDocuments = documents.slice().sort((a, b) => new Date(a.finalDate) - new Date(b.finalDate));

  return (
    <div className="documentsList">
      <div className="create_new" onClick={handleNewDocument}>➕ Create New</div>
      {sortedDocuments.map((document) => {
        return (
          <div className="documentItem" key={document._id} onClick={() => handleChooseDocument(document)}>
            {document.title} :  : {formatDate(document.finalDate)}
          </div>
        );
      })}
    </div>
  );
}


  return (
    <div className="documentsMainContainer">
        {showDocuments()}
          <div className="editorContainer">{editor}</div>
    </div>
  );
}