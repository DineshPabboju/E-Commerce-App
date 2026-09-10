import React from 'react'
import { getData } from '../context/DataContext'

const FilterSection = ({search, setSearch, brand, setBrand, priceRange, setPriceRange, category, setCategory, handleBrandChange, handleCategoryChange}) => {
    const { categoryOnlyData, brandOnlyData } = getData()
    return (
        <div className='bg-white border border-purple-100/90 rounded-2xl p-5 shadow-[0_2px_15px_rgba(124,58,237,0.03)] h-max hidden md:block w-64 flex-shrink-0'>
            <div className='mb-2'>
                <label className='block text-xs font-bold uppercase tracking-wider text-slate-900 mb-2'>Search</label>
                <input 
                    type="text" 
                    placeholder='Search products...' 
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)} 
                    className='w-full bg-purple-50/40 border border-purple-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all' 
                />
            </div>

            {/* category only data */}
            <h3 className='mt-5 font-bold text-xs uppercase tracking-wider text-slate-900'>Category</h3>
            <div className='flex flex-col gap-2 mt-2.5 max-h-48 overflow-y-auto pr-1'>
                {
                    categoryOnlyData?.map((item, index) => {
                        return (
                            <label key={index} className='flex items-center gap-2 cursor-pointer group'>
                                <input 
                                    type="checkbox" 
                                    name={item} 
                                    checked={category === item} 
                                    value={item} 
                                    onChange={handleCategoryChange}
                                    className='accent-purple-600 rounded cursor-pointer h-3.5 w-3.5'
                                />
                                <span className={`text-xs capitalize transition-colors ${category === item ? 'text-purple-700 font-semibold' : 'text-slate-600 group-hover:text-purple-600'}`}>
                                    {item}
                                </span>
                            </label>
                        )
                    })
                }
            </div>

            {/* brand only data */}
            <h3 className='mt-5 font-bold text-xs uppercase tracking-wider text-slate-900 mb-2'>Brand</h3>
             <select 
                 className='w-full bg-purple-50/40 border border-purple-200 rounded-xl p-2 text-xs text-slate-800 focus:outline-none focus:border-purple-500' 
                 value={brand}
                 onChange={handleBrandChange}
             >
                {
                    brandOnlyData?.map((item, index)=>{
                        return (<option key={index} value={item}>{item}</option>)
                    })
                }
             </select>

             {/* price range  */}
             <h3 className='mt-5 font-bold text-xs uppercase tracking-wider text-slate-900 mb-2'>Price Range</h3>
             <div className='flex flex-col gap-2'>
                <div className='flex justify-between text-xs text-slate-600 font-medium'>
                    <span>${priceRange[0]}</span>
                    <span className='text-purple-700 font-semibold'>${priceRange[1]}</span>
                </div>
                <input 
                    type="range" 
                    min="0" 
                    max="5000" 
                    value={priceRange[1]} 
                    onChange={(e)=>setPriceRange([priceRange[0], Number(e.target.value)])} 
                    className='accent-purple-600 cursor-pointer w-full'
                />
             </div>

             <button 
                 className='w-full bg-purple-50 hover:bg-purple-600 text-purple-700 hover:text-white border border-purple-200 rounded-xl px-3 py-2 text-xs font-semibold transition-all mt-6 cursor-pointer shadow-2xs'
                 onClick={()=>{setSearch(''); setCategory('All'); setBrand('All'); setPriceRange([0,5000])}}
             >
                 Reset Filters
             </button>
        </div>
    )
}

export default FilterSection
