import React from 'react'
import banner from '../assets/banner1.jpg'
import { useNavigate } from 'react-router-dom'

const MidBanner = () => {
  const navigate = useNavigate()

  return (
    <div className='bg-white py-14 px-4 sm:px-6 lg:px-8'>
      <div 
        className='relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-purple-100/80 h-[480px] md:h-[520px] bg-cover bg-center' 
        style={{backgroundImage: `url(${banner})`, backgroundPosition:'center', backgroundAttachment: 'fixed'}}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-slate-950/85 via-purple-950/75 to-slate-950/85 flex items-center justify-center'>
            <div className='text-center text-white px-6 max-w-3xl space-y-5'>
                <span className='inline-block text-xs font-semibold uppercase tracking-widest text-purple-300 bg-purple-900/60 border border-purple-400/30 px-3.5 py-1 rounded-full'>
                  Pegasus Experience
                </span>
                <h1 className='text-3xl md:text-5xl font-bold tracking-tight text-white'>
                  Next-Gen Technology Crafted for You
                </h1>
                <p className='text-sm md:text-base text-purple-100/80 max-w-xl mx-auto font-light leading-relaxed'>
                  Discover curated minimalist electronics and lifestyle gear with exceptional quality and complimentary fast shipping.
                </p>
                <div className='pt-2'>
                  <button 
                    onClick={() => navigate('/products')} 
                    className='bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer text-sm'
                  >
                    Explore Collection &rarr;
                  </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner