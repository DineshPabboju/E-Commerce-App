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
      <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
        <button onClick={() => navigate('/')} className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'>
          <ChevronLeft /> Back
        </button>
        <div className='text-center text-red-500 font-semibold'>{error}</div>
      </div>
    )
  }

  return (
    <div>
      {
        searchData.length > 0 ? (
          <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
             <button onClick={()=>navigate('/')} className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'><ChevronLeft/> Back</button>
             {
              searchData.map((product, index) =>{
                return <ProductListView key={index} product={product}/>
              })
             }
          </div>
        ) : (
          <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
            <button onClick={() => navigate('/')} className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'>
              <ChevronLeft /> Back
            </button>
            <div className='text-center text-gray-500 font-semibold'>
              No products found in this category.
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CategoryProduct
