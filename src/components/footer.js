import React from "react";
import Logo from "./logo";
import '../styles/footer.css'
import chevrondroit from '../assets/chevrondroit.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';



function Footer(params) {
        return(
                <footer>
                        <div className="colonne">
                                <div className="colonne__1">
                                        <a href="#" className="logoFoot"><Logo/></a>
                                        <address class="adress_bloc_container">
                                                <a href="https://maps.app.goo.gl/pvsrmDcVNeYYxNNx7" target="blank"><p>40 rue Laure Diebold<br></br>
                                                        69009 Lyon, France</p></a>
                                                <a href="tel:0620304050">06 20 30 40 50</a>
                                        </address>
                                        <div className="reseaux">
                                                <FontAwesomeIcon icon={faGithub} className="img__reseaux" />
                                                <FontAwesomeIcon icon={faLinkedin} className="img__reseaux" />
                                                <FontAwesomeIcon icon={faTwitter} className="img__reseaux" />
                                        </div>
                                </div>
                                <div className="colonne__2">
                                        <h5>Liens utiles</h5>
                                        <div className="div__liensUtilies">
                                                <a href="" className="liensUtiles"><img src={chevrondroit} alt='chevron droit'></img>Accueil</a>
                                                <a href="" className="liensUtiles"><img src={chevrondroit} alt='chevron droit'></img>A propos</a>
                                                <a href="" className="liensUtiles"><img src={chevrondroit} alt='chevron droit'></img>Services</a>
                                                <a href="" className="liensUtiles"><img src={chevrondroit} alt='chevron droit'></img>Me contacter</a>
                                                <p className="liensUtiles"><Link to="/mentionLegales"  className="nav_lien"><img src={chevrondroit} alt='chevron droit'></img>Mentions légales</Link></p>
                                        </div>
                                </div>
                                <div className="colonne__3">
                                        <h5>Mes dernières réalisation</h5>
                                        <div className="div__realisations">
                                                <a href="" className="liensRealisation"><img src={chevrondroit} alt='chevron droit'></img>Fresh food</a>
                                                <a href="" className="liensRealisation"><img src={chevrondroit} alt='chevron droit'></img>Restaurant Akira</a>
                                                <a href="" className="liensRealisation"><img src={chevrondroit} alt='chevron droit'></img>Espace bien-etre</a>
                                        </div>
                                </div>
                                <div className="colonne__4">
                                        <h5>Mes dernièrs articles</h5>
                                        <div className="div__article">
                                                <a href="" className="liensarticle"><img src={chevrondroit} alt='chevron droit'></img>Coder en HTML/CSS</a>
                                                <a href="" className="liensarticle"><img src={chevrondroit} alt='chevron droit'></img>Vendres ses produits sur le web</a>
                                                <a href="" className="liensarticle"><img src={chevrondroit} alt='chevron droit'></img>Se positionner sur Google</a>
                                        </div>
                                </div>
                        </div>
                        <div className="copy">
                                <p>&copy; Designed by John Doe</p>
                        </div>
                </footer>
        )
}

export default Footer;