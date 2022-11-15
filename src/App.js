import './app.scss';
import BookList from './components/BookList';
import BookForm from './components/BooksForm';
import NavBar from './components/NavBar';
import MasterContextProvider from './contexts/Master';

function App() {
  return (
    <MasterContextProvider>
      <div className="app">
        <NavBar />
        <BookList />
        <BookForm />
      </div>
    </MasterContextProvider>
  );
}

export default App;
