import { Card, Col, Row } from "react-bootstrap";
import { Component } from "react";
import fantasy from "../Assets/fantasy.json";
import { Badge } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

class SingleBook extends Component {
  state = {
    searchQuery: "",
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
        <Row className="row" xs={1} md={3}>
          {fantasy
            .filter((book) =>
              book.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((book) => (
              <Col className="mb-3 mt-2">
                <Card key={book.asin}>
                  <Card.Img variant="top" className="ratio" src={book.img} />
                  <Card.Body>
                    <Card.Title className="text-truncate">
                      {book.title}
                    </Card.Title>

                    <div className="d-flex justify-content-center">
                      <Badge variant="success p-2">
                        Buy only for {book.price}$
                      </Badge>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default SingleBook;
