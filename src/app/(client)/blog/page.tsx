import Container from '@/components/Container'
import LatestBlog from '@/components/LatestBlog'
import React from 'react'

function BlogPage() {
  return (
    <Container className='mt-10'>
      <div>
        <LatestBlog pageTitle='Our Blogs'/>
      </div>
    </Container>
  )
}

export default BlogPage