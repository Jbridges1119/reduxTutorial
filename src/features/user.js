import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  //Like the state name
  name: "user",
  //Like useState({name: "", age: 0, email: ''})
  initialState: { value: initialStateValue },
  reducers: {
    //state - holds the current value of the state ~could be initial if we haven't logged in
    //action - is like setState
    login: (state, action) => {
      state.value = action.payload;
    },
    //doesn't need action payload because we are reseting back
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
