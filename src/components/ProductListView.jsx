import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductListView = ({product}) => {
  const navigate = useNavigate()
  const {addToCart} = useCart()

  return (
    <div className='bg-white border border-purple-100/80 hover:border-purple-200 rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row gap-5 items-center shadow-[0_2px_12px_rgba(124,58,237,0.03)] hover:shadow-[0_8px_20px_rgba(124,58,237,0.07)] transition-all mb-4'>
      <div 
        className='w-36 h-36 md:w-44 md:h-44 p-3 bg-purple-50/20 rounded-xl flex items-center justify-center flex-shrink-0 cursor-pointer overflow-hidden group'
        onClick={()=>navigate(`/products/${product.id}`)}
      >
        <img 
          src={product.image} 
          alt={product.title} 
          className='max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300' 
        />
      </div>
      <div className='flex-1 space-y-2 text-center sm:text-left'>
        <h2 
          className='font-semibold text-base md:text-lg text-slate-800 hover:text-purple-600 transition-colors cursor-pointer line-clamp-2' 
          onClick={()=>navigate(`/products/${product.id}`)}
        >
          {product.title}
        </h2>
        <div className='flex items-center justify-center sm:justify-start gap-2'>
          <span className='text-xl md:text-2xl font-bold text-slate-900'>${product.price}</span>
          {product.discount ? (
            <span className='text-xs font-semibold text-purple-700 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-full'>
              {product.discount}% off
            </span>
          ) : null}
        </div>
        <p className='text-xs text-slate-500 leading-relaxed'>
          Free expedited shipping with Pegasus Care. <br className='hidden sm:block' />
          Estimated delivery in <span className='font-semibold text-slate-700'>2-3 business days</span>.
        </p>
        <div className='pt-1'>
          <button 
            onClick={()=>addToCart(product)} 
            className='bg-purple-600 hover:bg-purple-700 active:scale-[0.98] text-white text-xs sm:text-sm font-medium px-5 py-2 rounded-xl cursor-pointer shadow-xs hover:shadow-purple-500/25 transition-all'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductListView
