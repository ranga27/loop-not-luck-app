import {data} from '../constants';

// Define action types
export const GET_BOOKS = 'GET_BOOKS';
export const ADD_TO_BOOKMARK_LIST = 'ADD_TO_BOOKMARK_LIST';
export const REMOVE_FROM_BOOKMARK_LIST = 'REMOVE_FROM_BOOKMARK_LIST';

// Define action creators

export const getBooks = () => {
  try {
    return async (dispatch) => {
      const books = data;
      // console.log('DATA ========>', response.data);
      if (books) {
        dispatch({
          type: GET_BOOKS,
          payload: books,
        });
      } else {
        console.log('Unable to fetch data ');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const addBookmark = (book) => (dispatch) => {
  dispatch({
    type: ADD_TO_BOOKMARK_LIST,
    payload: book,
  });
};

export const removeBookmark = (book) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_BOOKMARK_LIST,
    payload: book,
  });
};
