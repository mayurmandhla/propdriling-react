import React from 'react'

function Card({values, handleClick, index}) {
    const {image, name, profession, friends} = values;
  return (
    <div className='w-52 bg-zinc-200 rounded-m overflow-hidden'>
       <div className='w-full h-40 bg-sky-200'>
        <img className='w-full h-full object-cover object-[center_top]' src={image} alt="" />
       </div>
       <div className='w-full p-3'>
        <h3 className='font-semibold'>{name}</h3>
        <h5>{profession}</h5>
        <button onClick={()=>handleClick(index)} className={`px-3 py-1 text-xs text-white ${friends ? "bg-green-600" : "bg-blue-500"} font-semibold rounded-md mt-4`}>{friends === true ? "friend" : "Add friend"}</button>
       </div>
    </div>
  )
}

export default Card
