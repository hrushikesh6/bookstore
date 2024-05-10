import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import Login from './Login'
import { useForm } from "react-hook-form"
import axois from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [authUser, setAuthUser] = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    }
    await axois.post("http://localhost:6700/user/signup", userInfo)
      .then((res) => {
        console.log(res.data)
        if (res.data) {
          toast.success("Signup Successfully")
          
          console.log('redirecting to /course')
          setAuthUser(res.data.user);
          navigate('/course');
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      }).catch((err) => {
        if(err.response){
          console.log(err)
          toast.error("Error: "+ err.response.data.message)
        }
      })
  };
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div
          className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕</Link >

              <h3 className="font-bold text-lg">Signup</h3>
              {/*username */}
              <div className='mt-4  space-y-2'>
                <span>Name</span>
                <br />
                <input type="Username"
                  placeholder='Enter your fullname'
                  className='w-80 px-3 border rounded-md outline-none dark:text-black'
                  {...register("fullname", { required: { value: true, message: "name is required" } })}
                />
                <br />
                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              {/*Email*/}
              <div className='mt-4  space-y-2'>
                <span>Email</span>
                <br />
                <input type="email"
                  placeholder='Enter your Email'
                  className='w-80 px-3 border rounded-md outline-none dark:text-black'
                  {...register("email", { required: { value: true, message: "email is required" } })}

                />
                <br />
                {errors.email &&
                  <span className='text-sm text-red-500'>
                    This field is required</span>}
              </div>
              {/*Password*/}
              <div className='mt-4  space-y-2'>
                <span>Password</span>
                <br />
                <input type="password" name="password"
                  placeholder='Enter your Password'
                  className='w-80 px-3 border rounded-md outline-none dark:text-black'
                  {...register("password", { required: true, meassage: "password is required" })}
                />
                <br />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              {/*Button*/}
              <div className='flex justify-around mt-4'>

                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                  Signup</button>
                <p className='text-x1'>Already registered?{" "}
                  <button
                    className='underline text-blue-500 cursor-pointer '
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>

              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
