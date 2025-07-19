import React from 'react'
import { Product } from '../../sanity.types'
import { getSlugBrandName } from '@/sanity/queries'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

type Props = {
    product: Product
}

async function ProductCharacteristics({product}: Props) {
  const brand = await getSlugBrandName(product?.slug?.current as string)
  console.log(brand)
    return (
    <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
            <AccordionTrigger>
                {product?.name}: Characteristics
            </AccordionTrigger>
            <AccordionContent>
                <p className='flex items-center justify-between'>
                Brands: {brand && (<span className='font-semibold tracking-wide'>{brand[0]?.brandName}</span>)}
                </p>
                <p className='flex items-center justify-between'>
                Collection: <span className='font-semibold tracking-wide'>2025</span>
                </p>
                <p className='flex items-center justify-between'>
                Type: {(<span className='font-semibold tracking-wide'>{product?.variant}</span>)}
                </p>
                <p className='flex items-center justify-between'>
                Stock: {(<span className='font-semibold tracking-wide'>{product?.stock ? "Available": "Out of stock"}</span>)}
                </p>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  )
}

export default ProductCharacteristics