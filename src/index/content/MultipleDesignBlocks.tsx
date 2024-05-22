import classNames from "classnames";
import React from "react";
// import Fade from "react-reveal/Fade";
// import Tilt from "react-tilt";
import { Col, Container, Row } from "reactstrap";
import Img from "../../assets/img/screens/app/pieces/2.png";
import MoreInfoButton from "../../components/MoreInfoButton";

const renderItems = () => {
  const items = [];

  for (let i = 1; i < 4; i++) {
    items.push(
        <div
          key={i}
          className={classNames(
            "rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast",
            { "mt-5": i > 1 }
          )}
        >
          <figure>
            <img
              // src={`../../assets/img/screens/app/${i}.png`}
              src={Img}
              className="img-responsive"
              alt=""
            />
          </figure>
        </div>
    );
  }

  return items;
};

const MultipleDesignBlocks: React.FC = () => {
  return (
    <section className="section powered-design">
      <div className="shapes-container">
        <div className="shape shape-circle shape-circle-1">
            <div />
        </div>
        <div className="shape shape-circle shape-circle-2">
            <div />
        </div>
        <div className="shape shape-ring animation--rotating-diagonal">
          <div />
        </div>
        <div className="shape shape-triangle shape-animated">
          <div className="animation--rotating" />
        </div>

        <div className="shape pattern-dots-1" />
      </div>

      <Container>
        <Row className="gap-y align-items-center">
          <Col md="6">
            <div className="section-heading">
              <h2 className="heading-line">
                No Reinventamos la Rueda.<br></br> Sólo desarrollamos con pasion.
              </h2>
              <p className="lead text-muted">
                El desarrollo web tal y como lo conoces se ha ido. El desarrollo como usted lo quiere pontenciar y cumplir los objetivos.
              </p>
            </div>

            <MoreInfoButton
              className="btn btn-outline-alternate more-link mt-0"
              text="El tiempo es ahora"
              to="#!"
            />
          </Col>

          <Col md="6">{renderItems()}</Col>
        </Row>
      </Container>
    </section>
  );
};

export default MultipleDesignBlocks;
