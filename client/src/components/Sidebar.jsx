import React from 'react'
import { Link } from "react-router-dom"
import useAuth from '../hooks/useAuth';

export const Sidebar = () => {
  const { auth } = useAuth();


  return (
    <aside 
    style={{
      display:"flex", 
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      width:"100%"
    }}>
        <p
        style={{
          fontFamily:"sans-serif",
          fontSize:"25px",
          margin:"15px 0",
          textTransform:"capitalize",
          color:"black"
        }}>Hola: {auth.name}</p>
        <Link style={{
          fontFamily:"sans-serif",
          fontSize:"25px",
          textDecoration:"none",
          border:"2px solid black",
          borderRadius:"15px",
          padding:"5px",
          background: "linear-gradient(45deg, red, blue)",
          color:"white"
        }} to="create-project">Nuevo Proyecto</Link>
    </aside>
  )
}

