import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Alert } from "../components/Alert";
import { ProjectPreview } from "../components/ProjectPreview";
import { useProjects } from "../hooks/useProjects";

export const Projects = () => {

  const { loading, alert, projects, getProjects } = useProjects();

  useEffect(() => {
    getProjects();
  }, []);

  if (alert.msg) {
    return <Alert {...alert} />;
  }

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "94%",
        maxWidth:"none",
        border: "1px solid black",
        padding: "25px 0",
        marginTop:"10vh",
        background: "linear-gradient(45deg, red, blue)",
        borderRadius:"15px",
        marginBottom:"150px"
      }}
    >
      <h1 style={{
          fontFamily:"sans-serif",
          fontSize:"25px",
          textTransform:"uppercase",
          textDecoration:"none",
          color:"white",
          marginBottom:"25px"
        }}>Proyectos</h1>
      <div style={{ display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "98%",
        maxWidth:"none",
        border: "1px solid white",
        padding: "25px 0",
        background: "linear-gradient(45deg, red, blue)",
        borderRadius:"15px"}}>
        {loading ? (
          <p>Cargando...</p>
        ) : projects.length ? (
          projects.map((project) => (
            <ProjectPreview  key={project._id} {...project} />
          ))
        ) : (
          <p style={{
            fontFamily:"sans-serif",
            fontSize:"25px",
            textDecoration:"none",
            color:"white"
          }}>No hay proyectos agregados</p>
        )}
      </div>
    </Container>
  );
};
