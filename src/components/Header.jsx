import { useAlert } from "../hooks/useAlert";


import mainImg from '../assets/imgs/hand-holding-smartphone.png';

export const Header = () => {

  const { setAlertNav } = useAlert();


  return (

    <section className="header section-container two-columns">

        <div className="header__copy-column">

            <div className='header__copy-container'>

              <ul className="header__tag-list tag-list">
                <li className="header__tag tag" onClick={() => { setAlertNav() }}>
                    Loren
                </li>
              </ul>
              <h1>Lorem ipsum dolor sit amet consectetur adipis</h1>
              <p>Lorem ipsum dolor sit amet, <a onClick={() => { setAlertNav() }}>consectetur adipiscing</a> elit. <a onClick={() => { setAlertNav() }}>Mollis adipiscing</a> in turpis luctus ipsum, amet. Risus ac mauris pellentesque sed nunc nulla accumsan nec. Risus gravida donec tempor feugiat.</p>

            </div>

            <button className="header__btn btn btn--01" onClick={() => { setAlertNav() }}>Button</button>
            
        </div>

        <div className="header__img-column column-container">
            <img className="header__img" alt="Hand holding a smartphone" src={ mainImg } />
        </div>

    </section>

  )
}
