import { Container, Modal } from '@mui/material'
import React, { useState } from 'react'
import { FormProject } from '../components/FormProject'
import { useProjects } from '../hooks/useProjects'

export const ProjectAdd = () => {

 return (

  <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width:"50%",
          padding:"15px",
          maxWidth:"none",
          border:"1px solid Black",
          borderRadius:"15px",
          marginBottom:"200px"
        }}
      >
  <h1 style={{
    fontFamily:"sans-serif",
    margin:"25px 0",
    color:"white"
  }}>
  Crear proyecto
  </h1>
  <div 
  style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin:"0 25px",
          width:"100%"
          }}>
  <FormProject/>
  </div>
  </Container>

 )
}
