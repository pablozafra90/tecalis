import { useAlert } from "../hooks/useAlert";
import logo from '../assets/imgs/logo.svg';
import { useState } from "react";


export const NavBar = () => {

    const { setAlertNav } = useAlert();

    const [stateClassName, setStateClassName] = useState('--on-top');

    window.addEventListener('scroll', () => {
      if ( window.scrollY > 30 ) {
        setStateClassName('')
      } else {
        setStateClassName('--on-top')
      }
    })

    return (
        
        <nav className={`nav-bar nav-bar${ stateClassName }`}>

            <div className='nav-bar__container'>

                <img className="nav-bar__logo"  src={ logo }/>

                <ul onClick={() => { setAlertNav() }}>

                    <li><h5>Section</h5></li>
                    <li><h5>Section</h5></li>
                    <li><h5>Section</h5></li>
                    <li><h5>Section</h5></li>
                    <li><h5>Section</h5></li>

                </ul>

                <button className="nav-bar__hamburguer-btn" ></button>

            </div>

        </nav>

    )

}
