import React from "react";
import { NavLink } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <header>
        <h1>Insert title</h1>
      </header>
      <main>
        <div className="card">
          <h3>Sign up</h3>

          <div className="inputField">
            <h4>Email</h4>
            <input type="input" />
          </div>

          <div className="inputField">
            <h4>Username</h4>
            <input type="input" />
          </div>

          <div className="inputField">
            <h4>Password</h4>
            <input type="input" />
          </div>

          <button className="buttons">sign up</button>

          <div>
            <p>
              Already have an account?
              <NavLink to={"/"}> Sign in</NavLink>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
