import React from "react";
import Logo from "./logo";
import '../styles/footer.css'
import chevrondroit from '../assets/chevrondroit.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import handleScrollToSection from "../components/aproposclick"

function Footer(params) {
        return(
                <footer>
                        <div className="colonne">
                                <div className="colonne__1">
                                        <Link className="logoFoot" to="/"><Logo/></Link>
                                        <address class="adress_bloc_container">
                                                <a href="https://maps.app.goo.gl/pvsrmDcVNeYYxNNx7" target="blank"><p>40 rue Laure Diebold<br></br>
                                                        69009 Lyon, France</p></a>
                                                <a href="tel:0620304050">06 20 30 40 50</a>
                                        </address>
                                        <div className="reseaux">
                                                <Link to="/profilGit" target="_blank"><FontAwesomeIcon icon={faGithub} className="img__reseaux" /></Link>
                                                <Link to="https://www.linkedin.com/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="img__reseaux" /></Link>
                                                <Link to="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} className="img__reseaux" /></Link>
                                        </div>
                                </div>
                                <div className="colonne__2">
                                        <h5>Liens utiles</h5>
                                        <div className="div__liensUtilies">
                                                <Link className="liensUtiles" to="/"><img src={chevrondroit} alt='chevron droit'></img>Accueil</Link>
                                                <Link className="liensUtiles" to="/" onClick={handleScrollToSection}><img src={chevrondroit} alt='chevron droit'></img>A propos</Link>
                                                <Link className="liensUtiles" to="/realisation"><img src={chevrondroit} alt='chevron droit'></img>Services</Link>
                                                <Link className="liensUtiles" to="/contacter"><img src={chevrondroit} alt='chevron droit'></img>Me contacter</Link>
                                                <Link className="liensUtiles" to="/mentionLegales"><img src={chevrondroit} alt='chevron droit'></img>Mentions légales</Link>
                                        </div>
                                </div>
                                <div className="colonne__3">
                                        <h5>Mes dernières réalisation</h5>
                                        <div className="div__realisations">
                                                <Link className="liensRealisation" to="/realisation"><img src={chevrondroit} alt='chevron droit'></img>Fresh food</Link>
                                                <Link className="liensRealisation" to="/realisation"><img src={chevrondroit} alt='chevron droit'></img>Restaurant Akira</Link>
                                                <Link className="liensRealisation" to="/realisation"><img src={chevrondroit} alt='chevron droit'></img>Espace bien-etre</Link>
                                        </div>
                                </div>
                                <div className="colonne__4">
                                        <h5>Mes dernièrs articles</h5>
                                        <div className="div__article">
                                                <Link className="liensarticle" to="/blog"><img src={chevrondroit} alt='chevron droit'></img>Coder en HTML/CSS</Link>
                                                <Link className="liensarticle" to="/blog"><img src={chevrondroit} alt='chevron droit'></img>Vendres ses produits sur le web</Link>
                                                <Link className="liensarticle" to="/blog"><img src={chevrondroit} alt='chevron droit'></img>Se positionner sur Google</Link>
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