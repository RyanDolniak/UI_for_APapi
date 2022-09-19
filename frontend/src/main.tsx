import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

// Styles
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";

// Colors
const theme = createTheme({
  palette: {
    primary: {
      light: "#DCD3EB",
      main: "#51219D",
      dark: "#1B005C",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

// Components
import Router from "$lib/Router";
import Footer from "$lib/Footer";
import Navbar from "$lib/Navbar";

// Routes
import NotFound from "$routes/NotFound";
import Home from "$routes/Home";
import Login from "$routes/Login";
import Register from "@/routes/register";
import RegisterParent from "@/routes/register/Parent";
import RegisterStudent from "@/routes/register/Student";
import Student from "$routes/Student";
import Views from "$routes/Views";
import UpdateStatus from "$routes/UpdateStatus";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />

      <ThemeProvider theme={theme}>
        <Navbar />

        <Box minHeight="100vh">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="register/parent" element={<RegisterParent />} />
            <Route path="register/student" element={<RegisterStudent />} />
            <Route path="student" element={<Student />} />
            <Route path="Views" element={<Views />} />
            <Route path="UpdateStatus" element={<UpdateStatus />} />
          </Routes>
        </Box>

        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
