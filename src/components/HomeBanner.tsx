import React from 'react'
import Container from './Container'
import {Title} from './ui/text'
import Link from 'next/link'
import Image from 'next/image'
import { banner_1 } from '../../public'

function HomeBanner() {
  return (
    <Container className='bg-shop_light_pink rounded-lg py-16 md:py-0 px-20 lg:px-24 flex justify-between items-center'>
        <div className='flex flex-col gap-4'>
          <Title className='text-3xl text-shop_dark_green font-sans font-bold'>
          Grab Upto 50% Off on <br/>
          Selected headphone
          </Title>
          <Link href={"/shop"} className='bg-shop_btn_dark_green/90 text-white/90 px-5 py-2 rounded-md hover:text-white hover:bg-shop_btn_dark_green cursor-pointer hoverEffect font-semibold text-sm w-fit'>
            Buy Now
          </Link>
        </div>
        <div className='flex justify-center items-center'>
          <Image src={banner_1} alt='banner' className='hidden md:inline-flex w-96 h-full' />
        </div>
    </Container>
  )
}

export default HomeBanner