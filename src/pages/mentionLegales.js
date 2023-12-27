import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import sky from '../assets/sky.png';
import '../styles/mentionLegales.css'
import localisateur from '../assets/localisateur.png';
import mobile from '../assets/mobile.png'
import enveloppe from '../assets/enveloppe.png'

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
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Editeur du site</Accordion.Header>
              <Accordion.Body className="body__accordion">
                <h2>John Doe</h2>
                <div className="contact__accordion">
                  <a href="tel:0620304050" className="contact__acc"><img src={localisateur} alt="localisateur"/>40 Rue Laure Diebold <br></br>
                  69009 Lyon, France</a>
                  <a href="tel:0620304050" className="contact__col"><img src={mobile} alt='telephone'></img> 06 20 30 40 50</a>
                  <a href="mailto:john.doe@gmail.com"  className="contact__col"><img src={enveloppe} alt='enveloppe'></img> john.doe@gmail.com</a>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
    </div>
    
  );
}

export default Legales;