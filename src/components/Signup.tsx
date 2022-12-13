import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../firebaseconfig";


export default function Signup({setIsAuth}) {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function createUser() {
  createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    setIsAuth(true)
    navigate('/')
  })
  .catch((error) => {
    console.log(error.code)
  })
}



  return (
    <>
      <header>
        <h1>Insert title</h1>
      </header>
      <main className='MainLogin'>
        <div className="card">
          <h3>Sign up</h3>

          <div className="inputField">
            <h4>Email</h4>
            <input type="input" onChange={(e) => {
              setEmail(e.target.value)
            }}/>
          </div>

          <div className="inputField">
            <h4>Username</h4>
            <input type="input" />
          </div>

          <div className="inputField">
            <h4>Password</h4>
            <input type="input" onChange={(e) => {
              setPassword(e.target.value)
            }}/>
          </div>

          <button className="buttons" onClick={createUser}>sign up</button>

          <div>
            <p>
              Already have an account?
              <NavLink to={"/login"}> Sign in</NavLink>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
