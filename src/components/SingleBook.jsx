import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Component } from "react";
import fantasy from "../Assets/fantasy.json";

class SingleBook extends Component {
  render() {
    return (
      <Col xs={4} md={4} className="text-center">
        {fantasy.map((book) => (
          <Card style={{ width: "18rem" }} key={book.id}>
            <img
              className="d-block w-100 ratio"
              src={book.img}
              alt={book.title}
            />
            <Card.Body className="caption">
              <div>
                <div className="card text-dark">
                  <h3 className="text-truncate">{book.title}</h3>
                  <p>{book.price}$</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Col>
    );
  }
}

export default SingleBook;
