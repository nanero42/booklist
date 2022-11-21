import { useContext, useEffect } from "react";
import { BooksContext } from "../../contexts/Books";
import { REMOVE_BOOK } from "../../reducers/BookReducer";
import "./index.scss";

export default function BookList(props) {
  const { books, dispatch } = useContext(BooksContext);
  
  const deleteBook = id => {
    dispatch({type: REMOVE_BOOK, payload: {id}});
  }

  return(
    <div className="booklist">
      <ul className="booklist__list">
        {books?.length ? books.map(b => {
          return(
            <li className="booklist__item" key={b.id} onClick={() => deleteBook(b.id)}>
              <h1 className="booklist__item-title">{b.title}</h1>
              <p className="booklist__item-text">{b.author}</p>
            </li>
          );
        }) : <li className="booklist__item booklist__item-no-book">No books here</li>}
      </ul>
    </div>
  );
}