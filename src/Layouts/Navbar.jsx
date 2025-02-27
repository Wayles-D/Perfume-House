import React from 'react'
import { Outlet } from 'react-router-dom'
import Navlogo from "../assets/Group.png"
import AuthBtn from '../Components/AuthBtn'
import Menuimg from '../assets/Vector.svg'
const Navbar = () => {
  return (
    <>
   <nav className='flex justify-between items-center  container mx-auto p-[25px] md:py-[33px] md:px-[99px]'>
    {/* div-1 for nav logo */}
    <div className='flex items-center gap-4'>
    <img src={Navlogo} alt="Nav-logo" />
    <h2 className='hidden md:block'>Perfume House</h2>
    </div>
    {/* div-2, for auth btns */}
    <div>
        {/* div for btns */}
        <div className='hidden md:block'>
            <AuthBtn/>
        </div>
        {/* div for menu/ hamburger img */}
        <div className='md:hidden'>
            <img src={Menuimg} alt="menu-img" />
        </div>
    </div>
   </nav>
   <Outlet/>
    </>
  )
}

export default Navbar