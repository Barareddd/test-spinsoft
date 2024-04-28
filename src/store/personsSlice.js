import { createSlice } from "@reduxjs/toolkit";

export const personsSlice = createSlice({
  name: "persons",
  initialState: {
    fullName: "",
    priority: "",
    type: "",
    persons: [],
  },
  reducers: {
    setfullName: (state, action) => {
      state.fullName = action.payload;
    },
    setPriority: (state, action) => {
      state.priority = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    addPerson: (state, action) => {
      state.persons.push(action.payload);
    },
    deletePerson: (state, action) => {
      const indexToDelete = action.payload;
      state.persons.splice(indexToDelete, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setfullName, setPriority, setType, addPerson, deletePerson } =
  personsSlice.actions;

export default personsSlice.reducer;
