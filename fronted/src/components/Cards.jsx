import React from 'react'
import list from '../../public/list.json';

function Cards({ item }) {
    return (
        <>
            <div className='mt-4 my-3 p-3'>
                <div className="card w-92 hover:scale-105 duration-200   bg-base-100 shadow-xl  dark:bg-slate-900 dark:text-white dark:border">
                    <figure><img src={item.images} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>         
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white p-2 duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
