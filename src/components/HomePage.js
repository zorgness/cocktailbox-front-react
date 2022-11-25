import React from 'react'
import { capitalize } from '../utils/capitalize'
import Popular from '../components/Popular'

const HomePage = ({authData}) => {
  return (

    <div>

          <div className="d-flex justify-content-around align-items-center flex-wrap my-5 gap-4">
            <h1 className="text-center mx-3 d-flex align-items-center" >Cocktail Box <span><img src="https://cdn-icons-png.flaticon.com/512/905/905477.png" alt="" className="avatar-square2" style={{opacity: '0.8'}}/></span></h1>
          </div>


          <div>
            <div className="d-flex flex-column">
              <h4 className="text-center">Here are all the great cocktail recipes and alcoholic drinks</h4>


              <Popular />

            </div>
          </div>
    </div>


  )
}

export default HomePage
