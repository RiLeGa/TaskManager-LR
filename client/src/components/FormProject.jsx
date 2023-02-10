import { Button, TextField } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useProjects } from "../hooks/useProjects";
import { Alert } from "./Alert";

export const FormProject = () => {

  
  const {alert, showAlert, storeProject, project} = useProjects();
  
  const {id} = useParams()
  

  const {formValues, handleInputChange, reset, setFormValues} = useForm({
    name : "",
    description : "",
    dateExpire : "",
    client : ""
  })

  const {name, description, dateExpire, client} = formValues;


  useEffect(() => {
    if (id) {

      const { name, description, dateExpire, client } = project;

      inputName.current.value = project.name
      inputDescription.current.value = project.description
      inputDateExpire.current.value = project.dateExpire
      inputNameClient.current.value = project.client

  
      setFormValues({
      name :  project.name,
      description :  project.description,
      dateExpire :  project.dateExpire,
      client :  project.client})
    }
  }, [])

  const inputName = useRef(null)
  const inputDescription = useRef(null)
  const inputDateExpire = useRef(null)
  const inputNameClient = useRef(null)


  const handleSubmit = (e) => {
    e.preventDefault()
    if([name,description,dateExpire,client].includes("")){
      showAlert("Todos los campos son obligatorios");
      return null
    };

    console.log(formValues)

    storeProject({
      id: id ? id :null,
      name,
      description,
      dateExpire,
      client
    })
  }

  return (
    
    <form
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width:"100%",
    }}
      onSubmit={handleSubmit}
    >
     {
      alert.msg && <Alert {...alert} />
     }
      <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    }}>
      <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginBottom: 10,
          }}
        >
          <TextField
          style={{width:"90%"}}
            id="name"
            type="text"
            placeholder="Nombre del proyecto"
            value={name}
            onChange={handleInputChange}
            name="name"
            ref={inputName}
          />
        </div>
      <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginBottom: 10,
          }}
        >
          <TextField
            id="description"
            type="text"
            style={{resize: "none",  width:"90%" }}
            placeholder="Descripción del proyecto"
            value={description}
            onChange={handleInputChange}
            name="description"
            ref={inputDescription}
          />
        </div>
      <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginBottom: 10,
          }}
        >
          <TextField
          style={{width:"90%"}}
            id="dateExpire"
            type="date"
            value={dateExpire}
            onChange={handleInputChange}
            name="dateExpire"
            ref={inputDateExpire}
          />
        </div>
      <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginBottom: 10,
          }}
        >
          <TextField
          style={{width:"90%"}}
            id="client"
            type="text"
            placeholder="Nombre del cliente"
            value={client}
            onChange={handleInputChange}
            name="client"
            ref={inputNameClient}
          />
        </div>
        </div>
      <Button type="submit" variant="contained" style={{marginBottom:"25px"}} >
        {false ? "actualizar cambios" : "guardar proyecto"}
      </Button>
    </form>
  );
};