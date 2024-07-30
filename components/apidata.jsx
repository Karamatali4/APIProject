import { useState, useEffect } from 'react';
import Home from '../pages/home';

// component for country api
function Apidatacountry() {

    // for country data
    const [country, setcountry] = useState([]);


    const countryapidata = async() => {
    const API = "https://restcountries.com/v2/all";

      try {
        const response = await fetch(API);
        const data =  await response.json();

        const detialresponse = await Promise.all(data);
        setcountry(detialresponse);
        
      } catch (error) {
        console.log(error);
      }
    }
    useEffect( () => {
        // fetch('https://restcountries.com/v2/all')
        //   .then((res) => {
        //     return res.json();
        //   })
        //   .then((data) => {
        //     // console.log(data);
        //    setcountry(data);
        //   });

        countryapidata();
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