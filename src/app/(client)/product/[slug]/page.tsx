import Container from '@/components/Container'
import SingleProductPage from '@/components/SingleProductPage'
import React from 'react'

function page({params}: {params: Promise<{slug: string}>}) {
  return (
    <Container>
        <SingleProductPage params={params}/>
    </Container>
  )
}

export default page