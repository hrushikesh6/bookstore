import React from 'react'
import Cards from './Cards';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
function Course() {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {

            const res = axios.get("http://localhost:6700/book")
                .then(res => {
                    console.log(res.data)
                    setBook(res.data.books)
                })
                .catch(err => {
                    console.log(err)
                })

            // setBook(res.data)

        };
        getBook();
    }, [])
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>
                        We are delighted to have you {" "}
                        <span className='text-pink-500'>
                            Here! :
                        </span>
                    </h1>
                    <p className='mt-12'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ,assumenda? Repelludus,iste corrupted? Tempore laudantium repellendus accusamus sed architecto odio,nisi expeditaquas quibusdam nesciunt debitis dolore non aspernatur presenation assumenda sint quibusdam, perspiciatis ,explicabo sequi fugiat amet eos aut.Nobis quisquim reiciendis sunt quis sed magnam consquatur!
                    </p>
                    <Link to="/">
                        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>
                            Back
                        </button>
                    </Link>

                </div >
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        book.map((item) => (
                            <Cards
                                key={item.id} item={item}

                            />
                        ))
                    }
                </div>
            </div>
        </>

    )
}

export default Course
