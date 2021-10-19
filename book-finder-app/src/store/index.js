import { createSlice, configureStore } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    bookList: [],
    isLoading: false
  },
  reducers: {
    updateBooks: (state, action) => {
      state.bookList = action.payload.bookList;
      state.isLoading = action.payload.isLoading;
    }
  }
})

export const { updateBooks } = booksSlice.actions;

export default configureStore({
  reducer: {books: booksSlice.reducer}
})