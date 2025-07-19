import { GitCompareArrows, Headset, ShieldCheck, Truck } from 'lucide-react'
import React from 'react'

const brandDescription = [
    {
        icon: <Truck className='w-11 h-11 text-gray-600 group-hover:text-shop_light_green transition-color hoverEffect group-hover:scale-90'/>,
        title: "Free Delivery",
        subtitle: "Free shipping over $100"
    },
    {
        icon: <GitCompareArrows className='w-11 h-11 text-gray-600 group-hover:text-shop_light_green transition-color hoverEffect group-hover:scale-90'/>,
        title: "Free Return",
        subtitle: "Free shipping over $100"
    },
    {
        icon: <Headset className='w-11 h-11 text-gray-600 group-hover:text-shop_light_green transition-color hoverEffect group-hover:scale-90'/>,
        title: "Customer Service",
        subtitle: "Friendly 27/7 customer support"
    },
    {
        icon: <ShieldCheck className='w-11 h-11 text-gray-600 group-hover:text-shop_light_green transition-color hoverEffect scale-100 group-hover:scale-90'/>,
        title: "Money Back Gurantee",
        subtitle: "Quality checked by our team"
    },
]


function BransDescription() {
  return (
    <div className='px-1 py-3 grid grid-cols-2 md:grid-cols-4 text-gray-600 mt-16 shadow-md shadow-shop_dark_green/20'>
        {brandDescription?.map((item, index) => (
            <div className='group flex gap-2 items-center py-3' key={index} >
                <span className=''>
                    {item?.icon}
                </span>
                <div className='text-sm flex flex-col items-start'>
                    <span className='font-semibold'>{item?.title}</span>
                    <span>{item?.subtitle}</span>
                </div>
            </div>
        ))}
    </div>
  )
}

export default BransDescription