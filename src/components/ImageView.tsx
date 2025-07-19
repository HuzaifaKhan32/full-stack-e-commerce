"use client"
import { urlFor } from '@/sanity/lib/image'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from '../../sanity.types'

type Props = {
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  isStock?: boolean
}

function ImageView({images = [], isStock}: Props) {
  const [active, setActive] = useState(images[0])
  return (
    <div className='w-full md:w-1/2 space-y-2 md:space-y-4'>
      <AnimatePresence mode='wait'>
        <motion.div key={active?._key}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        className='w-full max-h-[550px] min-h-[450px] border rounded-md group overflow-hidden'>
          <Image 
          src={urlFor(active).url()}
          alt='product image'
          width={700}
          height={700}
          priority
          className={`w-full h-96 max-h-[550px] min-h-[500px] group-hover:scale-110 hoverEffect rounded-md ${isStock ? "" : "opacity-50"}`}/>
        </motion.div>
      </AnimatePresence>
      <div className='grid grid-cols-6 gap-2 h-20 md:h-24'>
        {images?.map((img) => (
          <button key={img?._key} className='border cursor-pointer hover:scale-110 hoverEffect rounded-md' onClick={() => setActive(img)}>
            <Image 
            src={urlFor(img).url()}
            alt={`Thumbnail ${img._key}`}
            width={100}
            height={100}
            className='w-full object-contain h-auto'/>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImageView