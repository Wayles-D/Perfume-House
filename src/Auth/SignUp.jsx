import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { signUpSchema } from '../utils/ValidationSchema';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  })
  const onSubmit = (data) => console.log(data)
  
  return (
    <>
    <main className="main-wrapper h-screen bg-no-repeat bg-cover">
        <div className="container mx-auto pt-6 pb-10 px-8 md:pl-20 md:flex gap-15">
          <h1 className="text-white">logo</h1>
          <form className="bg-white p-8" onSubmit={handleSubmit(onSubmit)} >
            <h1 className='text-2xl md:text-3xl font-bold mb-2"'>Get Started</h1>
            <p>Let's get started by filling out the informations below.</p>
            <div className="py-4 md:flex gap-4">
              <div>
              <input className='p-2' type="text" name="" id="" placeholder="first name" {...register("firstName")} />
              <p className='text-red-600'>{errors.firstName?.message}</p>  
              </div>
              <div>
              <input className='p-2' type="text" name="" id="" placeholder="last name"{...register("lastName")} />
              <p className='text-red-600'>{errors.lastName?.message}</p>
              </div>
            </div>
            <div className="py-3">
              <div>
              <input className="w-full p-2 h-10" type="email" name="" id="" placeholder="email"{...register("email")}  />
              <p className='text-red-600'>{errors.email?.message}</p>
              </div>
            </div>
            <div className="py-3">

              <input className="w-full p-2 h-10" type="password" name="" id="" placeholder="password"{...register("password")} />
              <p className='text-red-600'>{errors.password?.message}</p>
            </div>
            <div className="py-3">

              <input className="w-full p-2 h-10" type="password" name="" id="" placeholder="confirm password"{...register("cPassword")} />
              <p className='text-red-600'>{errors.cPassword?.message}</p>
            </div>

              <button className="btn btn-primary w-full">Primary</button>


          </form>
        </div>
      </main>
    </>
  )
}

export default SignUp;