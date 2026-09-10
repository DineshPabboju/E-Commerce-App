import React from 'react'
import { useCart } from '../context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import emptyCart from "../assets/empty-cart.png"

const Cart = ({location, getLocation}) => {
  const { cartItem , updateQuantity, deleteItem} = useCart()
  const {user} = useUser()
  const navigate = useNavigate()
  

  const totalPrice = cartItem.reduce((total, item) => total + item.price, 0)
  return (
    <div className='my-10 max-w-6xl mx-auto px-4 md:px-0 min-h-[60vh]'>
      {
        cartItem.length > 0 ? <div>
          <div className='border-b border-purple-100 pb-4 mb-6'>
            <h1 className='font-bold text-2xl md:text-3xl text-slate-900 tracking-tight'>Shopping Bag</h1>
            <p className='text-xs text-slate-500 mt-0.5'>{cartItem.length} items in your order</p>
          </div>
          <div>
            <div className='space-y-3'>
              {cartItem.map((item, index) => {
                return <div key={index} className='bg-white border border-purple-100/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_2px_12px_rgba(124,58,237,0.03)]'>
                  <div className='flex items-center gap-4 w-full sm:w-auto'>
                    <div className='w-20 h-20 p-2 bg-purple-50/30 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-50'>
                      <img src={item.image} alt={item.title} className='max-h-full max-w-full object-contain' />
                    </div>
                    <div>
                      <h2 className='md:w-[320px] font-medium text-slate-800 text-sm line-clamp-2'>{item.title}</h2>
                      <p className='text-purple-700 font-bold text-base mt-1'>${item.price}</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto'>
                    <div className='bg-purple-50 border border-purple-200 text-purple-900 flex items-center gap-3 px-3 py-1 rounded-xl font-bold text-sm'>
                      <button onClick={()=>updateQuantity(cartItem, item.id, "decrease")} className='cursor-pointer text-purple-600 hover:text-purple-900 px-1'>-</button>
                      <span className='min-w-[16px] text-center'>{item.quantity}</span>
                      <button onClick={()=>updateQuantity(cartItem, item.id, "increase")} className='cursor-pointer text-purple-600 hover:text-purple-900 px-1'>+</button>
                    </div>
                    <button 
                      onClick={()=>deleteItem(item.id)} 
                      className='w-9 h-9 rounded-xl bg-purple-50/50 hover:bg-purple-100 text-purple-600 flex items-center justify-center transition-colors cursor-pointer'
                      title="Remove item"
                    >
                      <FaRegTrashAlt className='text-sm' />
                    </button>
                  </div>
                </div>
              })}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
              <div className='bg-white border border-purple-100/90 rounded-3xl p-6 sm:p-8 shadow-[0_2px_15px_rgba(124,58,237,0.03)] space-y-4'>
                <h2 className='text-slate-900 font-bold text-lg'>Shipping Address</h2>
                <div className='flex flex-col space-y-1.5'>
                  <label className='text-xs font-semibold uppercase tracking-wider text-slate-700'>Full Name</label>
                  <input type="text" placeholder='Your full name' className='bg-purple-50/30 border border-purple-200 rounded-xl px-3.5 py-2 text-xs text-slate-800' defaultValue={user?.fullName || ''}/>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <label className='text-xs font-semibold uppercase tracking-wider text-slate-700'>Street Address</label>
                  <input type="text" placeholder='Enter street address' className='bg-purple-50/30 border border-purple-200 rounded-xl px-3.5 py-2 text-xs text-slate-800' defaultValue={location?.county || ''}/>
                </div>
                <div className='flex w-full gap-4'>
                  <div className='flex flex-col space-y-1.5 w-full'>
                    <label className='text-xs font-semibold uppercase tracking-wider text-slate-700'>State</label>
                    <input type="text" placeholder='State' className='bg-purple-50/30 border border-purple-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 w-full' defaultValue={location?.state || ''}/>
                  </div>
                  <div className='flex flex-col space-y-1.5 w-full'>
                    <label className='text-xs font-semibold uppercase tracking-wider text-slate-700'>Postal Code</label>
                    <input type="text" placeholder='Postal Code' className='bg-purple-50/30 border border-purple-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 w-full' defaultValue={location?.postcode || ''}/>
                  </div>
                </div>
                <div className='flex w-full gap-4'>
                  <div className='flex flex-col space-y-1.5 w-full'>
                    <label className='text-xs font-semibold uppercase tracking-wider text-slate-700'>Country</label>
                    <input type="text" placeholder='Country' className='bg-purple-50/30 border border-purple-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 w-full' defaultValue={location?.country || ''}/>
                  </div>
                  <div className='flex flex-col space-y-1.5 w-full'>
                    <label className='text-xs font-semibold uppercase tracking-wider text-slate-700'>Phone</label>
                    <input type="text" placeholder='Phone number' className='bg-purple-50/30 border border-purple-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 w-full' />
                  </div>
                </div>
                <div className='pt-2 flex items-center justify-between gap-3'>
                  <button className='bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold px-5 py-2 rounded-xl transition-all shadow-xs cursor-pointer'>
                    Save Details
                  </button>
                  <button onClick={getLocation} className='bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer'>
                    Auto-detect Location
                  </button>
                </div>
              </div>

              <div className='bg-white border border-purple-100/90 rounded-3xl p-6 sm:p-8 shadow-[0_2px_15px_rgba(124,58,237,0.03)] space-y-4 h-max'>
                <h2 className='text-slate-900 font-bold text-lg'>Order Summary</h2>
                <div className='space-y-3 text-sm'>
                  <div className='flex justify-between items-center text-slate-600'>
                    <span className='flex gap-2 items-center'><LuNotebookText className='text-purple-600' />Subtotal</span>
                    <span className='font-semibold text-slate-800'>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between items-center text-slate-600'>
                    <span className='flex gap-2 items-center'><MdDeliveryDining className='text-purple-600' />Standard Shipping</span>
                    <span className='text-purple-700 font-semibold'><span className='text-slate-400 line-through text-xs mr-1'>$25</span> FREE</span>
                  </div>
                  <div className='flex justify-between items-center text-slate-600'>
                    <span className='flex gap-2 items-center'><GiShoppingBag className='text-purple-600' />Care & Handling</span>
                    <span className='font-semibold text-slate-800'>$5.00</span>
                  </div>
                </div>

                <div className='border-t border-purple-100 pt-4'>
                  <div className='flex justify-between items-center'>
                    <span className='font-bold text-base text-slate-900'>Total</span>
                    <span className='font-bold text-2xl text-purple-700'>${(totalPrice + 5).toFixed(2)}</span>
                  </div>
                </div>

                <div className='pt-2'>
                  <label className='block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2'>Promo Code</label>
                  <div className='flex gap-2'>
                    <input type="text" placeholder='PEGA2026' className='bg-purple-50/30 border border-purple-200 rounded-xl px-3 py-2 text-xs w-full text-slate-800 focus:outline-none focus:border-purple-500'/>
                    <button className='bg-purple-50 hover:bg-purple-600 text-purple-700 hover:text-white border border-purple-200 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer'>
                      Apply
                    </button>
                  </div>
                </div>
                <button className='bg-purple-600 hover:bg-purple-700 active:scale-[0.99] text-white text-sm font-semibold py-3.5 rounded-xl w-full cursor-pointer mt-4 shadow-sm hover:shadow-purple-500/25 transition-all'>
                  Proceed to Checkout &rarr;
                </button>
              </div>
            </div>
          </div>
        </div> : <div className='flex flex-col gap-4 justify-center items-center py-20'>
          <div className='w-48 h-48 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center p-6 mb-2'>
            <img src={emptyCart} alt="Empty Cart" className='max-h-full max-w-full object-contain' />
          </div>
          <h2 className='text-slate-900 font-bold text-2xl sm:text-3xl text-center'>Your Cart is Empty</h2>
          <p className='text-slate-500 text-xs sm:text-sm text-center max-w-sm'>
            Explore Pegasus minimalist tech collection and add your favorite pieces to get started.
          </p>
          <button onClick={()=>navigate('/products')} className='bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-6 py-2.5 rounded-full shadow-sm hover:shadow-purple-500/25 transition-all cursor-pointer mt-2'>
            Start Exploring
          </button>
        </div>
      }
    </div>
  )
}

export default Cart
