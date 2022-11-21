import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BooksContext } from "../../contexts/Books";
import { ADD_BOOK } from "../../reducers/BookReducer";
import './index.scss';

export default function BookForm(props) {
  const { dispatch } = useContext(BooksContext);
  
  const submit = e => {
    if (input['title'] && input['author']) {
      const id = uuidv4();
      dispatch({type: ADD_BOOK, payload: {
        id: id,
        title: input['title'],
        author: input['author'],
      }});
    }
    setInput('');
    e.preventDefault();
    e.target.reset();
  }

  const [input, setInput] = useState({
    id: '',
    title: '',
    author: '',
  })

  const onInput = e => {
    const value = e.target.value.trim();
    const inputType = e.target.id === 'title' ? 'title' : 'author';

    if (value) {
      setInput({...input, [inputType]: value});
    }
  }

  return(
    <form className="booksform" onSubmit={submit}>
      <input className="booksform__input" onInput={onInput} id="title" type="text" placeholder="Title..." />
      <input className="booksform__input" onInput={onInput} id="author" type="text" placeholder="Author..." />
      <button className="booksform__button" type="submit">Add Book</button>
    </form>
  );
}