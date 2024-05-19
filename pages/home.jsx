import React from 'react'
import Apidatacountry from '../components/apidata'
import Country from './country'

function Home({data}) {

  
  
  
  return (
    <>

        <div className="row text-center d-flex justify-content-center align-items-center flex-wrap" >
            <div className="col col-12 col-md-5 leftside ">
                <h1>Explore the World</h1>
                <h3>Wonders of Nature</h3>
                <p>Nature's beauty is boundless. Our collection of landscape images brings you closer to the earth's most awe-inspiring vistas. From towering mountains to serene beaches, explore the natural wonders that make our planet extraordinary.</p>
            </div>
            <div className="col col-12 col-md-6 rightside mt-5 mb-5">
          <Apidatacountry/>
            </div>
        </div>
    
    </>
  )
}

export default Home