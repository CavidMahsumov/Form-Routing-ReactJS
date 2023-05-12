import React from 'react'
import { useHistory } from 'react-router-dom';

export default function MainPage() {
    const history = useHistory();
    
    const logout=e=>{
        history.push("/login")
    }
   
    const userData = JSON.parse(localStorage.getItem('userData'));
  return (
    <>
    <h1 className='mh1'>Welcome {userData.username}</h1>
    <form onSubmit={logout} >
        <button className='register-button' type='submit'>Log Out</button>
    </form>
    </>
    
  )
}
