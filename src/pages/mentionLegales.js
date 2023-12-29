import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import sky from '../assets/sky.png';
import '../styles/mentionLegales.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';



function Legales() {
  return (
    <div>
       <div>
            <div className="fond__service">
                <img src={sky} alt="fond d'ecran service"/>
            </div>

            <div className="titre__service">
                <h1>MENTION LEGALES</h1>
                <hr></hr>
            </div>
       </div>

        <div className="accordion">
          <Accordion defaultActiveKey="0" className="accordion__bloc">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Editeur du site</Accordion.Header>
              <Accordion.Body className="body__accordion">
                <h2>John Doe</h2>
                <div className="contact__accordion">
                  <a href="https://maps.app.goo.gl/pvsrmDcVNeYYxNNx7" className="contact__acc"><FontAwesomeIcon icon={faLocationDot} className="icon__mention" />40 Rue Laure Diebold <br></br>
                  69009 Lyon, France</a>
                  <a href="tel:0620304050" className="contact__col"><FontAwesomeIcon icon={faMobile} className="icon__mention" /> 06 20 30 40 50</a>
                  <a href="mailto:john.doe@gmail.com"  className="contact__col"><FontAwesomeIcon icon={faEnvelope} className="icon__mention"/> john.doe@gmail.com</a>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>hebergeur</Accordion.Header>
              <Accordion.Body className="body__accordion">
                <h2>codesandbox</h2>
                <p>91 rue du sandbox<br></br>
                Pays bas</p>
                <a href="https://codesandbox.io/dashboard/repositories?workspace=a548b1d5-7739-4860-856f-e7cfc2528391"  className="contact__co"><FontAwesomeIcon icon={faGlobe} className="icon__mention" />codesandbox</a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Crédit</Accordion.Header>
              <Accordion.Body className="body__accordion">
                <h2>Crédit</h2>
                <p>Site dévéloppé par John Doe, étudiant du CEF</p>
                <p>Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/"  className="contact__co">Pixaby.</a></p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
    </div>
    
  );
}

export default Legales;