import React from 'react'
import { Link, NavLink, Navigate } from 'react-router-dom'
// import auth from '../../../back/src/middleware/auth'

function Navbar() {
    const routes = [
        {to: "/login", name : "로그인" , auth:false },
        {to: "/register", name : "회원가입", auth:false },
        {to: "/company", name : "회사소개", auth:true },
    ]
  return (
    <>
        <header className='w-full shadow-md'>
            <div className='container mx-auto flex justify-between'>
                <h1 className='font-semibold p-4'><Link to='/'>오냥이네</Link></h1>
                <ul className='flex'>
                    {
                        routes.map((item,i)=>{
                            return (
                                <li key={i}><Link to={item.to} className="flex h-full p-4 items-center">{item.name}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        </header>
    </>
  )
}

export default Navbar