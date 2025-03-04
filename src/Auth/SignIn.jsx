import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../utils/ValidationSchema";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <main className="main-wrapper h-screen bg-no-repeat bg-cover rounded-xl">
        <div className="container mx-auto pt-6 pb-10 px-8 md:pl-20 md:flex gap-15">
          <h1 className="text-white">logo</h1>
          <form className="bg-white p-8" onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-2xl md:text-3xl font-bold mb-2"'>
              Get Started
            </h1>
            <p>Let's get started by filling out the informations below.</p>
            <div className="py-4 md:flex gap-4">
              <div>
                <h2 className="pb-1">Email</h2>
                <input
                  className="w-100 p-2 sm:w-"
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your Email"
                  {...register("Enter your email")}
                />
                <p className="text-red-600">{errors.email?.message}</p>
              </div>
            </div>
            <div className="py-3">
              <h2 className="pb-1">Password</h2>
              <input
                className="w-full p-2"
                type="password"
                name=""
                id=""
                placeholder="Enter your password"
                {...register("password")}
              />
              <p className="text-red-600">{errors.password?.message}</p>
              <input type="checkbox" id="remember" className="accent-primary" />
              <label htmlFor="">Remember me</label>
              <p className="ml-70 mb-8 text-red-600">Forgot password</p>
            </div>
            <div></div>
            <button className="btn btn-primary w-full">Sign In</button>
            <div className="divider">or</div>
            <button className="w-full btn bg-white text-black border-black">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Continue with Google
            </button>
          </form>
        </div>
              
      </main>
    </>
  );
};

export default SignIn;
