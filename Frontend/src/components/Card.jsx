import React from 'react'

function Card({item}) {
   
  return (
    <>
    <div className='mt-4 my-4 p-3'>
    <div className="card bg-base-100 w-80 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
    <figure>
      <img
        src={item.image}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
       {item.name}
        <div className="badge badge-secondary">{item.category}</div>
      </h2>
      <p>{item.title}</p>
      <div className="card-actions flex justify-between">
        <div className="badge badge-outline py-3 ">${item.price}</div>
        <div className="badge badge-outline py-4  cursor-pointer text-[13px] hover:bg-pink-500 duration-200 hover:text-white">Buy Now</div>
      </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default Card