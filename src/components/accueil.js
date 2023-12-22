import React from "react";
import softwaredeveloper from '../assets/softwaredeveloper.jpg'
import '../styles/accueil.css'

function Accueil(props) {
        const titre = 'Bonjour, je suis John Doe'
        const sousTitre = 'Développeur full stack'
        return(
                <div>
                        <div className="img__conteneur">
                                <img src={softwaredeveloper} alt='fond'/>
                                <h1 className="h1__conteneur">{titre}</h1>
                                <h2 className="h2__conteneur">{sousTitre}</h2>
                                
                        </div>
                </div>
        )
}

export default Accueil