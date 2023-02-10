
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import Loading from "../components/Loading";
import { Sidebar } from "../components/Sidebar";
import useAuth from "../hooks/useAuth";

export const ProtectedLayout = () => {
  const { auth, loading } = useAuth();

  if (loading) {
    return <Loading/>;
  }

  return (
    <>
      {auth._id ? (
       <div  style={{ background: "linear-gradient(45deg, red, blue)"}}>
       <Header />
        
       <div >
         <Sidebar />
         <main style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"center",
          width:"100%"
         }} >
           <Outlet/>
         </main>
       </div>
       
     </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
