import Brands from '@/components/Brands'
import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import HomeCategories from '@/components/HomeCategories'
import LatestBlog from '@/components/LatestBlog'
import ProductGrid from '@/components/ProductGrid'
import { getBrands, getCategories } from '@/sanity/queries'
import React from 'react'

async function page() {
  const categories = await getCategories(6)
  const brands = await getBrands()
  return (
    <Container className='bg-shop-light-pink'>
      <HomeBanner />
      <ProductGrid />
      <HomeCategories categories={categories}/>
      <Brands brands={brands}/>
      <LatestBlog pageTitle="Latest Blogs"/>
    </Container>
  )
}

export default page