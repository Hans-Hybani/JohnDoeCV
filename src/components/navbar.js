import React, {useState} from "react";
import '../styles/navbar.css';
import hamburgerMenu from '../assets/hamburgerMenu.png'

function Navbar(props) {
        const [deroulement,setDeroulement] = useState("nav__menu");
        const hamburger = () => {
                deroulement === "nav__menu" ? setDeroulement("nav__menu nav__deroulement"): setDeroulement("nav__menu")
        }
        return (
                <nav className="nav">
                        <a href="#" className="logo">JOHN DOE</a>
                        <ul className={deroulement}>
                                <li className="nav__liste"><a href="#" className="nav_lien">ACCUIEL</a></li>
                                <li className="nav__liste"><a href="#" className="nav_lien">SERVICES</a></li>
                                <li className="nav__liste"><a href="#" className="nav_lien">REALISATION</a></li>
                                <li className="nav__liste"><a href="#" className="nav_lien">BLOG</a></li>
                                <li className="nav__liste"><a href="#" className="nav_lien">MA CONTACTER</a></li>                               
                        </ul>
                <a onClick={hamburger} href="#" className="nav__hamburger">
                        <img src={hamburgerMenu} alt='icone menu hamburgerMenu' className='hamburger'/>
                </a>
                </nav>
        )
}

export default Navbar;