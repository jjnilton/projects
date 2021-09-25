import { configureStore, createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: [],
    isLoaded: false,
  },
  reducers: {
    updateData: (state, action) => {
      state.value = action.payload.data;
      state.isLoaded = action.payload.status;
    },
  },
});

export const { updateData } = dataSlice.actions;

export default configureStore({
  reducer: { data: dataSlice.reducer },
});
