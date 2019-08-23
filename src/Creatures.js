import React from 'react';
import { Link } from 'react-router-dom';
import './image-display.css';

const Creatures = ({ data }) => {
  const displayData = data.map(creature => {
    const { id, image, type } = creature;
    return (
    <Link exact to={`/${type}/${id}`}>
      <img src={image} className='app-img' key={id} alt='' />
    </Link>
    );
  })

  return (
    <>
      {displayData}
    </>
    
  )
}

export default Creatures;