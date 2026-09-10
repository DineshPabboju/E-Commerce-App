import React from 'react'
import { FaFilter } from 'react-icons/fa6'
import { getData } from '../context/DataContext'


const MobileFilter = ({ openFilter, setOpenFilter, search, setSearch, brand, setBrand, priceRange, setPriceRange, category, setCategory, handleBrandChange, handleCategoryChange }) => {
    const { categoryOnlyData, brandOnlyData } = getData()

    const toggleFilter = ()=>{
        setOpenFilter(!openFilter)
    }
    return (
        <>
            <div className='bg-white border border-purple-100/80 rounded-xl flex justify-between items-center md:hidden px-4 py-3 mt-4 shadow-2xs' onClick={toggleFilter}>
                <h2 className='font-semibold text-sm text-slate-800 flex items-center gap-2'>
                    <FaFilter className='text-purple-600 text-xs' /> Filters & Search
                </h2>
                <span className='text-xs text-purple-600 font-medium cursor-pointer'>
                    {openFilter ? 'Close' : 'Filter'}
                </span>
            </div>
            {
                openFilter ? <div className='bg-white border border-purple-100 rounded-2xl p-4 mt-2 md:hidden shadow-lg space-y-4 animate-in fade-in duration-200'>
                    <div>
                        <label className='block text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5'>Search</label>
                        <input type="text"
                            placeholder='Search products...'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className='bg-purple-50/40 border border-purple-200 rounded-xl p-2 text-xs w-full text-slate-800 focus:outline-none focus:border-purple-500'
                        />
                    </div>
                    {/* category only data */}
                    <div>
                        <h3 className='font-bold text-xs uppercase tracking-wider text-slate-900 mb-2'>Category</h3>
                        <div className='flex flex-wrap gap-2'>
                            {
                                categoryOnlyData?.map((item, index) => {
                                    return (
                                        <button 
                                            key={index} 
                                            onClick={() => {
                                                handleCategoryChange({ target: { value: item } });
                                            }}
                                            className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer capitalize ${
                                                category === item 
                                                    ? 'bg-purple-600 text-white border-purple-600 shadow-2xs' 
                                                    : 'bg-purple-50/50 text-slate-600 border-purple-100 hover:bg-purple-100'
                                            }`}
                                        >
                                            {item}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* brand only data */}
                    <div>
                        <h3 className='font-bold text-xs uppercase tracking-wider text-slate-900 mb-1.5'>Brand</h3>
                        <select
                            className='bg-purple-50/40 border border-purple-200 rounded-xl p-2 text-xs w-full text-slate-800 focus:outline-none focus:border-purple-500'
                            value={brand}
                            onChange={handleBrandChange}
                        >
                            {
                                brandOnlyData?.map((item, index) => {
                                    return <option key={index} value={item}>{item.toUpperCase()}</option>
                                })
                            }
                        </select>
                    </div>
                    {/* price range  */}
                    <div>
                        <div className='flex justify-between text-xs text-slate-700 font-medium mb-1'>
                            <span className='font-bold uppercase tracking-wider text-slate-900'>Price</span>
                            <span className='text-purple-700 font-semibold'>${priceRange[0]} - ${priceRange[1]}</span>
                        </div>
                        <input type="range" min="0" max="5000" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} className='accent-purple-600 cursor-pointer w-full' />
                    </div>
                    <button className='w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-4 py-2 text-xs font-semibold shadow-xs transition-all cursor-pointer'
                        onClick={() => { setSearch(''); setCategory('All'); setBrand('All'); setPriceRange([0, 5000]); setOpenFilter(false) }}
                    >Reset Filters</button>
                </div> : null
            }
        </>
    )
}

export default MobileFilter
