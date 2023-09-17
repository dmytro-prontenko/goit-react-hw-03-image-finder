import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

// export default ImageGallery;

class ImageGallery extends Component {
  state = {
    items: this.props.imagesToView,
    loading:false,
    page: 1,
    per_page: 12,
  };

  render() {
    const dataToInsert = this.state.items.map(item => {
      return <ImageGalleryItem item={item} key={nanoid()}/>
    })
    return (
      <ul className="gallery">
        {dataToInsert}
      </ul>
    );
  }
}

export default ImageGallery;
