import laptopPhoto from '../assets/imgs/laptop-photo.jpg';
import { useState } from 'react';

export const Gallery = () => {

  const [itemActive, setItemActive] = useState(0);

  const selectItemGallery = ( pos ) => {

    document.querySelectorAll('.item-container--active').forEach(( e ) => e.classList.remove('item-container--active'));

    document.getElementsByClassName[pos].classList.add('gallery_item--active');

  }

  return (

    <section className="gallery">

          <ul className="gallery__only-desktop-column">

            <li className="gallery__item item-container item-container--active">

              <div className="gallery__item-container">

                <img className="gallery__photo" alt="Laptop" src={ laptopPhoto } />

                <p className="gallery__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet tortor diam habitasse tristique morbi tempus. Auctor semper diam dignissim turpis nisl ultricies tellus mi. Metus.</p>

              </div>

            </li>

          </ul>
    
        <div className="gallery__main-column">

          <h2 className="gallery__title">Lorem ipsum dolor sit amet</h2>

          <ul className="gallery__items">

            <li className="gallery__item-container item-container item-container--active">

              <button className='gallery__item-title'>
                Lorem ipsum
              </button>
              <div className='gallery__item-content item-content'>

                <img className="gallery__photo" alt="Laptop" src={ laptopPhoto } />

                <p className="gallery__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet tortor diam habitasse tristique morbi tempus. Auctor semper diam dignissim turpis nisl ultricies tellus mi. Metus.
                </p>

              </div>
              
            </li>

            <li className="gallery__item-container item-container item-container">

              <button className='gallery__item-title'>
                Lorem ipsum
              </button>
              <div className='gallery__item-content item-content'>

                <img className="gallery__photo" alt="Laptop" src={ laptopPhoto } />

                <p className="gallery__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet tortor diam habitasse tristique morbi tempus. Auctor semper diam dignissim turpis nisl ultricies tellus mi. Metus.
                </p>

              </div>
              
            </li>

            <li className="gallery__item-container item-container item-container">

              <button className='gallery__item-title'>
                Lorem ipsum
              </button>
              <div className='gallery__item-content item-content'>

                <img className="gallery__photo" alt="Laptop" src={ laptopPhoto } />

                <p className="gallery__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet tortor diam habitasse tristique morbi tempus. Auctor semper diam dignissim turpis nisl ultricies tellus mi. Metus.
                </p>

              </div>
              
            </li>

          </ul>

        </div>
    
    </section>

  )
}
