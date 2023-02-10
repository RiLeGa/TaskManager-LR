import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Alert } from "../components/Alert";
import { Collaborator } from "../components/Collaborators";
import { Task } from "../components/Task";
import { useProjects } from "../hooks/useProjects";

export const Project = () => {

  const {id} = useParams();

  const { loading, alert, getProject, project } = useProjects();

  const { name, description, dateExpire, client, _id } = project;

  useEffect(() => {
    getProject(id);
  }, [id]);

  if(alert.msg) return <Alert {...alert}/>

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin:"25px 0",
          width:"70%",
          padding:"15px",
          maxWidth:"none",
          border:"1px solid Black",
          borderRadius:"15px",
          background: "linear-gradient(45deg, red, blue)",
          boxShadow: "10px 10px 10px black"
        }}>
            <h1 style={{
              textTransform:"uppercase",
              color:"white",
              marginBottom:"40px"
            }}>{name}</h1>
          <div style={{width:"50"}}>
          </div>
          <h2 style={{
            textTransform:"capitalize", marginBottom:"10px"
            }}>Cliente: {client}</h2>
          <hr style={{width:"60%", marginBottom:"10px"}} />
          
          <Link
            style={{
              textDecoration:"none",
              color:"black",
              marginBottom:"25px"
            }}
              to={`/projects/edit-project/${_id}`}
            >
               <p style={{
                display:"flex",
                flexDirection:"column",
                border:"2px solid black",
                borderRadius:"15px",
                justifyContent:"center",
                alignItems:"center",
                padding:"10px",
                background:"blue",
                color:"white"
              }}>
              <svg
              style={{
                width:"50px",
                height:"30px"
              }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
             EDITAR</p>
            </Link>

          <p style={{
            width:"70%",
            border:"2px black solid",
            padding:"10px",
            color:"white",
            borderRadius:"10px"
          }}>{description}</p>
          <div>
            <p style={{
              textTransform:"uppercase",
              color:"white",
              margin:"30px"
            }}
            >Tareas del proyecto</p>
            <Button style={{
                display:"flex",
                flexDirection:"row",
                border:"2px solid black",
                borderRadius:"15px",
                justifyContent:"center",
                alignItems:"center",
                width:"100%",
                padding:"10px",
                marginBottom:"15px",
                background:"green",
              color:"white"}}
              /*  onClick={handleModalForm} */
            >
              <svg style={{
                width:"25px",
                height:"25px"
              }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <p>Nueva Tarea</p>
            </Button>
          </div>
          {[1].map((task) => (
            <Task />
          ))}
          <div style={{
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
              width:"100%",
            }}  >
            <p style={{
              textTransform:"uppercase",
              color:"white",
              margin:"30px"
            }}>Colaboradores</p>

            <Button style={{
                display:"flex",
                flexDirection:"row",
                border:"2px solid black",
                borderRadius:"15px",
                justifyContent:"center",
                alignItems:"center",
                padding:"5px",
                background:"green"
              }}
              /* onClick={handleModalAddCollaborator} */
            >
              <svg
               style={{
                width:"25px",
                height:"25px",
                color:"black"
              }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>

              <p style={{
              textTransform:"uppercase",
              color:"white",
              margin:"5px"
            }}>Agregar Colaborador</p>
            </Button>
          </div>
          {[1, 2].map((collaborator) => (
            <Collaborator />
          ))}
        </Container>
      )}
    </>
  );
};
