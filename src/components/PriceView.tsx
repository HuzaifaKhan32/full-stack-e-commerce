import React from 'react'
import PriceFormatter from './PriceFormatter';
import { cn } from '@/lib/utils';

type Props = {
    price: number | undefined;
    discount: number| undefined;
    className?: string
}

function PriceView({price, discount, className}: Props) {
  return (
    <div className='flex items-center gap-2'>
        <PriceFormatter amount={price} className={cn("text-shop_dark_green", className)}/>
        {price && discount && (
            <PriceFormatter amount={price + (discount * price)/100} className={cn("line-through text-shop_lighter_text font-normal", className)}/>
        )}
    </div>
  )
}

export default PriceView