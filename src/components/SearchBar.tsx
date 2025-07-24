"use client"
import { Search } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

function SearchBar() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Search className='w-5 h-5 hoverEffect hover:text-shop_light_green  text-lightColor font-semibold'/>
        </TooltipTrigger>
        <TooltipContent>
          <span className="text-xs font-bold text-gray-400">Temp unavailable</span>
        </TooltipContent>
      </Tooltip>

    </TooltipProvider>
  )
}

export default SearchBar