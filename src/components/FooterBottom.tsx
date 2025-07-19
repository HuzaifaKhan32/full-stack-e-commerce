import React from 'react'
import Logo from './Logo'

function FooterBottom() {
  return (
    <div className='py-6 text-sm text-center text-gray-600 border-t flex justify-center items-center gap-1'>
        © {new Date().getFullYear()} <Logo className='text-sm text-gray-900 hover:text-shop_light_green' spanClassname='text-shop_light_green group-hover:text-gray-900' /> All rights reserved.
    </div>
  )
}

export default FooterBottom