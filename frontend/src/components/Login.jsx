import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

function Login() {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return (
    <>
      <div className="modal">
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form  method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg text-center">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center items-center">
              <div className="w-full max-w-md p-6 rounded-lg shadow-md">
                <div>
                  <label className="label" htmlFor="">
                    Please Enter Your Email
                  </label>
                  <input
                    type="email"
                    className="input w-full p-2 border rounded-md outline-none"
                    placeholder="Type here"
                    {...register("email", { required: true })}
                  />
                   {errors.email && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                </div>

                <div className="mt-6">
                  <label className="label" htmlFor="">
                    Please Enter Your Password
                  </label>
                  <input
                    type="password"
                    className="input outline-none w-full p-2 border rounded-md"
                    placeholder="Type here"
                    {...register("password", { required: true })}
                  />
                   {errors.password && <span className="text-red-500 text-sm mt-2">This field is required</span>}
                </div>

                <button className="mt-6 px-3 py-2 w-full rounded-md bg-pink-500 text-white hover:bg-pink-700 duration-300 hover:text-white">
                  Login
                </button>

                <p className="mt-4 text-center">
                  Not registered?{" "}
                  <Link to="/Signup" className="text-blue-600 font-semibold underline cursor-pointer"> Signup</Link>
                </p>
              </div>
            </div>
             </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
