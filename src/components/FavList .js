import React from 'react'
import Row from 'react-bootstrap/Row';
import Cards from './Cards';

import { useState,useEffect } from 'react';


function FavList () {
  const [movieArr, setmovieArr] = useState([]);

  const sendRequest = async () => {
    const Url = `${process.env.REACT_APP_URL}favMovies`;
    const response = await fetch(Url);
    const data = await response.json();
    console.log(data);
    setmovieArr(data)
}
useEffect(() => {
    sendRequest();
}, [])

const handleChildDataChange = (childData) => {
  setmovieArr(childData);
};



  return (
    <Row xs={1} md={3} className="g-4">
    {movieArr.map((item) => {
        return <Cards key={item.id} favmovie={item}  handleChildDataChange={handleChildDataChange} />
    })}
</Row>
)
}

export default FavList ;