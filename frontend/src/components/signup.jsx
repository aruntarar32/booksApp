import React, { useState } from "react";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import { Link } from "react-router-dom";
import Login from "./Login"; // Assuming Login is a separate component/modal

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const onSubmit = (data) => console.log(data);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <div className="relative">
            {/* Close Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center w-full">
            <a className="text-2xl font-bold cursor-pointer pb-2 mb-6 text-pink-700" href="/">
              Logo
            </a>

            <div className="w-full">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="label" htmlFor="f_Name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="input outline-none w-full mt-1 p-2 border rounded-md"
                    name="f_Name"
                    placeholder="Enter Your Full Name"
                    {...register("f_Name", { required: "Full name is required" })}
                  />
                  {errors.f_Name && (
                    <span className="text-red-500 text-sm mt-2">{errors.f_Name.message}</span>
                  )}
                </div>

                <div className="mt-4">
                  <label className="label" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="input outline-none w-full mt-1 p-2 border rounded-md"
                    name="email"
                    placeholder="Enter Your Email"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-2">{errors.email.message}</span>
                  )}
                </div>

                <div className="mt-4">
                  <label className="label" htmlFor="password">
                    Your Password
                  </label>
                  <input
                    type="password"
                    className="input outline-none w-full mt-1 p-2 border rounded-md"
                    name="password"
                    placeholder="Enter Your Password"
                    {...register("password", { required: "Password is required" })}
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm mt-2">{errors.password.message}</span>
                  )}
                </div>

                <button className="mt-6 px-3 py-2 w-full rounded-md bg-pink-500 text-white hover:bg-pink-700 duration-300 hover:text-white">
                  Signup
                </button>

                <p className="mt-4 text-center text-md">
                  If you already have an account?{" "}
                  <span className="text-blue-600 font-semibold cursor-pointer">
                    <button
                      className="underline cursor-pointer"
                      onClick={openLoginModal} // Open the login modal
                    >
                      Login
                    </button>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal (only when open) */}
      {isLoginModalOpen && <Login closeModal={closeLoginModal} />}
    </>
  );
}

export default Signup;
