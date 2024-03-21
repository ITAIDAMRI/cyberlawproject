import "./documentStyle.css";
import EditorPage from "../Editor/textEditor"; // Import the EditorPage component
import { Container } from "react-bootstrap";

export default function Documents() {
  return (
    <div className="documentsMainContainer">
      <div className="documentsList">
        <div className="documentItem">item 1</div>
        <div className="documentItem">item 1</div>
        <div className="documentItem">item 1</div>
        <div className="documentItem">item 1</div>
        <div className="documentItem">item 1</div>
        <div className="documentItem">item 1</div>
        <div className="documentItem">item 1</div>
      </div>
          <Container className="editorContainer">
            <EditorPage /> {/* Render the EditorPage component */}
          </Container>
    </div>
  );
}