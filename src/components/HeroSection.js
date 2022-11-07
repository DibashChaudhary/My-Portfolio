
import React from 'react'
import {Nav} from 'react-bootstrap'
import { Layout } from './Layout'
import { Parallaxa } from './Parallax'



export const HeroSection = () => {
  return (
    <>

      <div bg='dark' className='heroSection'>
      <Layout >
        <div className='mt-5 '>
          <h1>Hi <i class="fa-sharp fa-solid fa-hand-wave"></i> I am Dibash Chaudhary </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ut nobis similique commodi excepturi, unde dolorum fugit repudiandae veritatis optio. Nostrum sunt quasi quaerat, vel dicta fugit laboriosam possimus similique!</p>
          <button className='hero-button mt-5'>Let's Work Together</button>
        </div>
        <div className='mt-5'>
          <h2>Find Me at</h2>
          <ul className='heroLink d-flex p-1 justify-content-between'>
            <Nav.Link href="https://github.com/DibashChaudhary" className='github'>
              <span>
                <i class="fa-brands fa-github"></i>
              </span>
            </Nav.Link>
            <Nav.Link href="#home" className='linkedIn'>
              <span>
                <i class="fa-brands fa-linkedin"></i>
              </span>
              </Nav.Link>
            <Nav.Link href="#home" className='facebook'>
              <span>
                <i class="fa-brands fa-facebook"></i>
              </span>
              </Nav.Link>
            <Nav.Link href="#home" className='instagram'>
              <span>
                <i class="fa-brands fa-instagram"></i>
              </span>
            </Nav.Link>
          </ul>
        </div>
        <button className='resumeButton mt-1'>Download Resume</button>
        </Layout>
      </div>
      <Parallaxa />
      
    </>
  )
}
