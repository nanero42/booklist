import { createContext, useState } from 'react';

export const BooksContext = createContext();

export default function BooksContextProvider(props) {
  const [books, setBooks] = useState([
    {id: 0, title: 'name of the wind', author: 'patrick rothfuss'},
    {id: 1, title: 'the final empire', author: 'brandon sanderson'},
  ])
  const addBook = (id, title, author) => {
    const newBook = {id, title, author};

    setBooks(prev => [...prev, newBook]);
  }
  const removeBook = id => {
    setBooks(books.filter(b => b.id !== id));
  }
  return(
    <BooksContext.Provider value={{books, addBook, removeBook}}>
      {props.children}
    </BooksContext.Provider>
  );
}