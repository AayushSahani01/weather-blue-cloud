import React, { useEffect } from 'react';
import {useState} from "react";

const WeatherNews = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos',{
        limit: 5,
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => setError(error))
    .finally(() => setLoading(false));
}
, []);

    return(
      <div className='bg-white rounded-lg shadow-xl ' id='news'>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        <div className='flex justify-between items-center px-10 py-4 border-b-2 border-gray-800'>
        {data.map(item => (

          <li key={item.id}>
            
              <h3 className="text-md font-medium">{item.title}</h3>
              <span className="text-sm text-gray-500">Completed: {item.completed ? 'Yes' : 'No'}</span>
              <span className="text-sm text-gray-500">User ID: {item.userId}</span>

               
          </li>
        ))}
        </div>

      </div>
     )
};

export default WeatherNews;
