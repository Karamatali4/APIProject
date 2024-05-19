import { useState, useEffect } from 'react';
import Cards from '../components/cards';
// import Cards from '../components/Cards';

const API_KEY = 'JMOK1idC7fOM3XwG77WyHVkitCHtJbHrXR1HAByFTH2ptBc8AYI6B5Wf';

function Nature() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch("https://api.pexels.com/v1/search?query=Nature&per_page=40", {
        headers: {
          Authorization: API_KEY
        }
      });
      const data = await response.json();
      setPhotos(data.photos || []);
    };

    fetchPhotos();
  }, []);

  const mydata = photos.map((data, index) => (
    <Cards key={index} img={data.src.original} name={data.photographer} imgsize="300px" imgh="300px" />
    
  ));

  return (
    <div className="container">
      <h1 className='text-center'>Nature Photos</h1>
      <div className="row">
        <div className="col-12  col-md-12 d-flex flex-wrap justify-content-evenly align-items-center">
          {mydata}
        </div>
      </div>
    </div>
  );
}

export default Nature;
