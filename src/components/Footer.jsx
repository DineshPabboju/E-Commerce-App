import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-white border-t border-purple-100 text-slate-600 pt-14 pb-8'>
      <div className='max-w-6xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-4 gap-10'>
        {/* Brand Info */}
        <div className='space-y-4'>
            <Link to='/' className='flex items-center gap-2.5 group'>
              <div className='w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-700 to-purple-500 flex items-center justify-center text-white font-bold text-base shadow-sm shadow-purple-500/25'>
                P
              </div>
              <span className='font-bold text-xl tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors'>
                Pegasus<span className='text-purple-600'>.</span>
              </span>
            </Link>
            <p className='text-xs text-slate-500 leading-relaxed'>
              Elevate your lifestyle with thoughtfully curated minimalist tech and timeless electronics.
            </p>
            <div className='text-xs text-slate-500 space-y-1'>
              <p>Email: <span className='text-purple-700 font-medium'>support@pegasus.com</span></p>
              <p>Phone: +1 (800) 555-PEGA</p>
            </div>
        </div>

        {/* Quick Links */}
        <div>
            <h3 className='text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4'>Explore</h3>
            <ul className='text-xs space-y-2.5'>
                <li><Link to='/' className='hover:text-purple-600 transition-colors'>Home</Link></li>
                <li><Link to='/products' className='hover:text-purple-600 transition-colors'>All Products</Link></li>
                <li><Link to='/about' className='hover:text-purple-600 transition-colors'>About Pegasus</Link></li>
                <li><Link to='/contact' className='hover:text-purple-600 transition-colors'>Contact & Support</Link></li>
            </ul>
        </div>

        {/* Support Links */}
        <div>
            <h3 className='text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4'>Customer Care</h3>
            <ul className='text-xs space-y-2.5'>
                <li className='hover:text-purple-600 cursor-pointer transition-colors'>Shipping & Fast Delivery</li>
                <li className='hover:text-purple-600 cursor-pointer transition-colors'>Easy 30-Day Returns</li>
                <li className='hover:text-purple-600 cursor-pointer transition-colors'>Warranty & Guarantee</li>
                <li className='hover:text-purple-600 cursor-pointer transition-colors'>Privacy & Terms</li>
            </ul>
            <div className='flex space-x-3 mt-5'>
                <span className='w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-xs hover:bg-purple-600 hover:text-white transition-all cursor-pointer'><FaFacebookF/></span>
                <span className='w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-xs hover:bg-purple-600 hover:text-white transition-all cursor-pointer'><FaInstagram/></span>
                <span className='w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-xs hover:bg-purple-600 hover:text-white transition-all cursor-pointer'><FaTwitter/></span>
                <span className='w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-xs hover:bg-purple-600 hover:text-white transition-all cursor-pointer'><FaPinterestP/></span>
            </div>
        </div>

        {/* Newsletter */}
        <div>
            <h3 className='text-sm font-semibold uppercase tracking-wider text-slate-900 mb-2'>Stay Connected</h3>
            <p className='text-xs text-slate-500 mb-4'>Subscribe for exclusive product drops and minimalist inspirations.</p>
            <form onSubmit={(e) => e.preventDefault()} className='flex'>
                <input 
                  type="email" 
                  placeholder='Your email address'
                  className='w-full px-3 py-2 text-xs rounded-l-xl bg-purple-50/40 border border-purple-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-500'
                />
                <button type='submit' className='bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold px-4 rounded-r-xl transition-all shadow-xs cursor-pointer'>
                  Join
                </button>
            </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='mt-12 border-t border-purple-50 pt-6 text-center text-xs text-slate-400'>
        <p>&copy; {new Date().getFullYear()} <span className='text-purple-600 font-medium'>Pegasus</span>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer