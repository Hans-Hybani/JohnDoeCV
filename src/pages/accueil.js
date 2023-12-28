import React from "react";
import softwaredeveloper from '../assets/softwaredeveloper.jpg'
import developpeurBureau from '../assets/developpeurBureau.jpg'
import '../styles/accueil.css'
import '../styles/Button.css'
import Button from 'react-bootstrap/Button';
import ContextualExample from "../components/progressbar"
import handleScrollToSection from "../components/aproposclick"

function Accueil(props) {
        const titre = 'Bonjour, je suis John Doe'
        const sousTitre = 'Développeur full stack'

        return(
                <div>
                        <div className="img__conteneur">
                                <img src={softwaredeveloper} alt='fond ecran' className="img__image"/>
                                <h1 className="h1__conteneur">{titre}</h1>
                                <h2 className="h2__conteneur">{sousTitre}</h2>
                                <Button variant="primary" className="all__button" onClick={handleScrollToSection}>Voir plus</Button>{' '}
                        </div>
                        <div className="apropos__conteneur">
                                <div className="apropos__conteneur__carte" id="apropos" >
                                        <div className="apropos__conteneur__carte__text">
                                                <h3 className="apropos__titre">A propos</h3>
                                                <hr className="bare"></hr>
                                                <p className="apropos__paragraph">Passioné par l'informatique et les nouvelles <br></br>
                                                technologies, j'ai suivi une formation d'<strong>intégrateur développeur web</strong> au CEF. Au cours de cette formation,<br></br>
                                                j'ai pu acquérir des bases solides pour travailler dans le<br></br>
                                                domaine du <strong>développement web.</strong></p>

                                                <p>Basé à Lyon, je suis en recherche d'une alternance au<br></br>
                                                sein d'une agence digitale pour consolider ma formation<br></br>
                                                de <strong>développeur web full stack.</strong></p>

                                                <p>J'accorde une attention particulière à la qualité du code<br></br>
                                                que j'écris et je respecte les bonnes pratiques du web.</p>
                                        </div>
                                        <div className="apropos__conteneur__carte__image">
                                                <img src={developpeurBureau} alt='developpeur' className="img__dev"/>
                                                <h4 className="competence">Mes compétences</h4>
                                                <ContextualExample/>
                                        </div>
                                </div>
                        </div>              
                </div>
        )
}

export default Accueil