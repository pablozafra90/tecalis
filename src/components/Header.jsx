import mainImg from '../assets/imgs/hand-holding-smartphone.png';

export const Header = () => {
  return (

    <section className="header main-container two-columns">

        <div className="header__copy-column column-container">

            <ul className="header__tag-list tag-list">
              <li className="header__tag-container">
                <span className="header__tag tag">
                  Loren
                </span>
              </li>
            </ul>
            <h1>Lorem ipsum dolor sit amet consectetur adipis</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis adipiscing in turpis luctus ipsum, amet. Risus ac mauris pellentesque sed nunc nulla accumsan nec. Risus gravida donec tempor feugiat.</p>
            <button className="header__btn btn btn--01">Button</button>
            
        </div>

        <div className="header__img-column column-container">
            <img className="header__img" alt="Hand holding a smartphone" src={ mainImg } />
        </div>

    </section>

  )
}
