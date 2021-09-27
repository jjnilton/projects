import { createSlice, configureStore } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: [],
    isLoaded: false,
    hello: "",
  },
  reducers: {
    updateData: (state, action) => {
      if (action.type === "RESET") {
        state.hello = { value: [], isLoaded: false, hello: "" };
      } else {
        state.value = action.payload.value;
        state.isLoaded = action.payload.status;
        state.hello = action.payload.hello;
      }
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loggedIn: false,
    language: "",
    username: "",
    loggedOut: false,
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.language = action.payload.language;
      state.username = action.payload.username;
      state.loggedOut = false;
    },
    logout: (state, action) => {
      console.log(state.language);
      state.loggedIn = false;
      state.language = "";
      state.loggedOut = true;
    },
    reset: (state) => {
      state.loggedOut = false;
    },
  },
});

export const { updateData } = dataSlice.actions;
export const { login, logout, reset } = loginSlice.actions;

export default configureStore({
  reducer: { data: dataSlice.reducer, login: loginSlice.reducer },
});
