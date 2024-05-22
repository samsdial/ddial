import { JSX } from "react/jsx-runtime";
import { Col, Container, Row } from "reactstrap";

const renderFeatures = () => {
  const features: JSX.Element[] = [];
  const elements = [
    {
      icon: "pe-7s-diamond",
      title: "Entrega Rápida",
      description:
        "Reciba su desarrollo en un plazo medio de cinco días laborables."
    },
    {
      icon: "pe-7s-tools",
      title: "Revisiones Ilimitadas",
      description:
        "Revisaremos los desarrollos hasta que esté 100% satisfecho."
    },
    {
      icon: "pe-7s-light",
      title: "Soporte Continuo",
      description:
        "Acceso a soporte técnico dedicado para cualquier consulta o problema."
    }
  ];

  elements.forEach((element, i) => {
    features.push(
      <Col md="4" className="py-4 rounded shadow-hover" key={i}>
        <i className={`pe ${element.icon} pe-3x mb-3 text-primary`} />
        <h5 className="bold">{element.title}</h5>
        <p>{element.description}</p>
      </Col>
    );
  });

  return features;
};

const Features = () => {
  return (
    <section id="features" className="section features">
      <Container>
        <div className="section-heading text-center">
          <h2 className="heading-line">Planes flexibles y completos</h2>
          <p className="lead text-muted">
          Suscríbase a un plan y solicite tantos desarrollos como desee.
          </p>
        </div>

        <Row className="gap-y text-center text-md-left">{renderFeatures()}</Row>
      </Container>
    </section>
  );
};

export default Features;
