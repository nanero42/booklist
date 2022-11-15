import { createContext } from 'react';
import BooksContextProvider from './Books';

export const MasterContext = createContext();

export default function MasterContextProvider(props) {
  return(
    <MasterContext.Provider value>
      <BooksContextProvider>
        {props.children}
      </BooksContextProvider>
    </MasterContext.Provider>
  );
}