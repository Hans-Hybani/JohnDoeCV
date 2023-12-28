import React, {useState} from "react";
import '../styles/header.css';
import hamburgerMenu from '../assets/hamburgerMenu.png'
import Logo from "./logo";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
        window.addEventListener("scroll", () => {
                setDeroulement("nav__menu");
            });
        const [deroulement,setDeroulement] = useState("nav__menu");
        const hamburger = () => {
                deroulement === "nav__menu" ? setDeroulement("nav__menu nav__deroulement"): setDeroulement("nav__menu")
        }
        return (
                <nav className="nav">
                        <Link to="/"  className="logo"><Logo /></Link>
                        <ul className={deroulement}>
                                <li className="nav__liste"><Link to="/" className="nav_lien">ACCUEIL</Link></li>
                                <li className="nav__liste"><Link to="/services"  className="nav_lien">SERVICES</Link></li>
                                <li className="nav__liste"><Link to="/realisation"  className="nav_lien">REALISATION</Link></li>
                                <li className="nav__liste"><Link to="/blog"  className="nav_lien">BLOG</Link></li>
                                <li className="nav__liste"><Link to="/contacter"  className="nav_lien">ME CONTACTER</Link></li>
                        </ul>
                        <button type="button" onClick={hamburger}  className="nav__hamburger">
                                <FontAwesomeIcon icon={faBars} className='hamburger' />
                        </button>
                </nav>
                
        )
        
}

export default Header;