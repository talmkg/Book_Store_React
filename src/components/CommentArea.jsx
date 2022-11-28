import { Component } from "react";
import CommentList from "../components/CommentList.jsx";
import AddComment from "../components/AddComment.jsx";
import { Button, Card } from "react-bootstrap";

class CommentArea extends Component {
  //f(x) to get "comments" by using bookId end point since we dont want all comments on the server
  // I got the book ID as a prop from the 'SingleBook.jsx' component
  state = {
    comments: [],
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.changeSelectedBook !== this.props.changeSelectedBook) {
      this.getBooks();
    }
  };
  getBooks = async () => {
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmOGVlM2Q4MzkzNTAwMTVlOGM1ODMiLCJpYXQiOjE2NjkzMDQwMzUsImV4cCI6MTY3MDUxMzYzNX0.CjlTsvXkcNMB6uKtDe_ev9UpP63AXJuYiWptjPr6Sb0",
      },
    };

    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.changeSelectedBook,
      options
    );

    if (response.ok) {
      const data = await response.json();
      this.setState({
        comments: data,
      });
      console.log(data);
    }
    console.log(this.props.bookID);
  };

  // running the getBooks function since we cant do it in render()
  //componentDidMount works almost like window.onload (in vanilla js), it loads once hence calling the f(x)

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <>
        <div>
          <div className="comment-area" type="text">
            {!this.state.comments ? (
              <h1>Choose the book first</h1>
            ) : (
              this.state.comments.map((com) => (
                <Card
                  className="card d-flex m-2 p-2 text-dark"
                  id="custom_background"
                >
                  <div className="">
                    <h5>User: {com.author} </h5>
                    <p>Comment: {com.comment}</p>
                    <p>Mark: {com.rate} stars of 5 ⭐</p>
                  </div>
                  <div>
                    <Button
                      variant="danger"
                      className="m-1"
                      onClick={(e) => this.deleteComment(com._id)}
                    >
                      Report
                    </Button>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </>
    );
  }
}

export default CommentArea;
