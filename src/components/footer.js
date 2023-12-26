import React from "react";
import Logo from "./logo";
import '../styles/footer.css'
import chevrondroit from '../assets/chevrondroit.png'
import github from '../assets/github.png'
import linkdin from '../assets/linkdin.png'
import twitter from '../assets/twitter.png'

function Footer(params) {
        return(
                <footer>
                        <div className="colonne__1">
                                <a href="#" className="logoFoot"><Logo/></a>
                                <address class="adress_bloc_container">
                                        <a href="https://maps.app.goo.gl/pvsrmDcVNeYYxNNx7"><p>40 rue Laure Diebold<br></br>
                                                69009 Lyon, France</p></a>
                                        <a href="tel:0620304050">06 20 30 40 50</a>
                                </address>
                                <div className="reseaux">
                                        <a href=""><img src={github} alt='github' className="img__reseaux"/></a>
                                        <a href=""><img src={linkdin} alt='linkdin' className="img__reseaux"/></a>
                                        <a href=""><img src={twitter} alt='twitter' className="img__reseaux"/></a>
                                </div>
                        </div>
                        <div className="colonne__2">
                                <h5>Liens utiles</h5>
                                <div className="div__liensUtilies">
                                        <a href="" className="liensUtiles"><img src={chevrondroit} alt='chevron droit'></img>Accueil</a>
                                        <a href="" className="liensUtiles"><img src={chevrondroit} alt='chevron droit'></img>A propos</a>
                                        <a href="" className="liensUtiles"><img src={chevrondroit} alt='chevron droit'></img>Services</a>
                                        <a href="" className="liensUtiles"><img src={chevrondroit} alt='chevron droit'></img>Me contacter</a>
                                        <a href="" className="liensUtiles"><img src={chevrondroit} alt='chevron droit'></img>Mentions légales</a>
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
                </footer>
        )
}

export default Footer;