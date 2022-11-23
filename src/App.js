import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import Searchbar from "./components/searchbar";
import SingleBook from "./components/SingleBook";
import Navbar from "./components/Navbar";

import { Container } from "react-bootstrap";

function App() {
  return (
    <div classname="container-fluid" id="container-fluid">
      <div className="mt-4">
        <div className="container rounded bg-dark ">
          <div>
            <Navbar />
          </div>
          <Searchbar />
          <div>
            <WarningSign variant="danger" />
          </div>

          <div className="d-flex justify-content-center">
            <MyBadge text="Render Status: Success" bg="success" />
          </div>
          <Container>
            <SingleBook />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
