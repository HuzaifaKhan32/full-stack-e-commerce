import Shop from '@/components/Shop'
import { getBrands, getCategories } from '@/sanity/queries'
import React from 'react'

async function ShopPage() {
  const categories = await getCategories()
  const brand = await getBrands()
  return (
    <div>
      <Shop categories={categories} brands={brand}/>
    </div>
  )
}

export default ShopPage
