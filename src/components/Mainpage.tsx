import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { auth } from '../firebaseconfig'

export default function Mainpage({setIsAuth}) {

  const [name, setName] = useState()

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      setName(data?.email)
      setIsAuth(true)
    })
  }, [])

  const navigate = useNavigate()

  function logOut() {
    signOut(auth)
    navigate('/login')
  }

  return (
    <>
    <h1>Welcome {name}</h1>
    <button onClick={logOut}>log out</button>
    </>
  )
}
