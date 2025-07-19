"use client"
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import Sidebar from './Sidebar'

function MobileMenu() {
    const [isSideBarOpen, setIsSidebarOpen] = useState<boolean>(false)
  return (
    <button className='block md:hidden'>
        <AlignLeft className='w-5 h-5 hover:text-darkColor hoverEffect cursor-pointer' onClick={() => setIsSidebarOpen(!isSideBarOpen)}/>
        <Sidebar isOpen={isSideBarOpen} onClose={() => setIsSidebarOpen(false)}/>
    </button>
  )
}

export default MobileMenu