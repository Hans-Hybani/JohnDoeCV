import React, {useEffect} from "react";
import '../styles/contacter.css'
import Form from 'react-bootstrap/Form';
import Buton from "../components/buton";
import Map from "../components/map"
import localisateur from '../assets/localisateur.png';
import mobile from '../assets/mobile.png'


function Contacter() {
        useEffect(() => {
                document.body.classList.add('mon-composant-body');
        
                return () => {
                  document.body.classList.remove('mon-composant-body');
                };
              }, []);
            
        return(
                <div> 
                        <div className="contact__conteneur__alpha">
                                <div className="titre__service">
                                        <h1>ME CONTACTER</h1>
                                        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplire le formulaire de contact.</p>
                                        <hr></hr>
                                </div>
                                <div className="contact__conteneur">
                                        <div className="contact__conteneur__gauche contact">
                                                <h2>Formulaire de contact</h2>
                                                <hr className="bar__conteneur"></hr>
                                                <Form>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Control type="input" placeholder="Votre nom" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Control type="email" placeholder="Votre adresse mail" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Control type="telephone" placeholder="Votre numéro de téléphone" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Control type="input" placeholder="Sujet" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                                <Form.Control as="textarea" rows={3} />
                                                        </Form.Group>
                                                        <div className="buton__form">
                                                                <Buton>Envoyer</Buton>
                                                        </div>
                                                </Form>
                                        </div>
                                        <div className="contact__conteneur__droite contact">
                                                <h2>Mes coordonées</h2>      
                                                <hr className="bar__conteneur"></hr>
                                                <div className="contact__carte">
                                                        <a href="https://maps.app.goo.gl/pvsrmDcVNeYYxNNx7"><img src={localisateur} alt="localisateur" className="contact__img"/>40 Rue Laure Diebold 69009 Lyon, France</a>
                                                        <a href="tel:0620304050"><img src={mobile} alt='telephone' className="contact__img"></img> 06 20 30 40 50</a>
                                                </div>
                                                <div classNam="map">
                                                        <Map/>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Contacter;