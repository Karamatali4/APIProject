import { useState, useEffect } from 'react';
import Cards from '../components/cards';

const API_KEY = 'JMOK1idC7fOM3XwG77WyHVkitCHtJbHrXR1HAByFTH2ptBc8AYI6B5Wf';

function Animal() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const animalapidata = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.pexels.com/v1/search?query=animal&per_page=40", {
        headers: {
          Authorization: API_KEY
        }
      });
      const data = await response.json();
      console.log(data);

      setPhotos(data.photos || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    animalapidata();
  }, []);

  
  if (loading) {
    return <div className="text-center"> <h1>Loading.....</h1></div>;
  }
  const mydata = photos.map((data, index) => (
    <Cards key={index} img={data.src.original} name={data.photographer} imgsize="300px" imgh="300px" />
  ));

  return (
    <div className="container">
      <h1 className='text-center'>Animal Photos</h1>
      <div className="row">
        <div className="col-12 col-md-12 d-flex flex-wrap justify-content-evenly align-items-center">
          {mydata}
        </div>
      </div>
    </div>
  );
}

export default Animal;
