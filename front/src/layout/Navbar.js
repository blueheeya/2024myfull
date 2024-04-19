// import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../store/thunkFunctions'

function Navbar() {
    const routes = [
        {to: "/login", name : "로그인" , auth:false },
        {to: "/register", name : "회원가입", auth:false },
        {to: "/company", name : "회사소개", auth:true },
        {to: "/profile", name : "정보수정", auth:true },
        {to: "", name : "로그아웃", auth:true },
        
    ]
    const dispatch = useDispatch()
    const navigate = useNavigate();
    function hendeLogout () {
        dispatch(logoutUser()).then(()=>{
            navigate("/");
        });
    }
    const isAuth =useSelector((state)=>{return state.user?.isAuth})
  return (
    <>
        <header className='w-full shadow-md'>
            <div className='container mx-auto flex justify-between'>
                <h1 className='font-semibold p-4'><Link to='/'>회사소개</Link></h1>
                <ul className='flex'>
                    {
                        routes.map(({to,name,auth})=>{
                            if(isAuth !== auth) return null
                            if(name === '로그아웃') {
                                return (
                                    <li key={name}><Link to={to} onClick={hendeLogout} className="flex h-full p-4 items-center">{name}</Link></li>
                                )
                            } else {
                                return (
                                    <li key={name}><Link to={to} className="flex h-full p-4 items-center">{name}</Link></li>
                                )
                            } 
                        })
                    }
                </ul>
            </div>
        </header>
    </>
  )
}

export default Navbar