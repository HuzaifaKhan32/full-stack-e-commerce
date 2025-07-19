import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import FooterMain from './FooterMain'
import FooterBottom from './FooterBottom'

function Footer() {
  return (
    <footer className='border-t border-border'>
        <Container>
            <FooterTop />
            <FooterMain />
            <FooterBottom />
        </Container>
    </footer>
  )
}

export default Footer