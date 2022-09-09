import React from 'react'
import RegistrationPage from './pages/registrationPage/RegistrationPage'
import LoginPage from './pages/login/LoginPage'
import { Route, Routes } from 'react-router-dom'
import UsersPage from './pages/userspage/UsersPage'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='*' element={<LoginPage/>}/>
        <Route path='/registrationPage' element={<RegistrationPage/>}/>
        <Route path='userDetailsPage' element={UsersPage}/>
      </Routes>
      {/* <RegistrationPage/> */}
      {/* <UsersPage/> */}
    </div>
  )
}

export default App
