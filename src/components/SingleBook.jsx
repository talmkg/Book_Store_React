import { Card, Col, Row } from "react-bootstrap";
import { Component } from "react";
import fantasy from "../Assets/fantasy.json";
import { Badge } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <>
        <Row className="row" xs={1} md={3}>
          {fantasy.map((book) => (
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
