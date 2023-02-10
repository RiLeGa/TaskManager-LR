import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "../components/Alert";
import { clientAxios } from "../config/clientAxios";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import { Button, Container, TextField } from "@mui/material";

const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;

export const Register = () => {
  const [alert, setAlert] = useState({});
  const [sending, setSending] = useState(false);

  const { formValues, handleInputChange, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formValues);

    if ([name, email, password, password2].includes("")) {
      handleShowAlert("Todos los campos son obligatorios");
      return null;
    }

    if (!exRegEmail.test(email)) {
      handleShowAlert("El email tiene un formato inválido");
      return null;
    }

    if (password !== password2) {
      handleShowAlert("Las contraseñas no coinciden");
      return null;
    }

    try {
      setSending(true);

      const { data } = await clientAxios.post("/auth/register", {
        name,
        email,
        password,
      });

      setSending(false);

      Swal.fire({
        icon: "info",
        title: "Gracias por registrate!",
        text: data.msg,
      });

      reset();
    } catch (error) {
      console.error(error);
      handleShowAlert(error.response?.data.msg);
      reset();
    }
  };

  const handleShowAlert = (msg) => {
    setAlert({
      msg,
    });

    setTimeout(() => {
      setAlert({});
    }, 3000);
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "60%",
        border: "1px solid black",
        padding: "25px 0",
        marginTop:"13vh",
        background: "linear-gradient(45deg, red, blue)",
        borderRadius:"15px"
      }}
    >
      <h1 style={{
        fontFamily:"sans-serif",
        textTransform:"uppercase",
        color:"white"
      }}>
        Creá tu cuenta
      </h1>
      {alert.msg && <Alert {...alert} />}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        onSubmit={handleSubmit}
        noValidate
      >
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
            label="name"
            style={{width: "60%",background:"white", opacity:"0.5", borderRadius:"10px"}}
            id="name"
            type="text"
            placeholder="Ingresá tu nombre"
            value={name}
            name="name"
            onChange={handleInputChange}
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
            label="email"
            style={{width: "60%",background:"white", opacity:"0.5", borderRadius:"10px"}}
            id="email"
            type="email"
            placeholder="Ingresá tu email"
            value={email}
            name="email"
            onChange={handleInputChange}
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
            label="password"
            style={{width: "60%",background:"white", opacity:"0.5", borderRadius:"10px"}}
            id="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            autoComplete="off"
            name="password"
            onChange={handleInputChange}
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
            label="password2"
            style={{width: "60%",background:"white", opacity:"0.5", borderRadius:"10px"}}
            id="password2"
            type="password"
            placeholder="Ingrese su contraseña"
            value={password2}
            name="password2"
            autoComplete="off"
            onChange={handleInputChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            margin: "15px 0"
          }}
        >
          <Button type="submit" disabled={sending} variant="contained">
            Crear cuenta
          </Button>
        </div>
      </form>
      <nav 
      style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"center",
        width:"70%"
      }}>
        <Link
          to={"/"}
          style={{
            textDecoration:"none",
            color:"white",
            fontFamily:"sans-serif",
            textTransform:"uppercase",
            fontSize:"15px",
            margin:"10px"
          }}
        >
          ¿Estás registrado? Iniciá sesión
        </Link>
        <Link
          to={"/forget-password"}
          style={{
            textDecoration:"none",
            color:"white",
            fontFamily:"sans-serif",
            textTransform:"uppercase",
            fontSize:"15px",
            margin:"10px"
          }}
        >
          Olvidé mi password
        </Link>
      </nav>
    </Container>
  );
};
