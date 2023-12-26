import React, {useState} from "react";
import '../styles/header.css';
import hamburgerMenu from '../assets/hamburgerMenu.png'
import Logo from "./logo";
import { Link } from 'react-router-dom';

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
                                <li className="nav__liste"><Link to="/realisations"  className="nav_lien">REALISATION</Link></li>
                                <li className="nav__liste"><Link to="/blog"  className="nav_lien">BLOG</Link></li>
                                <li className="nav__liste"><Link to="/ma-contacter"  className="nav_lien">MA CONTACTER</Link></li>
                        </ul>
                        <a onClick={hamburger} href="#" className="nav__hamburger">
                                <img src={hamburgerMenu} alt='icone menu hamburgerMenu' className='hamburger'/>
                        </a>
                </nav>
                
        )
        
}

export default Header;