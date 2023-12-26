import logo from "../assets/imgs/logo.svg";
import { useAlert } from "../hooks/useAlert";


export const Footer = () => {

    const { setAlertNav } = useAlert();

    

    return (

        <footer>

            <div className="footer section-container">

                <img alt='Logo' src={ logo } className="footer__logo"/>

                <div className="footer__links-container">

                    <div className="footer__col">

                        <h5 onClick={() => { setAlertNav() }}>Lorem ipsum</h5>

                        <ul>
                            <li onClick={() => { setAlertNav() }}>Section</li>
                            <li onClick={() => { setAlertNav() }}>Section</li>
                            <li onClick={() => { setAlertNav() }}>Section</li>
                            <li onClick={() => { setAlertNav() }}>Section</li>
                            <li onClick={() => { setAlertNav() }}>Section</li>
                        </ul>

                    </div>

                    <div className="footer__col">

                        <h5 onClick={() => { setAlertNav() }}>Lorem ipsum</h5>

                        <ul>
                            <li onClick={() => { setAlertNav() }}>Section</li>
                            <li onClick={() => { setAlertNav() }}>Section</li> 
                        </ul>

                    </div>

                    <div className="footer__col footer__col--double">

                        <h5 onClick={() => { setAlertNav() }}>Lorem ipsum</h5>

                        <div className="footer__row">

                                <ul>
                                    <li className="footer__title">Title</li>
                                    <li onClick={() => { setAlertNav() }}>Section</li>
                                    <li onClick={() => { setAlertNav() }}>Section</li> 
                                    <li onClick={() => { setAlertNav() }}>Section</li>
                                    <li onClick={() => { setAlertNav() }}>Section</li>
                                    <li onClick={() => { setAlertNav() }}>Section</li>
                                </ul>

                                <ul>
                                    <li className="footer__title">Title</li>
                                    <li onClick={() => { setAlertNav() }}>Section</li>
                                    <li onClick={() => { setAlertNav() }}>Section</li> 
                                    <li onClick={() => { setAlertNav() }}>Section</li>
                                    <li onClick={() => { setAlertNav() }}>Section</li>
                                    <li onClick={() => { setAlertNav() }}>Section</li>
                                </ul>

                        </div>

                    </div>

                    <div className="footer__col">

                        <h5 onClick={() => { setAlertNav() }}>Lorem ipsum</h5>

                        <ul>
                            <li onClick={() => { setAlertNav() }}>Section</li>
                            <li onClick={() => { setAlertNav() }}>Section</li> 
                            <li onClick={() => { setAlertNav() }}>Section</li>
                            <li onClick={() => { setAlertNav() }}>Section</li>
                            <li onClick={() => { setAlertNav() }}>Section</li>
                        </ul>

                    </div>

                    <div className="footer__col">

                        <h5 onClick={() => { setAlertNav() }}>Lorem ipsum</h5>

                        <ul>
                            <li onClick={() => { setAlertNav() }}>Section</li>
                            <li onClick={() => { setAlertNav() }}>Section</li> 
                            <li onClick={() => { setAlertNav() }}>Section</li>
                            <li onClick={() => { setAlertNav() }}>Section</li>
                            <li onClick={() => { setAlertNav() }}>Section</li>
                        </ul>

                    </div>

                    <div className="footer__col">

                        <h5 onClick={() => { setAlertNav() }}>Lorem ipsum</h5>

                        <ul>
                            <li onClick={() => { setAlertNav() }}>Section</li>
                            <li onClick={() => { setAlertNav() }}>Section</li> 
                            <li onClick={() => { setAlertNav() }}>Section</li>
                            <li onClick={() => { setAlertNav() }}>Section</li>
                            <li onClick={() => { setAlertNav() }}>Section</li>
                        </ul>

                    </div>

                </div>

            </div>

        </footer>
  )
}
