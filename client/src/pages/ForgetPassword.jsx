import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Alert } from "../components/Alert";
import { clientAxios } from "../config/clientAxios";

export const ForgetPassword = () => {
  const [alert, setAlert] = useState({});
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      handleShowAlert("El email es requerido");
      return null;
    }
    try {
      setSending(true);

      const { data } = await clientAxios.post("/auth/send-token", {
        email,
      });

      setSending(false);

      Swal.fire({
        icon: "info",
        title: "Felicitaciones!",
        text: data.msg,
        confirmButtonText: "Iniciá sesión",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });

      setEmail("");
    } catch (error) {
      handleShowAlert(error.response?.data.msg);
      setEmail("");
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
        marginTop: "13vh",
        background: "linear-gradient(45deg, red, blue)",
        borderRadius: "15px",
      }}
    >
      <h1 
      style={{
        fontFamily:"sans-serif",
        textTransform:"uppercase",
        color:"white"
      }}
      >Recupera tu acceso</h1>
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
            label="Email"
            style={{
              width: "60%",
              background: "white",
              opacity: "0.5",
              borderRadius: "10px",
            }}
            id="email"
            type="email"
            placeholder="Ingresá tu email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            margin: "15px 0",
          }}
        >
          <Button type="submit" disabled={sending} variant="contained">
            Recuperar Contraseña
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
          style={{
            textDecoration: "none",
            color: "white",
            fontFamily: "sans-serif",
            textTransform: "uppercase",
            fontSize: "15px",
            margin: "10px",
          }}
          to={"/register"}
        >
          ¿No tenés una cuenta? Registrate
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            fontFamily: "sans-serif",
            textTransform: "uppercase",
            fontSize: "15px",
            margin: "10px",
          }}
          to={"/"}
        >
          ¿Estás registrado? Iniciá sesión
        </Link>
      </nav>
    </Container>
  );
};
