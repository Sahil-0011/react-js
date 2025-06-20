import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/Usercontext'
import UsercontextProvider from './context/UsercontextProvider'

function MainContext() {
  return (
    <UsercontextProvider>
      <Login/>
      <Profile/>
    </UsercontextProvider>
  )
}

export default MainContext