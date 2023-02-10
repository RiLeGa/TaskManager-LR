import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";
import { clientAxios } from "../config/clientAxios";
import useAuth from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";

export const Login = () => {

  const [alert, setAlert] = useState({});
  const {setAuth} = useAuth();
  const navigate = useNavigate()

  const handleShowAlert = (msg, time = true) => {
    setAlert({
      msg,
    });

    if (time) {
      setTimeout(() => {
        setAlert({});
      }, 3000);
    }

    reset();
  };

  const { formValues, handleInputChange, reset } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      handleShowAlert("Todos los campos son obligatorios");
      return null;
    }

    try {

      const {data} = await clientAxios.post('/auth/login',{
        email,
        password
      })

      //console.log(data);

      setAuth(data.user);
      sessionStorage.setItem('token', data.token);

      navigate('/projects')
      
    } catch (error) {
      console.error(error)
      handleShowAlert(error.response?.data.msg)
    }


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
        marginTop:"5vh",
        background: "linear-gradient(45deg, red, blue)",
        borderRadius:"15px",
        boxShadow: "10px 5px 5px black"
      }}
    >
      <h1 style={{
        fontFamily:"sans-serif",
        textTransform:"uppercase",
        color:"white"
      }}>
        Inicia sesión
      </h1>
      {alert.msg && <Alert {...alert} />}
      <form
        onSubmit={handleSubmit}
        noValidate
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
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
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            margin: "15px 0"
          }}
        >
          <Button type="submit" variant="contained">
            Ingresar
          </Button>
        </div>
      </form>
      <nav style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"center",
        width:"70%"
      }}>
        <Link
          to={"/register"}
          style={{
            textDecoration:"none",
            color:"white",
            fontFamily:"sans-serif",
            textTransform:"uppercase",
            fontSize:"15px",
            margin:"10px"
          }}
        >
          ¿No tenés una cuenta? Registrate
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
