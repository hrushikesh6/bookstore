import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axois from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

function Login({ isLoginModalOpen, setIsLoginModalOpen }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [authUsers, setAuthUser] = useContext(AuthContext);

    const navigate = useNavigate();
    // useEffect(() => {
    //   console.log(errors);
    
    // }, [errors]);
    

    const onSubmit =async (data) => {
        const userInfo = {
            
            email: data.email,
            password: data.password
          }

          await axois
          .post("http://localhost:6700/user/login", userInfo)
            .then((res) => {
              console.log(res.data)
              if (res.data) {
                
                toast.success('Login Successfully !');
                
                
              }
              localStorage.setItem("Users",JSON.stringify(res.data.user));
              window.location.reload();

              setAuthUser(res.data.user)
              navigate('/course')
            }).catch((err) => {
              if(err.response){
                console.log(err)
                toast
                toast.error("Error: "+ err.response.data.message);
              }
            })
    }

    return (
        <>
            <div>
                <dialog id="my_modal_3" className={` ${isLoginModalOpen ? "flex" : ""}`}>
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link
                                onClick={() => setIsLoginModalOpen(false)}
                                to="/"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕
                            </Link>
                            {/*Email*/}
                            <div className='mt-4  space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email"
                                    placeholder='Enter your Email'
                                    className='w-80 px-3 border rounded-md outline-none'
                                    {...register("email", { required: { value: true, message: "email is required"} })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}
                                {/*Password*/}
                                <div className='mt-4  space-y-2'>
                                    <span>Password</span>
                                    <br />
                                    <input type="password" name="password"
                                        placeholder='Enter your Password'
                                        className='w-80 px-3 border rounded-md outline-none'
                                        {...register("password", { required: true })}
                                    />
                                    <br />
                                    {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                                </div>
                                <div className='flex justify-around mt-4'>
                                    {/*Button*/}
                                    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                        Login</button>
                                    <p>Not registered?
                                        <Link
                                            to="/signup"
                                            className='underline text-blue-500 cursor-pointer '>
                                            Signup
                                        </Link>{" "}
                                    </p>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </dialog>

            </div>
        </>
    )
}

export default Login
