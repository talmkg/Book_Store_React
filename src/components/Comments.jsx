import { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjA3ZWQ0YmUzZDAwMTU4NDVmZDciLCJpYXQiOjE2Njk2NDM3OTUsImV4cCI6MTY3MDg1MzM5NX0.w35z8QX4eV6RObZ4CZo2EOeUpCKgPGoFrF2QXotYzbo",
  },
};

class Comments extends Component {
  state = {
    comment: [],
  };

  componentDidMount = () => {
    if (this.props.asin) this.fetchCommentList(this.props.asin);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.asin && prevProps.asin !== this.props.asin) {
      this.fetchCommentList(this.props.asin);
    }
  };

  fetchCommentList = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        options
      );
      if (response.ok) {
        let data = await response.json();

        this.setState({ comment: data });
      } else {
        console.log("Network Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Container>
        <h1>Comments</h1>
        <Row>
          {this.state.comment.slice(0, 12).map((bookComment) => (
            <Col md={6} key={bookComment.comment}>
              <Card>
                <Card.Body>
                  <Card.Subtitle className="text-muted">
                    Book Rating:{bookComment.rate}
                  </Card.Subtitle>
                  <Card.Text>User Comments:{bookComment.comment}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Comments;
