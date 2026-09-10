import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const {addToCart} = useCart()
    
  return (
    <div className='group relative bg-white border border-purple-100/80 rounded-2xl p-3 sm:p-4 shadow-[0_2px_12px_rgba(124,58,237,0.04)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.09)] hover:border-purple-200 transition-all duration-300 flex flex-col justify-between h-full'>
      <div>
        <div 
          className='aspect-square rounded-xl p-3 bg-purple-50/20 flex items-center justify-center overflow-hidden mb-3 group-hover:bg-purple-50/50 transition-colors cursor-pointer' 
          onClick={()=>navigate(`/products/${product.id}`)}
        >
          <img 
            src={product.image} 
            alt={product.title} 
            className='max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300'
          />
        </div>
        
        {product.category && (
          <span className='inline-block text-[10px] font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md mb-1.5'>
            {product.category}
          </span>
        )}
        <h2 
          className='line-clamp-2 text-xs sm:text-sm font-medium text-slate-800 hover:text-purple-600 transition-colors cursor-pointer mb-2 leading-snug'
          onClick={()=>navigate(`/products/${product.id}`)}
        >
          {product.title}
        </h2>
      </div>

      <div className='mt-2'>
        <div className='flex items-baseline gap-1.5 mb-3'>
          <span className='text-sm sm:text-base font-bold text-slate-900'>${product.price}</span>
          {product.discount ? (
            <span className='text-[11px] text-purple-700 font-semibold bg-purple-50 px-1.5 py-0.5 rounded'>
              {product.discount}% off
            </span>
          ) : null}
        </div>
        <button 
          onClick={()=>addToCart(product)} 
          className='bg-purple-600 hover:bg-purple-700 active:scale-[0.98] text-white text-xs sm:text-sm font-medium py-2 px-3 rounded-xl w-full cursor-pointer flex gap-1.5 items-center justify-center shadow-xs hover:shadow-purple-500/25 transition-all'
        >
          <IoCartOutline className='w-4 h-4' /> Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
