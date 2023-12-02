import React from 'react'

const DataFromCompany = ({title, type}) => {
  return (
    <div className=' h-32 rounded-[5px] flex flex-col justify-center items-center gap-2  hover:bg-gray-700 group transition-colors'>
         <p className='text-4xl text-gray-600 group-hover:text-gray-300'>{title}</p>
        <h3 className='font-[200] text-gray-400 text-lg'>{type}</h3>

    </div>
  )
}

export default DataFromCompany
