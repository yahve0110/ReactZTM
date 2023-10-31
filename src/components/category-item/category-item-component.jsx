import React from 'react';

import './category-item.style.scss'

const CategoryItem = ({category}) => {
    console.log(category)
  const  {imageUrl,title} =  category
  return (
    <div className="category-container">
    {/* img */}
    <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}></div>
    <div className='category-body-container'>
      <h2>
       {title}
      </h2>
      <p>
        Shop now
      </p>
    </div>
  </div>
  )
}

export default CategoryItem