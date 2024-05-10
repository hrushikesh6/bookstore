import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Contact() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    

    const onSubmit = (data) => {
        console.log(data)
        navigate('/')   
    }
    return (
        <>
            <div className=" flex h-screen items-center justify-center">
                <div className='w-[600px]'>

                    <div className='mt-4  space-y-2'>

                        <div className='modal-box dark:text-black'>
 
                            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <Link
                                    to="/"
                                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                    ✕</Link >
                                <input type="text"
                                    placeholder='Enter your name'
                                    className='w-80 px-3 border rounded-md outline-none dark:text-black'
                                    {...register("password", { required: true, meassage: "password is required" })}
                                />
                                <br />
                                <br
                                />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}


                                <div>
                                    <input type="text"
                                        placeholder='Enter your email'
                                        className='w-80 px-3 border rounded-md outline-none dark:text-black'
                                        {...register("email", { required: { value: true, message: "email is required" } })}

                                    />
                                    <br />
                                    {errors.email &&
                                        <span className='text-sm text-red-500'>
                                            This field is required</span>}
                                </div>


                                <br />
                                <div>
                                    <input type="text"
                                        placeholder='Type messages'
                                        className='w-80 px-3 border rounded-md outline-none py-6 dark:text-black'
                                        {...register("messsage", { required: true, meassage: "message is required" })}
                                    />
                                    <br />
                                    {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                                </div>
                                <br />
                              

                                <button className='bg-blue-700 text-white rounded-md px-3 py-1 hover:bg-blue-500 duration-200'>
                                    Submeet
                                </button>
                              
                            </form>
                        </div>
                    </div>
                    <div />
                </div>

            </div >
        </>


    )
}

export default Contact
