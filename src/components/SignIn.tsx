import { SignInButton } from '@clerk/nextjs'
import React from 'react'

function SignIn() {
  return (
    <SignInButton mode='modal'>
      <button className='text-sm font-semibold text-lightColor cursor-pointer hover:text-shop_light_green hoverEffect'>Login</button>
    </SignInButton>
  )
}

export default SignIn