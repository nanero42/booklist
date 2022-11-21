export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const BookReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
      }];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload.id);
    default: return state;
  }
}