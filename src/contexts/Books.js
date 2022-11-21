import { createContext, useEffect, useReducer } from 'react';
import { BookReducer } from '../reducers/BookReducer';

export const BooksContext = createContext();

export default function BooksContextProvider(props) {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    return JSON.parse(localStorage.getItem('books'));
  });
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);
  return(
    <BooksContext.Provider value={{books, dispatch}}>
      {props.children}
    </BooksContext.Provider>
  );
}