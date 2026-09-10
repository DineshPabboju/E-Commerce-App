import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { MapPin } from 'lucide-react'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = ({location, getLocation, openDropdown, setOpenDropdown}) => {

    const {cartItem} = useCart()
    const [openNav, setOpenNav] = useState(false)
    
    const toggleDropdown = ()=>{
        setOpenDropdown(!openDropdown)
    }
    return (
        <header className='bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-purple-100/70 shadow-[0_2px_15px_rgba(124,58,237,0.04)] py-3 px-4 md:px-0 transition-all'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                {/* logo section */}
                <div className='flex gap-8 items-center'>
                    <Link to={'/'} className='flex items-center gap-2.5 group'>
                        <div className='w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-700 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-purple-500/25 group-hover:scale-105 transition-all'>
                            P
                        </div>
                        <span className='font-bold text-2xl tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors'>
                            Pegasus<span className='text-purple-600'>.</span>
                        </span>
                    </Link>

                    <div className='md:flex gap-1.5 cursor-pointer text-slate-600 hover:text-purple-700 items-center hidden transition-colors' onClick={toggleDropdown}>
                        <MapPin className='text-purple-600 w-4 h-4' />
                        <span className='text-xs font-medium max-w-[140px] truncate'>{location ? (
                            <span className='text-slate-800 font-semibold'>
                                {location.county || location.city || "My Location"}, {location.state || ""}
                            </span>
                        ) : "Select Location"}</span>
                        <FaCaretDown className='text-slate-400 text-xs'/>
                    </div>
                    {
                        openDropdown ? <div className='w-[270px] h-max shadow-xl z-50 bg-white fixed top-16 left-64 border border-purple-100 p-5 rounded-2xl'>
                         <h1 className='font-semibold mb-3 text-base text-slate-800 flex justify-between items-center'>
                             Change Location 
                             <span onClick={toggleDropdown} className='cursor-pointer text-slate-400 hover:text-slate-600 p-1'><CgClose/></span>
                         </h1>
                         <button onClick={getLocation} className='w-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium px-3 py-2 rounded-xl cursor-pointer transition-all shadow-sm'>Detect my location</button>
                        </div> : null
                    }
                </div>
                {/* menu section */}
                <nav className='flex gap-6 items-center'>
                    <ul className='md:flex gap-7 items-center text-sm font-medium hidden'>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "text-purple-700 font-semibold border-b-2 border-purple-600" : "text-slate-600 hover:text-purple-600"} pb-1 transition-all cursor-pointer`}><li>Home</li></NavLink>
                        <NavLink to={"/products"} className={({ isActive }) => `${isActive ? "text-purple-700 font-semibold border-b-2 border-purple-600" : "text-slate-600 hover:text-purple-600"} pb-1 transition-all cursor-pointer`}><li>Products</li></NavLink>
                        <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "text-purple-700 font-semibold border-b-2 border-purple-600" : "text-slate-600 hover:text-purple-600"} pb-1 transition-all cursor-pointer`}><li>About</li></NavLink>
                        <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "text-purple-700 font-semibold border-b-2 border-purple-600" : "text-slate-600 hover:text-purple-600"} pb-1 transition-all cursor-pointer`}><li>Contact</li></NavLink>
                    </ul>
                    <Link to={'/cart'} className='relative p-2 rounded-xl hover:bg-purple-50 transition-colors'>
                        <IoCartOutline className='h-6 w-6 text-slate-700 hover:text-purple-600 transition-colors' />
                        <span className='bg-purple-600 px-1.5 py-0.5 rounded-full absolute -top-1 -right-1 text-white text-[11px] font-bold min-w-[18px] text-center shadow-xs'>{cartItem.length}</span>
                    </Link>
                    <div className='hidden md:block'>
                        <SignedOut>
                            <SignInButton className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-xl text-xs font-semibold shadow-sm hover:shadow-purple-500/20 cursor-pointer transition-all"/>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                    {
                        openNav ? <HiMenuAlt3 onClick={()=>setOpenNav(false)} className='h-6 w-6 text-slate-800 md:hidden cursor-pointer'/>:<HiMenuAlt1 
                        onClick={()=>setOpenNav(true)}
                        className='h-6 w-6 text-slate-800 md:hidden cursor-pointer'/>
                    }
                </nav>
            </div>
            <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav}/>
        </header>
    )
}

export default Navbar
