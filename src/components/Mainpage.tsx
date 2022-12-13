import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebaseconfig";
import Feed from './Feed';

export default function Mainpage({ setIsAuth }) {
  const [name, setName] = useState<string | null>();

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      setName(data?.email);
      setIsAuth(true);
    });
  }, []);

  const navigate = useNavigate();

  function logOut() {
    signOut(auth);
    navigate("/login");
  }

  return (
    <>
      <header>
        <h1>Insert title</h1>
      </header>
      
      <main className="Mainfeed">
      <Feed/>
      </main>
    </>
  );
}
