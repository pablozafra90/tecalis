import laptopPhoto from '../assets/imgs/laptop-photo.jpg';
import tabletPhoto from '../assets/imgs/tablet-photo.jpg';
import smatphonePhoto from '../assets/imgs/smartphone-photo.jpg';
import chevron from "../assets/imgs/chevron.svg";
import { useState } from 'react';
import { GalleryItem } from './_gallery/GalleryItem';

export const Gallery = () => {

  const [itemActive, setItemActive] = useState(0);

  
  var itemsMobile;

  const selectItemGallery = ( pos ) => {

    
    itemsMobile = Array.from(document.querySelector('.gallery__main-column').getElementsByClassName('item-container'));

    setItemActive( pos );

    
    itemsMobile.forEach(( e ) => e.classList.remove('item-container--active'));

    itemsMobile[ pos ].classList.add('item-container--active');

  }

  return (

    <section className="gallery section-container">

          <ul className="gallery__only-desktop-column">

            <GalleryItem id={ itemActive }/>
            {/* <GalleryItem id={ 0 }/>
            <GalleryItem id={ 1 }/>
            <GalleryItem id={ 2 }/> */}

          </ul>
    
        <div className="gallery__main-column">

          <h2 className="gallery__title">Lorem ipsum dolor sit amet</h2>

          <ul className="gallery__items">

            <li className="gallery__item-container item-container item-container--active">

              <button className='gallery__item-title item-title' onClick={ () => { selectItemGallery(0) }} onMouseEnter={ () => { selectItemGallery(0) }}>
                <h4>Lorem ipsum</h4><img alt='V' src={chevron} className='gallery__chevron chevron' />
              </button>

              <GalleryItem id={ 0 }/>
              
            </li>

            <li className="gallery__item-container item-container">

              <button className='gallery__item-title item-title' onClick={ () => { selectItemGallery(1) }} onMouseEnter={ () => { selectItemGallery(1) }}>
                <h4>Lorem ipsum</h4><img alt='V' src={chevron} className='gallery__chevron chevron' />
              </button>

              <GalleryItem id={ 1 }/>
              
            </li>

            <li className="gallery__item-container item-container">

              <button className='gallery__item-title item-title' onClick={ () => { selectItemGallery(2) }} onMouseEnter={ () => { selectItemGallery(2) }}>
                <h4>Lorem ipsum</h4><img alt='V' src={chevron} className='gallery__chevron chevron' />
              </button>

              <GalleryItem id={ 2 }/>
              
            </li>

          </ul>

        </div>
    
    </section>

  )
}
