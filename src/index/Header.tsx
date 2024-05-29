import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as SmoothLink } from "react-scroll";
import { Col, Container, Row } from "reactstrap";
import Icons from '../assets/icons.svg';
import IconSvg from '../components/IconSvg';

const icons = [
  { icon: "apx" },
  { icon: "bs" },
  { icon: "cordova" },
  { icon: "css" },
  { icon: "fa" },
  { icon: "html" },
  { icon: "js" },
  { icon: "npm" },
  { icon: "sass" },
  // Repeat for remaining icons (if needed)
];

const Header = () => {
  const createAnimations = () => {
    return icons.map((el, i) => {
      const iconSize =
        i % 4 === 0 ? "xl" : i % 3 === 0 ? "lg" : i % 2 ? "md" : "xxl";

      return (
        <div
          key={i}
          className={`bubble bg-contrast rounded-circle p-2 shadow icon icon-${iconSize}`}
        >
          <img
            src={`assets/img/demo/header/${el.icon}.svg`}
            alt=""
            className="img-responsive"
          />
        </div>
      );
    });
  };

  return (
    <header className="header demo-header section gradient gradient-primary-light text-contrast">
      <Container className="pb-7">
        <Row>
          <Col lg="6">
            <img
              src="assets/img/logo-light.png"
              className="logo d-block mb-5"
              alt="Laapp"
            />
            <span className="rounded-pill shadow-box bg-contrast text-dark bold py-2 px-4">
              <FontAwesomeIcon
                icon={["far", "lightbulb"]}
                className="text-primary mr-2"
              />
              <IconSvg icon="light" />
              <svg viewBox="0 0 28.3 28.3" className="App-icon">
                <use xlinkHref={`${Icons}#square`} />
              </svg>
              <svg viewBox="0 0 28.3 28.3" className="App-icon">
                <use xlinkHref={`${Icons}#square`} />
              </svg>
              <span className="text-primary">Awesome</span> Landing Page
            </span>
            <h1 className="text-contrast display-4 display-md-3">
              <span className="bold">Laapp</span>
            </h1>
            <p className="lead bold">
              Premium Startup &amp; App Landing Page
            </p>

            <p className="lead">
              Besides its beautiful design. Laapp is an incredibly rich core
              framework for you to showcase your App.
            </p>

            <nav className="nav my-5">
              <a
                href="https://themeforest.net/item/laapp-app-landing-page/23562388"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-rounded btn-alternate mr-2 mr-md-5"
              >
                Buy now
                <FontAwesomeIcon
                  icon={["fas", "long-arrow-alt-right"]}
                  className="ml-2"
                />
              </a>
              <SmoothLink
                href="#!"
                to="demos"
                smooth={true}
                className="btn btn-rounded btn-contrast"
              >
                Explore demos
              </SmoothLink>
            </nav>
          </Col>
        </Row>
      </Container>

      <div className="bubbles-wrapper">
        <div className="animations m-0">{createAnimations()}</div>
      </div>
    </header>
  );
};

export default Header;
