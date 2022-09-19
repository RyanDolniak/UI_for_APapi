import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./style.css";
const Student = () => {
  return (
    <>
      <nav style={{marginTop: 120}} >

        <Link to="/" style={{marginRight: 80}} >Home</Link>
        
        <Link to="Views" style={{marginRight:80}}>ViewUpdate</Link>

        <Link to="UpdateStatus" >UpdateStatus</Link>

      </nav>

      <Outlet />
    </>
  )
};

export default Student;
