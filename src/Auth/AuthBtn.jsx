import React from 'react'
import { Link } from 'react-router-dom'

const AuthBtn = () => {
  return (
    <>
    <div className='md:flex gap-[34px]'>
        <button className='w-[140px] md:w-[140px] h-[61px] bg-[#E6D2FF] rounded text-[#8D34FF] cursor-pointer'> 
          <Link to="/Auth/sign-up">
          Login
          </Link></button>
        <button className='w-[140px] h-[61px] bg-[#8D34FF] rounded text-[#F5F5F5] cursor-pointer'> <Link to="/Auth/sign-in" >Sign Up</Link></button>
    </div>
    </>
  )
}

export default AuthBtn