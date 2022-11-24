import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentList extends Component {
  render() {
    return (
      //replace fields with the object receive as a prop from 'CommentArea.jsx'
      <div className="all-comments">
        <ListGroup>
          <ListGroup.Item>{this.props.comments.comment}</ListGroup.Item>
          <ListGroup.Item>Rate: {this.props.comments.rate} / 5</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default CommentList;
