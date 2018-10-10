import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

class BookList extends Component {
  state = {
    selectedId: ""
  };
  displayBooks = () => {
    let { data } = this.props;
    if (data.loading) {
      return <div>Loading...</div>;
    } else {
      return data.books.map(book => {
        return (
          <li
            className="book-list-item"
            onClick={e => this.setState({ selectedId: book.id })}
            key={book.id}
          >
            {book.name}
          </li>
        );
      });
    }
  };

  render() {
    return (
      <div id="main">
        <ul id="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selectedId} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
