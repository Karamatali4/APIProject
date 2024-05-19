import { useState, useEffect } from 'react';
import Home from '../pages/home';

// component for country api
function Apidatacountry() {

    // for country data
    const [country, setcountry] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v2/all')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            // console.log(data);
           setcountry(data);
          });
      }, []);

  return (
    <>
    

    {country.map((mydata,index) => (
           <img key={index} src={mydata.flags.png} alt="" width={32} />

    ))}
    

    {
    }
    </>
  )
}





export default Apidatacountry