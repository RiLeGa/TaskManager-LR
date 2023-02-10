import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ProjectPreview = ({name, _id, client}) => {

  return (
    <div 
    style={{
      width:"80%",
      display:"flex", 
      flexDirection:"row", 
      justifyContent:"space-between",
      borderBottom:"2px solid black",
      alignItems:"center"}}>
      <p style={{
          fontFamily:"sans-serif",
          color:"white",
          margin:"15px"
        }}>
        {name}
        <span style={{
          fontFamily:"sans-serif",
          color:"white"
        }}>
          {" | " + client}
        </span>
      </p>
      <Link style={{
          fontFamily:"sans-serif",
          color:"white",
          textDecoration:"none"
        }}
        to={`/projects/${_id}`}
      >
        Ver proyecto
      </Link>
    </div>
  );
};
