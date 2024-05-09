import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login({ isLoginModalOpen, setIsLoginModalOpen }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // useEffect(() => {
    //   console.log(errors);
    
    // }, [errors]);
    

    const onSubmit = (data) => console.log(data)
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
