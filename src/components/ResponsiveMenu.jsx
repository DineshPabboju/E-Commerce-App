import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const ResponsiveMenu = ({ openNav, setOpenNav }) => {
    const { user } = useUser()
    return (
        <div className={`${openNav ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-50 flex h-screen w-[75%] max-w-xs flex-col justify-between bg-white border-r border-purple-100 px-6 pb-6 pt-12 text-slate-800 md:hidden shadow-2xl transition-all duration-300`}>
            <div>
                <div className='flex items-center justify-start gap-3 pb-6 border-b border-purple-50'>
                    {
                        user ? <UserButton /> : <div className='w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold'><FaUserCircle size={32} /></div>
                    }
                    <div>
                        <h1 className='font-semibold text-slate-900'>{user ? `Hello, ${user.firstName}` : "Welcome to Pegasus"}</h1>
                        <h2 className='text-xs text-purple-600 font-medium'>Minimalist Tech Store</h2>
                    </div>
                </div>
                <nav className='mt-8'>
                    <ul className='flex flex-col gap-5 text-lg font-medium'>
                        <Link to={'/'} onClick={()=>setOpenNav(false)} className="cursor-pointer hover:text-purple-600 transition-colors"><li>Home</li></Link>
                        <Link to={"/products"} onClick={()=>setOpenNav(false)} className="cursor-pointer hover:text-purple-600 transition-colors"><li>Products</li></Link>
                        <Link to={"/about"} onClick={()=>setOpenNav(false)} className="cursor-pointer hover:text-purple-600 transition-colors"><li>About</li></Link>
                        <Link to={"/contact"} onClick={()=>setOpenNav(false)} className="cursor-pointer hover:text-purple-600 transition-colors"><li>Contact</li></Link>
                    </ul>
                </nav>
            </div>
            <div className='text-xs text-slate-400 pt-4 border-t border-purple-50'>
                Pegasus &copy; {new Date().getFullYear()}
            </div>
        </div>
    )
}

export default ResponsiveMenu
