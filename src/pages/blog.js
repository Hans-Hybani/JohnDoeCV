import Card from 'react-bootstrap/Card';
import '../styles/blog.css';
import sky from '../assets/sky.png';
import code from '../assets/code.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/card.css';
import Buton from "../components/buton";


function Blog() {
  return (
        <div>
                <div className="fond__service">
                                <img src={sky} alt="fond d'ecran service"/>
                        </div>
                        <div className="titre__service">
                                <h1>BLOG</h1>
                                <p>Retrouvez ici quelques articles sur le développement web.</p>
                                <hr></hr>
                        </div>
                <div className="card__conteneur">
                        <Card className="card">
                                <Card.Img variant="top" src={code} />
                                <Card.Body className="card__body">
                                <Card.Title className="card__title">Coder son site en <br></br>
                                HTML/CSS</Card.Title>
                                        <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in
                                                to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Buton/>
                                </Card.Body>
                                <Card.Footer>
                                        <small className="text-muted">Publié le 22 aout 2022</small>
                                </Card.Footer>
                        </Card>
                        <Card className="card">
                                <Card.Img variant="top" src={code} />
                                <Card.Body className="card__body">
                                <Card.Title className="card__title">Vendre ses produits<br></br>
                                sur le web</Card.Title>
                                        <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in
                                                to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Buton/>
                                </Card.Body>
                                <Card.Footer>
                                        <small className="text-muted">Publié le 20 aout 2022</small>
                                </Card.Footer>
                        </Card>
                        <Card className="card">
                                <Card.Img variant="top" src={code} />
                                <Card.Body className="card__body">
                                <Card.Title className="card__title">Se positionner sur<br></br>
                                Google</Card.Title>
                                        <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in
                                                to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Buton/>
                                </Card.Body>
                                <Card.Footer>
                                        <small className="text-muted">Publié le 1 aout 2022</small>
                                </Card.Footer>
                        </Card>
                        <Card className="card">
                                <Card.Img variant="top" src={code} />
                                <Card.Body className="card__body">
                                <Card.Title className="card__title">Coder en responive <br></br>
                                design</Card.Title>
                                        <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in
                                                to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Buton/>
                                </Card.Body>
                                <Card.Footer>
                                        <small className="text-muted">Publié le 31 juillet 2022</small>
                                </Card.Footer>
                        </Card>
                        <Card className="card">
                                <Card.Img variant="top" src={code} />
                                <Card.Body className="card__body">
                                <Card.Title className="card__title">Téchnique de<br></br>
                                référencement</Card.Title>
                                        <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in
                                                to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Buton/>
                                </Card.Body>
                                <Card.Footer>
                                        <small className="text-muted">Publié le 30 juillet 2022</small>
                                </Card.Footer>
                        </Card>
                        <Card className="card">
                                <Card.Img variant="top" src={code} />
                                <Card.Body className="card__body">
                                <Card.Title className="card__title">Apprendre à coder</Card.Title>
                                        <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in
                                                to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Buton/>
                                </Card.Body>
                                <Card.Footer>
                                        <small className="text-muted">Publié le 12 juillet 2022</small>
                                </Card.Footer>
                        </Card>
                </div>
        </div>
      
      
  );
}

export default Blog;