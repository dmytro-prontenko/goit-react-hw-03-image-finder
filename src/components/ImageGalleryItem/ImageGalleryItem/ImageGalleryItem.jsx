import React from 'react';


const ImageGalleryItem = ({item}) => {
  return (
    <li className="gallery-item" >
      <img src={item.previewURL} alt={item.tags} />
    </li>
  );
};

export default ImageGalleryItem;

// collections: 2537;
// comments: 603;
// downloads: 746795;
// id: 736877;
// imageHeight: 1282;
// imageSize: 97150;
// imageWidth: 1920;
// largeImageURL: 'https://pixabay.com/get/g44bec89c5f1674d1bba488d61a6e2e8cece2211ebf76fa8ce368ce51c2168ba46c0f8c7403fb4e9ca874e9c3f335934c8f5f72601ab4b98a6482f5ceea26d64b_1280.jpg';
// likes: 3074;
// pageURL: 'https://pixabay.com/photos/tree-cat-silhouette-moon-full-moon-736877/';
// previewHeight: 100;
// previewURL: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg';
// previewWidth: 150;
// tags: 'tree, cat, silhouette';
// type: 'photo';
// user: 'Bessi';
// userImageURL: 'https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg';
// user_id: 909086;
// views: 1410097;
// webformatHeight: 427;
// webformatURL: 'https://pixabay.com/get/g7fd24aac412213c46b43a3ad256479125d7ddac752784952aa280241ca05cbdc28093a9a56f3d6a00fc389fc1f3bc3b9_640.jpg';
// webformatWidth: 640;
