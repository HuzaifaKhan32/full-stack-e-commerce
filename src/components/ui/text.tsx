import { cn } from '@/lib/utils'
import React from 'react'

export function Title({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <h2 className={cn('text-2xl font-semibold', className)}>{children}</h2>
  )
}

export const SubTitle = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return(
    <h3 className={cn("text-base font-semibold text-gray-900", className)}>{children}</h3>
  )
}

export const SubText = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("text-sm text-gray-600", className)}>{children}</div>
  )
}

