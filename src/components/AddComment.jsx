import { Component } from "react";
import { Form, Container } from "react-bootstrap";

class AddComment extends Component {
  //initial state object to keep the data memory that we want to send(data = comments)
  state = {
    users: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

  //Function trigged by the 'Add comment' button.
  //It sends the comment to the API object(POST method)

  sendCommentHandler = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify(this.state.users),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlMTgyY2Y4MGYxYTAwMTVkOGEwMmMiLCJpYXQiOjE2NjkyOTY0OTcsImV4cCI6MTY3MDUwNjA5N30.sMiBu2CBbQ4FbAQFIAiKtIgcpySWP-Yt65fPmgJS4vI",
      },
    };

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        options
      );

      if (response.ok) {
        alert("Comment Sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //function that make the typing in fields possible,
  //it connects the state objects  we created above (users) to the inputs fields in the DOM
  //the 'value' is the e.target.value, (the actual comments from the inputs), and 'name' is the key value from the users object(comment, rate)

  onChangeHandler = (value, name) => {
    this.setState({
      users: {
        ...this.state.users, //since we update our state as we type,
        //we need to keep the other sections of the object unchanged, rate and elementId in this case.
        //Only [name]:value will be the only one to be overwitten
        [name]: value,
      },
    });
  };

  //this function will update the elementId in the users object,
  //we have to update it manually since there is no field in the DOM for elemetID

  componentDidMount() {
    this.setState({
      users: {
        elementId: this.props.bookID,
      },
    });
  }

  render() {
    return (
      <Container className="d-flex justify-content-center text-center">
        <div className="mt-2 p-3 border">
          <h3>Rate us</h3>
          <textarea
            className="add-comment"
            id="add-comment"
            type="text"
            placeholder="Add Comment"
            value={this.state.users.comment}
            onChange={(e) => this.onChangeHandler(e.target.value, "comment")}
          />
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Rate this book</Form.Label>
            <Form.Control
              as="select"
              value={this.state.users.rate}
              onChange={(e) => this.onChangeHandler(e.target.value, "rate")}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <button className="btn btn-success" onClick={this.sendCommentHandler}>
            Add Comment
          </button>
        </div>
      </Container>
    );
  }
}

export default AddComment;
