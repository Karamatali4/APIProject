import React, { useEffect, useState } from 'react';
import "../src/App.css";
import Cards from '../components/cards';

function Country() {
  const [country, setCountry] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://restcountries.com/v2/all");
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <div className="text-center"><h1>Loading.....</h1></div>;
  }

  const filteredData = country.filter((countryData) => 
    countryData.name.toLowerCase().includes(input.toLowerCase())
  );

  const mcountrydata = filteredData.map((data, index) => (
    <Cards key={index} img={data.flags.png} name={data.name} capital={data.capital} />
  ));

  return (
    <div className="container">
      <h1 className='text-center'>Country Images and their Name and Capitals</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a country name..."
        className="form-control my-3"
      />
      <h2>You are searching for: {input}</h2>
      <div className="row">
        <div className="col-12 d-flex flex-wrap justify-content-evenly align-items-center">
          {mcountrydata}
        </div>
      </div>
    </div>
  );
}

export default Country;
