import { Card, Col, Row, Button } from "react-bootstrap";
import { Component } from "react";
import fantasy from "../Assets/fantasy.json";
import SingleBook from "../components/SingleBook";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
  };
  changeSelectedBook = (newBook) => {
    this.setState({ asin: newBook });
  };

  render() {
    return (
      <>
        <div>
          <>
            <InputGroup>
              <InputGroup.Text id="inputGroup-sizing-default">
                Search!
              </InputGroup.Text>
              <Form.Control
                aria-label="Search"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Search for Books"
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </InputGroup>
            <br />
          </>
        </div>
        <Col>
          <Row className="row" xs={1} md={3}>
            {fantasy
              .filter((book) =>
                book.title.toLowerCase().includes(this.state.searchQuery)
              )
              .slice(0, 3)
              .map((book) => (
                <Col className="mb-3 mt-2" key={book.asin}>
                  <SingleBook
                    changeSelectedBook={this.changeSelectedBook}
                    books={book}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col>
          <CommentArea changeSelectedBook={this.state.asin} />
        </Col>
      </>
    );
  }
}

export default BookList;
