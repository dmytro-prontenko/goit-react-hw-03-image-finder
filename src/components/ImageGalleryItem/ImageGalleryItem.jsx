import React from 'react';


const ImageGalleryItem = ({item}) => {
  return (
    <li className="gallery-item" >
      <img className='gallery-item-img' src={item.previewURL} alt={item.tags} />
    </li>
  );
};

export default ImageGalleryItem;
