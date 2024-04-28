// store.js

import { configureStore } from "@reduxjs/toolkit";
import personsReducer from "./personsSlice";
import {
  saveStateToLocalStorage,
  loadStateFromLocalStorage,
} from "../localStorage";

const persistedPersons = loadStateFromLocalStorage();

const store = configureStore({
  reducer: {
    persons: personsReducer,
  },

  preloadedState: {
    persons: persistedPersons, // Only preloadedState for persons reducer
  },
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState().persons);
});

export default store;
