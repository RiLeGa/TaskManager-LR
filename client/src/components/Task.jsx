import { Button } from "@mui/material";
import React from "react";

export const Task = () => {
  return (
    
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"flex-start",
      width:"100%",
      border:"2px solid black",
      borderRadius:"15px",
      padding:"10px",
      background: "linear-gradient(45deg, #283FE3, purple)"
      }}>
      <div>
        <p style={{fontFamily:"sans-serif", fontSize:"20px"
        }}>Nombre de la tarea:</p>
        <p style={{fontFamily:"sans-serif", fontSize:"20px"
        }}>Descripción de la tarea:</p>
        <p style={{fontFamily:"sans-serif", fontSize:"20px"
        }}>Fecha de entrega:</p>
        <p style={{fontFamily:"sans-serif", fontSize:"20px"
        }}>Prioridad:</p>
        </div>
      <div style={{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"flex-start",
      width:"100%",
      margin:"20px 0"
      }}>
        <Button variant="outlined" style={{color:"white", background:"green"}}
        /* onClick={} */
        >
          Editar
        </Button>
        <Button variant="outlined" style={{color:"white", background:"blue", margin:"0 10px"}}>Completa/Incompleta</Button>
        <Button variant="outlined" style={{color:"white", background:"red"}}
        /* onClick={} */
        >
          Eliminar
        </Button>
      </div>
      </div>
    
  );
};
