import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from "../assets/Loading4.webm"
import { ChevronLeft } from 'lucide-react'
import ProductListView from '../components/ProductListView'

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [sortBy, setSortBy] = useState('default')
  const params = useParams()
  const category = params.category
  const navigate = useNavigate()

  const getFilterData = async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
      const data = res.data
      setSearchData(data)
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(error.response?.data?.message || 'Failed to fetch products. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const sortedData = React.useMemo(() => {
    if (!searchData.length) return [];
    
    const sorted = [...searchData];
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name-asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'name-desc':
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return sorted;
    }
  }, [searchData, sortBy]);

  useEffect(() => {
    getFilterData()
    window.scrollTo(0, 0)
  }, [category])

  const handleRetry = () => {
    getFilterData();
  }

  if (loading) {
    return (
      <div className='flex items-center justify-center h-[400px]'>
        <video muted autoPlay loop>
          <source src={Loading} type='video/webm' />
        </video>
      </div>
    )
  }

  if (error) {
    return (
      <div className='max-w-6xl mx-auto mt-8 mb-16 px-4'>
        <button onClick={() => navigate('/')} className='bg-white hover:bg-purple-50 text-purple-700 border border-purple-200 px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer flex gap-1.5 items-center transition-all shadow-2xs mb-6'>
          <ChevronLeft size={16} /> Back to Store
        </button>
        <div className='text-center text-purple-700 bg-purple-50 border border-purple-200 p-4 rounded-2xl font-medium'>{error}</div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-white'>
      <div className='max-w-6xl mx-auto mt-6 mb-16 px-4'>
        <div className='flex items-center justify-between border-b border-purple-100 pb-5 mb-6'>
          <div>
            <button onClick={()=>navigate('/')} className='bg-white hover:bg-purple-50 text-purple-700 border border-purple-200 px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer flex gap-1.5 items-center transition-all shadow-2xs mb-3'>
              <ChevronLeft size={16}/> Back
            </button>
            <h1 className='text-2xl md:text-3xl font-bold capitalize text-slate-900'>{category}</h1>
            <p className='text-xs text-slate-500 mt-0.5'>{searchData.length} items found</p>
          </div>
        </div>

        {
          searchData.length > 0 ? (
            <div className='space-y-4'>
               {
                searchData.map((product, index) =>{
                  return <ProductListView key={index} product={product}/>
                })
               }
            </div>
          ) : (
            <div className='text-center py-16 bg-purple-50/20 border border-purple-100 rounded-3xl p-8'>
              <p className='text-slate-500 font-medium text-sm'>
                No products found in this category.
              </p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default CategoryProduct
