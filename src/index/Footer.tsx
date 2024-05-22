import { Col, Container, Row } from "reactstrap";
import Img from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="site-footer section border-top">
      <Container className="pb-3">
        <Row className="gap-y text-center text-md-left">
          <Col md="6" lg="4" className="mr-auto">
            {/* <img src={require("assets/img/logo.png")} alt="" className="logo" /> */}
            <img src={Img} alt="" className="logo" />

            <p className="lead">
              <span className="bold">Dial Studios</span>, Desarrollo Web y Apps progresivas
            </p>
          </Col>

          <Col md="3" lg="4">
            <h6 className="py-2 bold">Contactenos</h6>

            <p>
            Estamos mejorando nuestra presencia en las redes sociales. Para conocer todas las novedades sobre productos, lanzamientos y servicios
            </p>
            <nav className="nav justify-content-center justify-content-md-start">
              <a
                href="https://www.facebook.com/5studios.net"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm brand-facebook"
              >
                {/* <FontAwesomeIcon icon={["fab", "facebook"]} /> */}
              </a>
            </nav>
          </Col>

          <Col md="3">
            <h6 className="py-2 bold">Otros Productos</h6>

            <nav className="nav flex-column">
              <a
                className="nav-item py-2"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diseño
              </a>
              <a
                className="nav-item py-2"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diseño ux/ui
              </a>
              <a
                className="nav-item py-2"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Marketing digital
              </a>
            </nav>
          </Col>
        </Row>

        <hr className="mt-5" />

        <Row className="small align-items-center">
          <Col md="4">
            <p className="mt-2 mb-md-0 text-muted text-center text-md-left">
              © 2024
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 mr-2"
              >
                Dial Studios
              </a>
                All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
