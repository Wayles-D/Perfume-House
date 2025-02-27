import React from 'react'

const AuthBtn = () => {
  return (
    <div>
        <div className='flex gap-[34px]'>
        <button className='w-[120px] h-[45px] bg-[#E6D2FF] rounded text-[#8D34FF] cursor-pointer'>Login</button>
        <button className='w-[120px] h-[45px] bg-[#8D34FF] rounded text-[#F5F5F5] cursor-pointer'>Sign Up</button>
    </div>
    </div>
  )
}

export default AuthBtn