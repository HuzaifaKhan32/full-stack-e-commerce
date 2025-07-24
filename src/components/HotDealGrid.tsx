"use client"
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import ProductCard from './ProductCard'
import { Product } from '../../sanity.types'

function HotDealGrid({product}: {product : Product}) {
  return (
    <div>
        <AnimatePresence>
            <ProductCard product={product} />
        </AnimatePresence>
    </div>
  )
}

export default HotDealGrid