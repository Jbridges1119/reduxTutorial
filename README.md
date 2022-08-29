# Learning Redux Toolkit
Notes from redux tutorial. [Docs - Redux-Toolkit](https://redux-toolkit.js.org/introduction/getting-started)


## Notes

### How To Create
- `npx create-react-app my-app --template redux`
- Or for TS
- `npx create-react-app my-app --template redux-typescript`
- Or to add to existing
- `npm install @reduxjs/toolkit`

### Initialize Redux Store
#### index.js
 - import `{configureStore}` and `{Provider}` to index.js
 - Declare store `const store = configureStore ({ reducer: {}})`
 - Wrap <App/> with <Provider store={store}></Provider>

#### Create Slice
- Create a slice within a features foler
- import {createSlice}
- export const userSlice = createSlice({
  name: ""
  initialState: {}
  reducers: {}
})
- Check users.js for more details
- Import into index and add to store ~details in index.js

#### Apply The Reducer Values
- import `{useSelector}` to component
- Declare variable to useSelector
  - eg. const user = useSelector((state) => state.user.value)
- Treat like a prop

#### Apply The Reducer Actions
- export a variable with the action
  - eg. export const {login} = userSlice.actions
- import `{useDispatch} from "react-redux"` and `{login}`
- Add useDispatch() to a variable and then attach it to a event handler (onClick.. ect)
- within brackets of useDispatch we want to set our state
  - eg. `onClick={() => {dispatch(login({name: "Jeff", age: 36, email: 'Jbridges1119@gmail.com'}))}}`