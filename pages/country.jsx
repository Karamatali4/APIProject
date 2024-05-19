import React, { useEffect, useState } from 'react';
import "../src/App.css";
import Cards from '../components/cards';

function Country() {
  const [country, setCountry] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      });
  }, []);

  const filteredData = country.filter((countryData) => 
    countryData.name.toLowerCase().includes(input.toLowerCase())
  );

  const mcountrydata = filteredData.map((data, index) => (
    <Cards key={index} img={data.flags.png} name={data.name} capital={data.capital} />
    
    
  ));

  return (
    <>
      <div className="row">
        <h1 className='text-center'>Country Images and their Name and Capitals</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for a country name..."
          className="form-control my-3"
        />
        <h2>You Searching.....  {input}</h2>
        <div className="col-12 d-flex flex-wrap">
          {mcountrydata}
          
        </div>
      </div>
    </>
  );
}

export default Country;
