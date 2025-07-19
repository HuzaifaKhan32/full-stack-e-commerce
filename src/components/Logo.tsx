import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

function Logo({className, spanClassname} : {className?: string, spanClassname?: string}) {
  return (
    <Link href={"/"}>
      <h2 className={cn("group cursor-pointer uppercase text-2xl font-extrabold font-sans text-shop_btn_dark_green hover:text-shop_light_green hoverEffect", className)}>Shopcar<span className={cn("group-hover:text-shop_btn_dark_green text-shop_light_green", spanClassname)}>t</span></h2>
    </Link>
  )
}
export default Logo