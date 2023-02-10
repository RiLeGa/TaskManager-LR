import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";

export const Header = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        maxWidth:"none",
        border: "1px solid black",
        padding: "25px 0",
        background: "linear-gradient(45deg, red, blue)",
      }}
    >
      <Link
      style={{
        fontFamily:"sans-serif",
        textTransform:"capitalize",
        color:"white",
        textDecoration:"none",
        fontSize:"25px"
    }} 
    to="/projects"
      >Project Manager</Link>
      
        <input type="text" 
        style={{    
          width: "30vw",
          height: "30px",
          marginLeft:"9vw",
          borderRadius: "15px",
          border: "none",
          padding: "10px"
          }} placeholder="Buscar proyecto" />
    

      <Link to="/projects"></Link>

      <Button
        type="button"
        /*onClick={closeSession}*/
      >
        <p style={{color:"white"}}> Cerrar sesión </p>
      </Button>
    </Container>
  );
};
