import React, { Component } from "react";
import axios from "axios";

const Book = (props) => (
  <tr>
    <td>{props.book.title}</td>
  </tr>
);

export default class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    axios
      .get("http://henri-potier.xebia.fr/books/")
      .then((response) => {
        this.setState({ books: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  bookList() {
    return this.state.books.map((currentbook) => {
      return <Book book={currentbook} key={currentbook._id} />;
    });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-light">
            <tr></tr>
          </thead>
          <tbody>{this.bookList()}</tbody>
        </table>
      </div>
    );
  }
}
