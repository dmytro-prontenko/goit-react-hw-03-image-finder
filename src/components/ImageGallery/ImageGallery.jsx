import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './ImageGallery.css';

// export default ImageGallery;

class ImageGallery extends Component {
  render() {
    const dataToInsert = this.props.imagesToView.map(item => {
      return (
        <ImageGalleryItem
          item={item}
          key={item.id}
          modalStatus={this.props.modalStatus}
          handleModal={this.props.handleModal}
        />
      );
    });
    return <ul className="gallery">{dataToInsert}</ul>;
  }
}

export default ImageGallery;

