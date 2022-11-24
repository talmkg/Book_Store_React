import { Component } from "react";
import { Card, Badge } from "react-bootstrap";
import CommentArea from "../components/CommentArea.jsx";
class SingleBook extends Component {
  state = {
    clicked: false,
  };
  changeStatus = (e) => {
    if (this.state.clicked === false) {
      this.setState({ clicked: true });
      // console.log(this.props.books.asin);
    } else {
      this.setState({ clicked: false });
    }
  };
  render() {
    return (
      <>
        <Card
          id="custom_background"
          style={{
            border: this.state.selectedHorror ? "3px solid violet" : "",
          }}
          key={this.props.books.asin}
        >
          <Card.Img
            variant="top"
            className="ratio p-1"
            src={this.props.books.img}
            onClick={this.changeStatus}
          />
          <Card.Body>
            <Card.Title className="text-truncate">
              {this.props.books.title}
            </Card.Title>
            <Card.Text>
              <div id="popup">
                {this.state.clicked && (
                  <CommentArea bookID={this.props.books.asin} />
                )}
              </div>
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Badge variant="success p-2" class="badge">
                Buy only for {this.props.books.price}$
              </Badge>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
