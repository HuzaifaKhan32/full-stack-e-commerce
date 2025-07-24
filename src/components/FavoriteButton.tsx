"use client"
import { Heart } from 'lucide-react'
import React from 'react'
import { Product } from '../../sanity.types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import useStore from '../../store';

type Props = {
  product?: Product;
  divClassName?: string
  iconClassName?: string
  spanClassName?: string
  showProduct?: boolean
}

function FavoriteButton({ divClassName, iconClassName, spanClassName, showProduct = false}: Props) {
  const {favoriteProduct} = useStore()
  return (
    <div className={cn('group relative cursor-pointer ext-lightColor font-semibold', divClassName)}>
      {!showProduct ? (<Link href={"/whishlist"}>
        <Heart className={cn('w-5 h-5 hoverEffect hover:text-shop_light_green text-lightColor font-semibold group-hover:cursor-pointer', iconClassName)}/>
        <span className={cn('absolute w-3.5 h-3.5 rounded-full bg-shop_dark_green -top-1 -right-1 text-white text-xs flex justify-center items-center', spanClassName)}>{favoriteProduct?.length}</span>
      </Link>) : (
        <button className='cursor-pointer border border-shop_light_green/80 hoverEffect rounded-sm group-hover:border-shop_light_green p-1.5 mt-.5'>
          <Heart className='group-hover:text-shop_light_green text-shop_light_green/80 w-5 h-5'/>
        </button>
      )}
        
    </div>
  )
}

export default FavoriteButton