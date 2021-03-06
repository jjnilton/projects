import { createSlice, configureStore } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    bookList: [],
    isLoading: false,
    triggered: false,
    numFound: 0,
  },
  reducers: {
    updateBooks: (state, action) => {
      state.bookList = action.payload.bookList;
      state.isLoading = action.payload.isLoading;
      state.triggered = true;
      state.numFound = action.payload.numFound;
    }
  }
})

export const { updateBooks } = booksSlice.actions;

export default configureStore({
  reducer: {books: booksSlice.reducer}
})