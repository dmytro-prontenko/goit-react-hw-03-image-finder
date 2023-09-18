import React from 'react';
import "./ImageGalleryItem.css"


const ImageGalleryItem = ({item}) => {
  return (
    <li className="gallery-item" >
      <img className='gallery-item-img' src={item.webformatURL} alt={item.tags} />
    </li>
  );
};

export default ImageGalleryItem;
