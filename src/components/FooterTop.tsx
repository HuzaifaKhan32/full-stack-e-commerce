import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const topItems = [
    {
        icon: <MapPin className='h-6 w-6 text-gray-600 group-hover:text-primary transition-color'/>,
        title: "Visit Us",
        subtitle: "New Orlean, USA"
    },
    {
        icon: <Phone className='h-6 w-6 text-gray-600 group-hover:text-primary transition-color'/>,
        title: "Call Us",
        subtitle: "+12 958 648 597"
    },
    {
        icon: <Clock className='h-6 w-6 text-gray-600 group-hover:text-primary transition-color'/>,
        title: "Working Hours",
        subtitle: "Mon - Sat: 10:00 AM - 7:00 PM"
    },
    {
        icon: <Mail className='h-6 w-6 text-gray-600 group-hover:text-primary transition-color'/>,
        title: "Email Us",
        subtitle: "Shopcart@gmail.com"
    },
]

function FooterTop() {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 items-center border-b border-border'>
        {topItems?.map((item, index) => (
            <div key={index} className='group hover:bg-gray-50 flex gap-4 py-4'>
                <div className='flex justify-center items-center'>{item.icon}</div>
                <div className='flex gap-1 flex-col'>
                    <h2 className='font-semibold'>{item.title}</h2>
                    <span className='text-gray-600 group-hover:text-primary'>{item.subtitle}</span>
                </div>

            </div>
        ))}
    </div>
  )
}

export default FooterTop