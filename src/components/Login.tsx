import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
        <h1>Insert title</h1>
      </header>
      <main className='MainLogin'>
        <div className="card">
          <h3>Sign in</h3>

          <div className="inputField">
            <h4>Username</h4>
            <input type="input" />
          </div>

          <div className="inputField">
            <h4>Password</h4>
            <input type="input" />
          </div>

          <button className="buttons">sign in</button>

          <div>
            <p>
              Don't have an account?
              <NavLink to={"/signup"}> Sign up</NavLink>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
