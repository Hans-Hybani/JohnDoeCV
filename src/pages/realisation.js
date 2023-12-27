import React from "react";
import '../styles/realisation.css'
import sky from '../assets/sky.png';
import vegetables from '../assets/vegetables.jpg';
import sushi from '../assets/sushi.jpg';
import lotus from '../assets/lotus.jpg';
// import Button from "../components/button";



function Realisation() {
        return(
                <div>
                        <div className="fond__service">
                                <img src={sky} alt="fond d'ecran service"/>
                        </div>
                        <div className="titre__service">
                                <h1>PORTFOLIO</h1>
                                <p>Voici quelques-une de mes réalisations.</p>
                                <hr></hr>
                        </div>
                        <div className="realisation__bloc">
                                <div className="realisation__bloc__gauche realisation">
                                        <img src={vegetables} alt="légume"/>
                                        <div className="realisation__text">
                                                <h2>Fresh food</h2>
                                                <p>Réalisation d'un site avec commande en ligne.</p>
                                                <button type="button" className="buttonRealiation">voir</button>
                                        </div> 
                                        <p className="basDiv">Site réalisé avec PHP et MySQL</p>
                                </div>
                                <div className="realisation__bloc__milieu realisation">
                                        <img src={sushi} alt="sushi"/>
                                        <div className="realisation__text">
                                                <h2>Restaurant Akira</h2>
                                                <p>Réalisation d'un site vitrine.</p>
                                                <button type="button" className="buttonRealiation">voir</button>
                                        </div>
                                        <p className="basDiv">Site réalisé avec WordPres</p>
                                </div>
                                <div className="realisation__bloc__droite realisation">
                                        <img src={lotus} alt="zen"/>
                                        <div className="realisation__text">
                                                <h2>Espace bie-etre</h2>
                                                <p>Réalisation d'un site pour un practicien de bien etre.</p>
                                                <button type="button" className="buttonRealiation">voir</button>
                                        </div>
                                        <p className="basDiv">Site réalisé avec HTML/CSS</p>
                                </div>
                        </div>
                </div>
                
        )
}

export default Realisation;