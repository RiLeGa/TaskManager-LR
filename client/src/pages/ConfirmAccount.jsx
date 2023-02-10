import { Container } from '@mui/material'
import {useEffect, useState} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Alert } from '../components/Alert'
import { clientAxios } from '../config/clientAxios'


export const ConfirmAccount = () => {

  
  const {token} = useParams()

  const navigate = useNavigate()
  
  const [alert, setAlert] = useState({})

  const handleShowAlert = (msg) => {
    setAlert({
      msg
    });
  }

  useEffect(() => {
    
    const confirmAccount = async () => {
    try {
      
        const {data} = await clientAxios.get(`/auth/checked?token=${token}`)
       
        Swal.fire({
          icon: 'info',
          title: 'Tu cuenta ha sido confirmada',
          text: data.msg,
          confirmButtonText: "Iniciar Sesion"
        }).then(result=>{
          if(result.isConfirmed){
            navigate('/')
          }
        })
      } catch (error) {/* 
        console.log(error); */
        handleShowAlert(error.response?.data.msg)
      }
    }

  confirmAccount()
    
  }, [])
  
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
    }}>Confirma tu cuenta</h1>
    {
      alert.msg && (
        <>
        <Alert {...alert}/>
        <nav>
          
            <Link
            style={{
              textDecoration:"none",
              color:"white",
              fontFamily:"sans-serif",
              textTransform:"uppercase",
              fontSize:"15px",
              margin:"10px"
            }}
              to={"/register"}
            >
              ¿No tenés una cuenta? Registrate
            </Link>
            <Link
            style={{
              textDecoration:"none",
              color:"white",
              fontFamily:"sans-serif",
              textTransform:"uppercase",
              fontSize:"15px",
              margin:"10px"
            }}
              to={"/"}
            >
              ¿Estás registrado? Iniciá sesión
            </Link>
          </nav>
          </>
      )
    }
    
  </Container>
  )
}

