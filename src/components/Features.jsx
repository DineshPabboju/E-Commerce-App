import React from 'react'
import { Truck, Lock, RotateCcw, Clock } from 'lucide-react'

const features = [
    {icon: Truck, text: 'Free Shipping', subtext: 'On orders over $100'},
    {icon: Lock, text: 'Secure Payment', subtext: '100% protected payments'},
    {icon: RotateCcw, text: 'Easy Returns', subtext: '30-day return policy'},
    {icon: Clock, text: '24/7 Support', subtext: 'Dedicated customer service'},
]
const Features = () => {

  return (
    <div className='bg-white border-b border-purple-100/60 py-10 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6'>
            {features.map((feature, index)=> {
               return <div key={index} className='flex items-center p-4 rounded-2xl hover:bg-purple-50/50 transition-colors border border-transparent hover:border-purple-100/60'>
                    <div className='w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600'>
                        <feature.icon className='h-5 w-5' aria-hidden="true" />
                    </div>
                    <div className='ml-4'>
                        <p className='text-sm font-semibold text-slate-900'>{feature.text}</p>
                        <p className='mt-0.5 text-xs text-slate-500'>{feature.subtext}</p>
                    </div>
                </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default Features