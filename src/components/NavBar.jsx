import { useAlert } from "../hooks/useAlert";
import logo from '../assets/imgs/logo.svg';

export const NavBar = () => {

    const { setAlertNav } = useAlert();


    return (
        
        <nav className="nav-bar nav-bar--visible">

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
