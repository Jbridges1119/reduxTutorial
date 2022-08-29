import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const themeSlice = createSlice({
  //Like the state name
  name: "theme",
  //Like useState({name: "", age: 0, email: ''})
  initialState: { value: initialStateValue },
  reducers: {
    //state - holds the current value of the state ~could be initial if we haven't logged in
    //action - is like setState
    changeColor: (state, action) => {
      state.value = action.payload;
    },
    
  },
});

export const {changeColor} = themeSlice.actions;

export default themeSlice.reducer;
