import React from 'react'
import { useNavigate } from 'react-router-dom'

const Breadcrums = ({title}) => {
    const navigate = useNavigate()
  return (
    <div className='max-w-6xl mx-auto my-6 px-4 md:px-0'>
      <div className='text-xs text-slate-500 font-medium flex items-center gap-2 flex-wrap'>
        <span className='cursor-pointer hover:text-purple-600 transition-colors' onClick={()=>navigate('/')}>Home</span>
        <span>/</span>
        <span className='cursor-pointer hover:text-purple-600 transition-colors' onClick={()=>navigate('/products')}>Products</span>
        <span>/</span>
        <span className='text-purple-700 font-semibold line-clamp-1 max-w-[280px] sm:max-w-none'>{title}</span>
      </div>
    </div>
  )
}

export default Breadcrums
