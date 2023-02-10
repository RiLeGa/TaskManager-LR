import { Container } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";

export const AuthLayout = () => {
  const{auth, loading} = useAuth()
  if(loading){
    return <Loading/>
  }
  return (
    <>
    {
      !auth._id?(
    
   <Container 
   style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth:"none",
    height:"100vh",
    background: "linear-gradient(45deg, red, blue)",
   }}
   >
    <Outlet/>
   </Container>
   )
   :
   (<Navigate to="/"/>)
}
  </>
  );
};