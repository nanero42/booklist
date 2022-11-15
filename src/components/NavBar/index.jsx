import { useContext } from "react";
import { BooksContext } from "../../contexts/Books";
import "./index.scss";

export default function NavBar(props) {
  const { books } = useContext(BooksContext);
  return(
    <div className="navbar">
      <h1 className="navbar__title">Reading List</h1>
      <p>Currently u have {books.length} books to get through...</p>
    </div>
  );
}