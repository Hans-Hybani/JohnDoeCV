import React from "react";
import ordinateur from "../assets/ordinateur.png"
import tableaustatistique from "../assets/tableaustatistique.png"
import fichierhtml from '../assets/fichierhtml.png'
import '../styles/service.css'
import sky from '../assets/sky.png'
function Services() {
        return(
                <div>
                        <div className="fond__service">
                                <img src={sky} alt="fond d'ecran service"/>
                        </div>
                        <div className="titre__service">
                                <h1>MON OFFRE DE SERVICES</h1>
                                <p>Voici les prestations sur lesquelles je peux intervenir.</p>
                                <hr></hr>
                        </div>
                        <div className="carte__service">
                                <div className="carte__service__gauche carte">
                                        <img src={ordinateur} alt='ordinateur' className="img__service"/>
                                        <h2>UX DESIGN</h2>
                                        <p>L'<strong>UX Design</strong> est une méthode de<br></br>
                                        conception centrée sur l'utilisateur. Son but<br></br>
                                        est d'offrir une expérience de navigation<br></br>
                                        optimale à l'internaute.</p>
                                </div>
                                <div className="carte__service__milieu carte">
                                        <img src={tableaustatistique} alt='tableau statistique' className="img__service"/>
                                        <h2>DEVELOPPEMENT WEB</h2>
                                        <p>Le <strong>développement de sites web</strong> repose sur<br></br>
                                        l'utilisation des langages HTML, CSS,<br></br>
                                        JavaScript et PHP.</p>
                                </div>
                                 <div className="carte__service__droite carte">
                                        <img src={fichierhtml} alt='fichier html' className="img__service"/>
                                        <h2>REFERENCEMENT</h2>
                                        <p>Le <strong>référencement naturel d'un site,</strong> aussi<br></br>
                                         appelé SEO, consiste à mettre des<br></br>
                                        techniques en oeuvre pour <span className="italique">améliorer sa<br></br>
                                        position</span> dans les résulats des moteurs de<br></br>
                                        recherche.</p>
                                </div>
                        </div>
                </div>
        )
}

export default Services;