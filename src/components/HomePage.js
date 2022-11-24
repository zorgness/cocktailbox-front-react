import React from 'react'
import { capitalize } from '../utils/capitalize'

const HomePage = ({authData}) => {
  return (

    <div>
          <h1 className='m-3'>Welcome {capitalize(authData?.userData?.username)}</h1>

          <div className="d-flex justify-content-around align-items-center flex-wrap my-5 gap-4">
            <h1 className="text-center mx-3 d-flex align-items-center" >Cocktail Box <span><img src="https://cdn-icons-png.flaticon.com/512/905/905477.png" alt="" className="avatar-square2" style={{opacity: '0.8'}}/></span></h1>
          </div>


          <div>
            <div className="d-flex flex-column">
              <h4 className="text-center">Here are all the great cocktail recipes and alcoholic drinks</h4>

              <div className="text-center">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/008/022/325/small_2x/cocktail-icons-symbol-elements-for-infographic-web-free-vector.jpg" className="img-fluid" alt="" />
              </div>

            </div>
          </div>
    </div>


  )
}

export default HomePage
