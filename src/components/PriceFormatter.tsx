import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    amount: number | undefined,
    className?: string
}

function PriceFormatter({amount, className}: Props) {
  const formattedPrice = new Number(amount).toLocaleString("en-UN", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
  })
    return (
    <span className={cn("text-sm font-semibold text-darkColor", className)}>{formattedPrice}</span>
  )
}

export default PriceFormatter