"use client"
import { ShoppingBag } from 'lucide-react'
import React from 'react'
import useStore from '../../store'
import Link from 'next/link'

function CartIcon() {
  const {items} = useStore()
  return (
    <Link href={"/cart"}>
      <div className='group relative cursor-pointer  text-lightColor font-semibold'>
          <ShoppingBag className='w-5 h-5 hoverEffect hover:text-shop_light_green'/>
          <span className='absolute w-3.5 h-3.5 rounded-full bg-shop_dark_green -top-1 -right-1 text-white text-xs flex justify-center items-center'>{items?.length ? items?.length : 0}</span>
      </div>
    </Link>
  )
}

export default CartIcon