import { Button, Container, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Alert } from "../components/Alert";
import { clientAxios } from "../config/clientAxios";

export const RecoverPassword = () => {
  const [alert, setAlert] = useState({});
  const [password, setPassword] = useState("");
  const [tockenChecked, setTockenChecked] = useState(false);

  const { token } = useParams();
  const navigate = useNavigate();

  const handleShowAlert = (msg) => {
    setAlert({
      msg,
    });

    setTimeout(() => {
      setAlert({});
    }, 60000);
  };

  useEffect(() => {
    const checkToken = async () => {
      try {
        const { data } = await clientAxios.get(
          `/auth/reset-password?token=${token}`
        );
        console.log(data.msg);
        setTockenChecked(true);
      } catch (error) {
        console.log(error);
        handleShowAlert(error.response?.data.msg);
      }
    };

    checkToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      handleShowAlert("El password es requerido");
      return null;
    }
    try {
      const { data } = await clientAxios.post("auth/reset-password?token", {
        password,
      });
      Swal.fire({
        icon: "info",
        title: "Contraseña reseteada!",
        text: data.msg,
        confirmButtonText: "Iniciá sesión",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    } catch (error) {
      console.log(error);
      handleShowAlert(error.response?.data.msg);
      setPassword("");
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
        marginTop: "13vh",
        background: "linear-gradient(45deg, red, blue)",
        borderRadius: "15px",
      }}
    >
      <h1
        style={{
          fontFamily: "sans-serif",
          textTransform: "uppercase",
          color: "white",
        }}
      >
        Reestablecé tu contraseña
      </h1>
      {alert.msg && <Alert {...alert} />}

      {tockenChecked ? (
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
              label="Nueva contraseña"
              style={{
                width: "60%",
                background: "white",
                opacity: "0.5",
                borderRadius: "10px",
              }}
              id="password"
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              autoComplete="off"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
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
            <Button type="submit" variant="contained">
              Resetear contraseña
            </Button>
          </div>
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              width: "70%",
            }}
          >
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
        </form>
      ) : (
        <nav>
          <Link to={"/register"}>¿No tenés una cuenta? Registrate</Link>
          <Link to={"/"}>¿Estás registrado? Iniciá sesión</Link>
        </nav>
      )}
    </Container>
  );
};
