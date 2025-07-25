import { getSlugProducts } from '@/sanity/queries'
import React from 'react'
import ImageView from './ImageView'
import { CircleQuestionMark, CornerDownLeft, Share2, SquareSplitVertical, StarIcon, Truck } from 'lucide-react'
import PriceView from './PriceView'
import AddToCartButton from './AddToCartButton'
import ProductCharacteristics from './ProductCharacteristics'
import AddToWhishList from './AddToWhishList'
import { Product, PRODUCT_BY_SLUG_QUERYResult } from '../../sanity.types'
import NoProductAvailable from './NoProductAvailable'



function normalizeSlugProduct(product: PRODUCT_BY_SLUG_QUERYResult): Product | null {
  if (!product || Array.isArray(product)) return null;
  return {
    ...product
  };
}

async function SingleProductPage({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params
    let rawProduct = await getSlugProducts(slug);
    if (Array.isArray(rawProduct)) {
      rawProduct = rawProduct[0] ?? null;
    }
    const product: Product | null = normalizeSlugProduct(rawProduct);
    if(!product){
      return <><NoProductAvailable /></>
    }
    const isStock = (typeof product.stock === 'number' ? product.stock : 0) > 0;
  return (
    <div className='flex flex-col md:flex-row gap-10 pb-10'>
            {product.images && <ImageView images={product.images} isStock={isStock}/>}  
        <div className='w-full md:w-1/2 flex flex-col gap-5'>
          <div className='space-y-1'>
            <h2 className='text-2xl font-bold'>{product.name}</h2>
            <p className='text-sm text-gray-600 tracking-wide'>{product.description}</p>
            <div className='flex items-center gap-0.5'>
              {[...Array(5)].map((_, index) => (
                <StarIcon
                key={index}
                size={13}
                fill={index < 4 ? "#93D991" : "#ababab"}
                className={index < 4 ? "text-shop_lighter_green" : "text-shop_lighter_text"}
                />
              ))}
              <p className='text-sm font-semibold'>{`(120)`}</p>
            </div>
          </div>
          <div className='space-y-2 border-t border-b border-gray-200 py-4'>
            <PriceView price={product.price} discount={product.discount} className='text-lg font-bold'/>
            <p className={`inline-block text-center text-sm font-semibold ${(typeof product.stock === 'number' && product.stock === 0) ? "bg-red-100 text-bg-red-600" : "text-green-600 bg-green-100"} px-4 py-2 rounded-lg`}>{(typeof product.stock === 'number' && product.stock === 0) ? "Out of stock" : "In Stock"}</p>
          </div>
          <div className='flex justify-between gap-2 lg:gap-5'>
              <AddToCartButton product={product} className='w-full flex'/>
              <AddToWhishList product={product} showProduct={true} className='static'/>
          </div>
          <ProductCharacteristics product={product}/>
          <div className='flex items-center justify-between flex-wrap text-sm border-t border-b border-gray-200 py-4'>
            <div className='flex items-center gap-2 hover:text-red-600 cursor-pointer hoverEffect'>
              <SquareSplitVertical />
              <span>Compare color </span>
            </div>
            <div className='flex items-center gap-2 hover:text-red-600 cursor-pointer hoverEffect'>
              <CircleQuestionMark />
              <span>Ask a question</span>
            </div>
            <div className='flex items-center gap-2 hover:text-red-600 cursor-pointer hoverEffect'>
              <Truck />
              <span>Delivery & return</span>
            </div>
            <div className='flex items-center gap-2 hover:text-red-600 cursor-pointer hoverEffect'>
              <Share2 />
              <span>Share</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center gap-3 border px-3 py-4'>
              <Truck className='text-shop_orange w-8 h-8'/>
              <div className=''>
                <p className='font-bold'>Free Delivery</p>
                <p className='text-gray-600 text-sm underline'>Enter your Postal code for Delivey Availability.</p>
              </div>
            </div>
            <div className='flex items-center gap-2 border px-3 py-4'>
              <CornerDownLeft className='text-shop_orange w-8 h-8'/>
              <div className=''>
                <p className='font-bold'>Return Delivery</p>
                <p className='text-gray-600 text-sm'>Free 30days Delivery Returns. <span className='underline'>Details</span></p>
              </div>
            </div>

          </div>
        </div>

    </div>
  )
}

export default SingleProductPage