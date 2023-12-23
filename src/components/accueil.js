import React from "react";
import softwaredeveloper from '../assets/softwaredeveloper.jpg'
import '../styles/accueil.css'
import '../styles/Button.css'
import Button from "./button";

function Accueil(props) {
        const titre = 'Bonjour, je suis John Doe'
        const sousTitre = 'Développeur full stack'

        return(
                <div>
                        <div className="img__conteneur">
                                <img src={softwaredeveloper} alt='fond' className="img__image"/>
                                <h1 className="h1__conteneur">{titre}</h1>
                                <h2 className="h2__conteneur">{sousTitre}</h2>
                                {/* <button className="all__button">En savoir plus</button> */}
                                <Button className="all__button"/>
                        </div>
                </div>
        )
}

export default Accueil