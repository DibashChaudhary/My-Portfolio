import React from 'react'
import { Card } from 'react-bootstrap'
import di from '../images/di.webp'
import { Layout } from './Layout'

export const Project = () => {
  return (
    <>
    <Layout>

    <div className="title text-center mt-5 mb-5">
        <span>Projects</span>
      </div>
    <div className='projects d-flex justify-content-start py-5'>
    
    <div>
        <Card className='projectsCardBody'>
        <Card.Img variant="top" src={di} />
        <Card.Body>
          <Card.Text className='text-danger'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div>
        <Card className='projectsCardBody'>
        <Card.Img variant="top" src={di} />
        <Card.Body>
        <Card.Text className='text-danger'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
    </div>
    <div >
        <Card className='projectsCardBody'>
        <Card.Img variant="top" src={di} />
        <Card.Body>
          <Card.Text className='text-danger'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div>
        <Card className='projectsCardBody'>
        <Card.Img variant="top" src={di} />
        <Card.Body>
        <Card.Text className='text-danger'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
    </div>
    <div >
        <Card className='projectsCardBody'>
        <Card.Img variant="top" src={di} />
        <Card.Body>
          <Card.Text className='text-danger'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div>
        <Card className='projectsCardBody'>
        <Card.Img variant="top" src={di} width={100}/>
        <Card.Body>
        <Card.Text className='text-danger'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
    </div>
    </div>
    </Layout>
</>

  )
}
