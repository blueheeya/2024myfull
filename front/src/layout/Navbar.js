import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const routes = [
        {to: "/login", name : "로그인" },
        {to: "/register", name : "회원가입" },
    ]
  return (
    <>
        <header className='w-full shadow-md'>
            <div className='container mx-auto flex justify-between'>
                <h1 className='font-semibold p-4'>오냥이네</h1>
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