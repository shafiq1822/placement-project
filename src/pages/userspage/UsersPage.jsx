import React from 'react'
import LogoutNavbar from '../../components/logoutNavbar/LogoutNavbar'
import './userspage.css'
import { BsSearch } from 'react-icons/bs'

const UsersPage = () => {
    return (
        <div className='userpage-container'>
            <LogoutNavbar />
            <div className="users-container">
                <div className="content-container">
                    <div className="input-container">
                        <div className="search-container">
                            <input type="search" className='search-bar' />
                            <button className='search-btn'><BsSearch /></button>
                        </div>
                        <div className="sort-container">
                            <select name="Sort" id="" value='Sort'>
                                <option value="">Ascending</option>
                                <option value="">Descending</option>
                            </select>
                        </div>
                    </div>
                    <table cellSpacing={0}>
                        <tr className='table-header'>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Company name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Email</th>
                            {/* <th>Password</th> */}
                            <th>Website</th>
                            <th>Age</th>
                        </tr>
                        <tr>
                            <td>First name</td>
                            <td>Last name</td>
                            <td>Company name</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Zip</td>
                            <td>Email</td>
                            {/* <td>Password</td> */}
                            <td>Website</td>
                            <td>Age</td>
                        </tr>
                        <tr>
                            <td>First name</td>
                            <td>Last name</td>
                            <td>Company name</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Zip</td>
                            <td>Email</td>
                            {/* <td>Password</td> */}
                            <td>Website</td>
                            <td>Age</td>
                        </tr>
                        <tr>
                            <td>First name</td>
                            <td>Last name</td>
                            <td>Company name</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Zip</td>
                            <td>Email</td>
                            {/* <td>Password</td> */}
                            <td>Website</td>
                            <td>Age</td>
                        </tr>
                        <tr>
                            <td>First name</td>
                            <td>Last name</td>
                            <td>Company name</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Zip</td>
                            <td>Email</td>
                            {/* <td>Password</td> */}
                            <td>Website</td>
                            <td>Age</td>
                        </tr>
                        <tr>
                            <td>First name</td>
                            <td>Last name</td>
                            <td>Company name</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Zip</td>
                            <td>Email</td>
                            {/* <td>Password</td> */}
                            <td>Website</td>
                            <td>Age</td>
                        </tr>
                        <tr>
                            <td>First name</td>
                            <td>Last name</td>
                            <td>Company name</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Zip</td>
                            <td>Email</td>
                            {/* <td>Password</td> */}
                            <td>Website</td>
                            <td>Age</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UsersPage