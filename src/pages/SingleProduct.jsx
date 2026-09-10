import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from "../assets/Loading4.webm"
import Breadcrums from '../components/Breadcrums';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../context/CartContext';

const SingleProduct = () => {
    const params = useParams()
    const [SingleProduct, setSingleProduct] = useState("")
    const {addToCart} = useCart()

    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
            const product = res.data;
            setSingleProduct(product)
            console.log(product);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [])

    const OriginalPrice = Math.round(SingleProduct.price + (SingleProduct.price * SingleProduct.discount / 100))

    return (
        <>
            {
                SingleProduct ? <div className='px-4 pb-16 md:px-0 bg-white min-h-screen'>
                     <Breadcrums title={SingleProduct.title}/>
                     <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>
                        {/* product image */}
                        <div className='w-full bg-purple-50/20 border border-purple-100 rounded-3xl p-8 flex items-center justify-center shadow-xs'>
                            <img src={SingleProduct.image} 
                            alt={SingleProduct.title} 
                            className='max-h-[380px] w-auto object-contain hover:scale-105 transition-transform duration-300'/>
                        </div>
                        {/* product details */}
                        <div className='flex flex-col gap-5'>
                            {SingleProduct.category && (
                                <div>
                                    <span className='inline-block text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full'>
                                        {SingleProduct.category}
                                    </span>
                                </div>
                            )}
                            <h1 className='text-2xl md:text-3xl font-bold text-slate-900 leading-snug'>{SingleProduct.title}</h1>
                            
                            <div className='flex items-baseline gap-3'>
                                <span className='text-3xl font-bold text-slate-900'>${SingleProduct.price}</span>
                                {OriginalPrice ? <span className='line-through text-slate-400 text-base'>${OriginalPrice}</span> : null}
                                {SingleProduct.discount ? (
                                    <span className='text-xs font-bold text-purple-700 bg-purple-100/80 px-3 py-1 rounded-full'>
                                        {SingleProduct.discount}% OFF
                                    </span>
                                ) : null}
                            </div>

                            <p className='text-slate-600 text-sm leading-relaxed border-t border-b border-purple-50 py-4'>{SingleProduct.description}</p>

                            {/* quantity selector */}
                            <div className='flex items-center gap-3'>
                                <label className='text-xs font-semibold uppercase tracking-wider text-slate-700'>Quantity</label>
                                <input type="number" min={1} defaultValue={1} className='w-20 bg-purple-50/30 border border-purple-200 rounded-xl px-3 py-1.5 text-sm text-slate-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500'/>
                            </div>

                            <div className='flex gap-4 pt-2'>
                                <button onClick={()=>addToCart(SingleProduct)} className='px-8 py-3 bg-purple-600 hover:bg-purple-700 active:scale-[0.98] text-white rounded-xl font-medium flex items-center gap-2 shadow-sm hover:shadow-purple-500/25 transition-all cursor-pointer'>
                                    <IoCartOutline className='w-5 h-5'/> Add to Cart
                                </button>
                            </div>
                        </div>
                     </div>
                </div> :
                    <div className='flex items-center justify-center h-screen'>
                        <video muted autoPlay loop>
                            <source src={Loading} type='video/webm' />
                        </video>
                    </div>
            }
        </>
    )
}

export default SingleProduct
