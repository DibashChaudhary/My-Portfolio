import React from 'react'
import { Card } from 'react-bootstrap'
import di from '../images/di.webp'
import { Layout } from './Layout'

export const Project = () => {
  return (
    <>
    <Layout>
    <div className='projects d-flex flex-row justify-content-start flex-nowrap'>
    <div >
        <Card>
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
        <Card>
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
        <Card>
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
        <Card>
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
        <Card>
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
        <Card>
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
