import "./documentStyle.css";
import EditorPage from "../Editor/textEditor"; // Import the EditorPage component
import { Container } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/mainContext";
import { getUserDocuments } from "../../api/documents";

export default function Documents() {
  const {user} = useContext(MainContext)
  const [documents, setDocuments] = useState([]);

  const refreshUserDocuments = async () => {
    const result = await getUserDocuments(user)
    if(result.success){
      setDocuments(result.data)
    }
  }

  useEffect(() => {
    refreshUserDocuments()
  }, [])

  const showDocuments = () => {
    return (
      <div>
        {documents.map((document) => (
          <div className="documentItem" key={document._id}>
            {document.title}
          </div>
        ))}
      </div>
    );
  }


  return (
    <div className="documentsMainContainer">
      <div className="documentsList">
        {showDocuments()}
      </div>
          <Container className="editorContainer">
            <EditorPage />
          </Container>
    </div>
  );
}