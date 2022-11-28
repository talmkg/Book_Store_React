import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import BookList from "./components/BookList";
import fantasy from "../src/Assets/fantasy.json";
import Navbar from "./components/Navbar";
import CommentArea from "./components/CommentArea";
import { Container } from "react-bootstrap";
import React from "react";
class App extends Component {
  state = {
    comments: [],
  };
  render() {
    return (
      <div classname="container-fluid" id="container-fluid">
        <Container>
          <div className="mt-4 mb-4">
            <div
              className="container rounded bg-dark "
              id="main"
              id="Container"
            >
              <div>
                <Navbar />
              </div>

              <div className="text-light">
                <h5 className="text-center font-italic m-4">
                  “Thanks to YummyBooks.net, there is no reason to buy books on
                  Amazon anymore.” — Inside Hook
                </h5>
                <p className=" text-center">
                  <strong>
                    YummyBooks.net works to connect readers with independent
                    booksellers all over the world.
                  </strong>
                  <br />
                  We believe local bookstores are essential community hubs that
                  foster culture, curiosity, and a love of reading, and we're
                  committed to helping them thrive. <br />
                  <br />
                  Every purchase on the site financially supports independent
                  bookstores. Our platform gives independent bookstores tools to
                  compete online and financial support to help them maintain
                  their presence in local communities.
                </p>
              </div>
              <div className="d-flex justify-content-center m-3">
                <WarningSign variant="success" />
              </div>

              <Container>
                <BookList book={fantasy} />
              </Container>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
