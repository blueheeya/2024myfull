import React from "react";
import {Routes , Route ,NavLink , Outlet} from 'react-router-dom'
import './assets/css/style.scss'
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LonginPage from "./pages/LoginPage/LoginPage";
import Navbar from "./layout/Navbar"

function Layout() {
  return (
    <>
      <Navbar />
    </>
  )
}

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LonginPage />}></Route>
    </Routes>
    </>
  );
}

export default App;