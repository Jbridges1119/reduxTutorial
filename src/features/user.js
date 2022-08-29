import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  //Like the state name
  name: 'user',
  //Like useState({name: "", age: 0, email: ''})
  initialState: {value: {name: "", age: 0, email: ''}},
  reducers: {
    //state - holds the current value of the state ~could be initial if we haven't logged in
    //action - 
    login: (state, action ) => {
      state.value = action.payload
    },
  },
});

export const {login} = userSlice.actions

export default userSlice.reducer;