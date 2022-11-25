import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { populars } from '../data/popular';

const Popular = () => {

  const handleClick = (e) => {
    console.log(e.target.name)

  }

  return (
    <div className='text-center'>

          <h2 className='text-center p-5'>Popular</h2>

          <Carousel variant="dark" indicators={false}>

            <Carousel.Item>
                {
                  populars.slice(0, 3).map(({id, image, ingredient}) => {

                    return (

                          <img
                            key={id}
                            className="popular-img"
                            src={image}
                            alt="First slide"
                            name={ingredient}
                            onClick={handleClick}
                          />

                        )
                  })
                }
            </Carousel.Item>
            <Carousel.Item>
                {
                  populars.slice(3, 6).map(({id,image, ingredient}) => {

                    return (

                        <img
                            key={id}
                            className="popular-img"
                            src={image}
                            alt="Second slide"
                            name={ingredient}
                            onClick={handleClick}
                          />
                        )
                  })
                }
            </Carousel.Item>
            <Carousel.Item>
                {
                  populars.slice(6, 9).map(({id, image, ingredient}) => {

                    return (

                        <img
                            key={id}
                            className="popular-img"
                            src={image}
                            alt="Third slide"
                            name={ingredient}
                            onClick={handleClick}
                          />
                        )
                  })
                }
            </Carousel.Item>

          </Carousel>





        </div>
  )
}

export default Popular
