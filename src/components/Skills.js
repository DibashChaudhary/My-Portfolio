import React from 'react'
import { Layout } from './Layout'

export const Skills = () => {
  return (
    <>
    <Layout >
    <div className='title  text-center'>Skills</div>
        <div className='Skills mt-5 mb-5 text-center d-flex justify-content-between'>
            <div className='icons'>
                <i class="fa-brands fa-html5"></i>
                <p>HTML 5</p>
            </div>

            <div className='icons'>
                <i class="fa-brands fa-css3-alt"></i>
                <p>CSS</p>
            </div>

            <div className='icons'>
                <i class="fa-brands fa-js"></i>
                <p>JavaScript</p>
            </div>

            <div className='icons'>
                <i class="fa-brands fa-figma"></i>
                <p>Figma</p>
            </div>

            <div className='icons'>
                <i class="fa-brands fa-react"></i>
                <p>React</p>
            </div>

            <div className='icons'>
                <i class="fa-brands fa-node"></i>
                <p>Node</p>
            </div>


            


        </div>
        </Layout>
    </>
  )
}
