import PropTypes from 'prop-types';
import { galleryData } from '../../assets/data/galleryData.js';

export const GalleryItem = ({ id }) => {


  return (

    <div className='gallery__item-content item-content'>

        <img className="gallery__photo" alt="Laptop" src={ galleryData[ id ].photo } />

        <p className="gallery__text">
            { galleryData[ id ].description }
        </p>

    </div>

  )

}
