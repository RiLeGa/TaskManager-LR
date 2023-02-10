import { Button } from "@mui/material";
import { padding } from "@mui/system";
import React from "react";

export const Collaborator = () => {
  return (
    
    <div style={{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      border:"2px solid black",
      width:"100%",
      margin:"10px",
      padding:"10px"
    }}>
      <p style={{color:"white"}}>
        Nombre de colaborador
        <span style={{color:"white"}}> | Email</span>
      </p>
      <div>
        <Button variant="contained" style={{background:"red"}}
        /* onClick={handleDelete} */
        >
          Eliminar
        </Button>
      </div>
    </div>
    
  );
};
