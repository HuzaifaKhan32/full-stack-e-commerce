import NoAccessCart from '@/components/NoAccessCart'
import WhishlistProducts from '@/components/WhishlistProducts'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

async function WhishlistPage() {
    const user = await currentUser()
  return (
    <div>
        {user ? <WhishlistProducts /> : <NoAccessCart details='Log in to view your wishlist items. Don’t miss out on your cart products to make the payment!'/>}
    </div>
  )
}

export default WhishlistPage