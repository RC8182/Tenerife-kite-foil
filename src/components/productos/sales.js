import React from 'react'

export const Sales = ({title1, title2, discount}) => {
  return (
    <div className='flex border-4 border-blue-500 rounded-xl'>
    <div className="m-2 flex flex-col text-orange-500 justify-center items-center"> 
        <div className='text-blue-700 text-xl'>{title1}</div>
    <div className='text-6xl font-bold'>{`${discount}%`}</div>
        <div className='text-xs text-blue-700'>{title2}</div>
    </div>
</div>
  )
}
