import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'

const Category = () => {
    // const {categoryOnlyData} = getData()
    const navigate = useNavigate()
    const {data} = getData()

    const getUniqueCategory = (data, property) =>{
      let newVal = data?.map((curElem) =>{
          return curElem[property]
      })
      newVal = [...new Set(newVal)]
      return newVal
    }


  
    const categoryOnlyData = getUniqueCategory(data, "category")
  
  return (
    <div className='bg-white border-y border-purple-100/80 py-4 shadow-[0_2px_10px_rgba(124,58,237,0.02)]'>
       <div className='max-w-6xl mx-auto flex flex-wrap gap-3 items-center justify-center py-2 px-4'>
        {
            categoryOnlyData?.map((item, index)=>{
                return <div key={index}>
                    <button 
                      onClick={()=>navigate(`/category/${item}`)} 
                      className='text-xs font-semibold uppercase tracking-wider bg-purple-50 hover:bg-purple-600 text-purple-700 hover:text-white border border-purple-200/80 px-4 py-2 rounded-full cursor-pointer transition-all duration-200 shadow-2xs hover:shadow-md hover:shadow-purple-500/20'
                    >
                      {item}
                    </button>
                </div>
            })
        }
       </div>
    </div>
  )
}

export default Category
