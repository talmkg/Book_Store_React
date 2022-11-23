import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import { Row } from "react-bootstrap";

function App() {
  return (
    <div className="container ">
      <WarningSign variant="danger" />
      <MyBadge text="Render Status: Success" bg="success" />
      <Row className="justify-content-center mt-3 mb-4">
        <SingleBook />
      </Row>
    </div>
  );
}

export default App;
