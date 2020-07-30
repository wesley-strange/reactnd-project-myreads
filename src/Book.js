import React from 'react';

const Book = props => {
  const { book } = props;

  const id = book.id ? book.id : ''
  const title = book.title ? book.title : ''
  const authors = book.authors ? book.authors.join(', ') : ''
  const backgroundImage = 'imageLinks' in book ? book.imageLinks.thumbnail : ''
  return (
    (
      <li key={id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${backgroundImage})`
              }}>
            </div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  )
}

export default Book;
