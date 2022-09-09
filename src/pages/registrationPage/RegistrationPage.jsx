import React, { useState } from 'react'
import './registrationPage.css'
import { Link } from 'react-router-dom'
import LoginNavbar from '../../components/loginNavbar/LoginNavbar'

const RegistrationPage = () => {

  const [userRegistration, setUserRegistration] = useState({
    firstname: '',
    lastname: '',
    email: '',
    companyName: '',
    city: '',
    state: '',
    zip: '',
    age: '',
    website: '',
    password: '',
  });

  const [users, setUsers] = useState([])

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({...userRegistration, [name] : value })
  }

  const submitHandler = (e) => {
    e.preventDefault(); 
    const newUsers = {...userRegistration, id: new Date().getTime().toString()}

    setUsers([...users, newUsers])
    console.log(newUsers)

    setUserRegistration({
      firstname: '',
      lastname: '',
      email: '',
      companyName: '',
      city: '',
      state: '',
      zip: '',
      age: '',
      website: '',
      password: '',
    })
  }

  return (
    <main>
      <LoginNavbar/>
      <div className="registration-page-container">
        <div className="container">
          <h5 className='title'>Register</h5>
          <form action="#" onSubmit={submitHandler}>
            <div className="user-details">

              <div className="input-box">
                <span className="details">First name</span>
                <input type="text" placeholder='Enter your first name' name='firstname' value={userRegistration.firstname} onChange={handleInput} required/>
              </div>

              <div className="input-box">
                <span className="details">Last name</span>
                <input type="text" placeholder='Enter your last name' name='lastname' value={userRegistration.lastname} onChange={handleInput} required/>
              </div>

              <div className="input-box">
                <span className="details">Email</span>
                <input type="email" placeholder='Enter your Email' name='email' value={userRegistration.email} onChange={handleInput} required/>
              </div>

              <div className="input-box">
                <span className="details">Company name</span>
                <input type="text" placeholder='Company name' name='companyName' value={userRegistration.companyName} onChange={handleInput} required/>
              </div>

              <div className="input-box">
                <span className="details">City</span>
                <input type="text" placeholder='Enter your City' name='city' value={userRegistration.city} onChange={handleInput} required/>
              </div>

              <div className="input-box">
                <span className="details">State</span>
                <input type="text" placeholder='Enter your State' name='state' value={userRegistration.state} onChange={handleInput} required/>
              </div>

              <div className="input-box">
                <span className="details">Zip code</span>
                <input type="number" placeholder='Enter your Zip code' name='zip' value={userRegistration.zip} onChange={handleInput} required/>
              </div>

              <div className="input-box">
                <span className="details">Age</span>
                <input type="number" placeholder='Enter your Age' name='age' value={userRegistration.age} onChange={handleInput} required/>
              </div>

              <div className="input-box">
                <span className="details">Your website</span>
                <input type="text" placeholder='Enter your website' name='website' value={userRegistration.website} onChange={handleInput} required/>
              </div>

              <div className="input-box">
                <span className="details">Password</span>
                <input type="password" placeholder='Enter your password' name='password' value={userRegistration.password} onChange={handleInput} required/>
              </div>

            </div>
            <p>Already have an account. <Link to='/loginPage'><span className="login-link">Login here</span></Link></p>
            <input type="submit" className='submit-btn'/>
          </form>
        </div>
      </div>
    </main>
  )
}

export default RegistrationPage