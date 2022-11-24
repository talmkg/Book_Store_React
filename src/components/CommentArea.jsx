import { Component } from "react";
import CommentList from "../components/CommentList.jsx";
import AddComment from "../components/AddComment.jsx";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  //f(x) to get "comments" by using bookId end point since we dont want all comments on the server
  // I got the book ID as a prop from the 'SingleBook.jsx' component

  getBooks = async () => {
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmOGVlM2Q4MzkzNTAwMTVlOGM1ODMiLCJpYXQiOjE2NjkzMDQwMzUsImV4cCI6MTY3MDUxMzYzNX0.CjlTsvXkcNMB6uKtDe_ev9UpP63AXJuYiWptjPr6Sb0",
      },
    };

    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.bookID,
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
      <div style={{ color: "black" }}>
        <div className="comment-area" type="text">
          {this.state.comments.map(
            (
              comment //now we have an array of comments from fetch, we map trough it,
            ) => (
              // as we map we send each comment object to CommentList.jsx as a prop (line 50)
              // and send the book Id as a prop in AddComment.jsx component(line 55)
              <CommentList comments={comment} />
            )
          )}
        </div>
        <div>
          <AddComment bookID={this.props.bookID} />
        </div>
      </div>
    );
  }
}

export default CommentArea;
