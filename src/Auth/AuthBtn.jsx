import React from 'react'
import SignIn from './SignIn'
import SignOut from './SignOut'

const AuthBtn = () => {
  return (
    <div>
    <Link to="/SignIn" className="border border-purple-500 text-purple-500 px-4 py-2 rounded-lg">
        Sign In
      </Link>
    </div>
  )
}

export default AuthBtn