import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Fade from "react-reveal/Fade";
import { Col, Container, Row } from "reactstrap";
import Screen from "../../assets/img/screens/app/3.png";
import IconSvg from "../../components/IconSvg";


const Heading = () => {
  return (
    <header className="header alter2-header section">
      <div className="shapes-container">
        <div className="animation-shape shape-ring animation--clockwise" />
        <div className="animation-shape shape-circle shape-circle-1 animation--anti-clockwise" />
        <div className="animation-shape shape-circle shape-circle-2 animation--clockwise" />
        <div className="animation-shape shape-heart animation--clockwise">
          <div className="animation--rotating" />
        </div>
        <div className="animation-shape shape-triangle animation--rotating-diagonal">
          <div className="animation--rotating" />
        </div>
        <div className="animation-shape shape-diamond animation--anti-clockwise">
          <div className="animation--rotating" />
        </div>
        <div className="static-shape shape-ring-1" />
        <div className="static-shape shape-ring-2" />
        <div className="static-shape shape-circle shape-circle-1">
          <div />
        </div>
        <div className="static-shape shape-circle shape-circle-2">
          <div />
        </div>
        <div className="static-shape pattern-dots-1" />
        <div className="static-shape pattern-dots-2" />
        <div className="static-shape background-shape-main" />
        <div className="static-shape ghost-shape ghost-shape-1" />
      </div>
      <Container>
        <Row>
          <Col md="6">
            <span className="rounded-pill shadow-box bg-contrast text-dark bold py-2 px-4">
              <IconSvg icon="light" size="20" color="#ff6f61" />
              <span className="ml-2 text-primary">Impresionando</span> el mundo
            </span>
            <h1 className="display-4 display-md-2 mt-3">
              <span className="bold">WebApps</span>
            </h1>
            <p className="lead bold text-primary m-0">
              Desarrollo Web y Apps progresivas Para todos
            </p>
            <p className="lead m-0">
              Potencia tu negocio online y nunca la abandones pausa tu suscrición en cualquier momento o llevala a otro nivel.
            </p>

            <nav className="nav my-5">
              <a
                href="#!"
                className="btn btn-rounded btn-alternate mr-2 mr-md-3"
              >
                Ver Planes
                <FontAwesomeIcon
                  icon={["fas", "long-arrow-alt-right"]}
                  className="ml-2"
                />
              </a>
              <a
                href="#demos"
                className="btn btn-rounded btn-outline-alternate scrollto"
              >
                Contactanos
              </a>
            </nav>
          </Col>
          <Col md="6">
            <div className="ipad front mx-auto">
              <div className="screen shadow-box">
                <img src={Screen} alt="..." />
              </div>
              <div className="notch" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Heading;
