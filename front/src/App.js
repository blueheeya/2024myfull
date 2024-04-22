import React, { useEffect } from "react";
import {Routes , Route ,NavLink , Outlet, useLocation} from 'react-router-dom'
import './assets/css/style.scss'
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LonginPage from "./pages/LoginPage/LoginPage";
import Navbar from "./layout/Navbar"
import { useDispatch, useSelector } from "react-redux";
import {authUser} from './store/thunkFunctions'
// import userRouter from "../../back/src/routers/userRouter";
import Footer from "./layout/Footer";
import CompanyPage from "./pages/companyPage/CompanyPage";
import NotAuthRouter from "./components/NotAuthRouter";
import ProtectedRouter from "./components/ProtectedRouter";
import ProfilePage from "./pages/Profile/ProfilePage";
import MainPage from "./layout/Main/MainPage";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const {pathname} = useLocation();
    useEffect(()=>{
        if(isAuth) {
            dispatch(authUser());
        }
    },[isAuth,dispatch,pathname])
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
          <Route element={<NotAuthRouter isAuth={isAuth}/>} >
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LonginPage />}></Route>
        </Route>
        <Route element={<ProtectedRouter isAuth={isAuth} />}>
          <Route path="/company" element={<CompanyPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;