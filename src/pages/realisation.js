import React from "react";
import '../styles/realisation.css'
import sky from '../assets/sky.png';
import vegetables from '../assets/vegetables.jpg';
import sushi from '../assets/sushi.jpg';
import lotus from '../assets/lotus.jpg';
import Card from 'react-bootstrap/Card';




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
                                <Card className="card">
                                        <Card.Img variant="top" src={vegetables} />
                                        <Card.Body className="card__body">
                                        <Card.Title className="card__title">Fresh food</Card.Title>
                                                <Card.Text>
                                                        Réalisation d'un site avec commande en ligne.
                                                </Card.Text>
                                                <button type="button" className="buttonRealiation">voir</button>
                                        </Card.Body>
                                        <Card.Footer>
                                                <small className="text-muted">Site réalisé avec PHP et MySQL</small>
                                        </Card.Footer>
                                </Card>
                                <Card className="card">
                                        <Card.Img variant="top" src={sushi} />
                                        <Card.Body className="card__body">
                                        <Card.Title className="card__title">Restaurant Akira</Card.Title>
                                                <Card.Text>
                                                        Réalisation d'un site vitrine.
                                                </Card.Text>
                                                <button type="button" className="buttonRealiation">voir</button>
                                        </Card.Body>
                                        <Card.Footer>
                                                <small className="text-muted">Site réalisé avec WordPres</small>
                                        </Card.Footer>
                                </Card>
                                <Card className="card">
                                        <Card.Img variant="top" src={lotus} />
                                        <Card.Body className="card__body">
                                        <Card.Title className="card__title">Espace bie-etre</Card.Title>
                                                <Card.Text>
                                                        Réalisation d'un site pour un practicien de bien etre.
                                                </Card.Text>
                                                <button type="button" className="buttonRealiation">voir</button>
                                        </Card.Body>
                                        <Card.Footer>
                                                <small className="text-muted">Site réalisé avec HTML/CSS</small>
                                        </Card.Footer>
                                </Card>
                        </div>
                </div>  
        )
}

export default Realisation;