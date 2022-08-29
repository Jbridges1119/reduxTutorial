import React from 'react'
//hook to grab values of our state when we need it
import { useSelector } from 'react-redux'

function Profile() {
  //Like a deconstructed Prop ~state.user.value from our user.js
  const user = useSelector((state) => state.user.value)
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  )
}

export default Profile