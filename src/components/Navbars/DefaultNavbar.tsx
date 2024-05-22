import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LogoLight from "../../assets/img/logo-light.png";
import Logo from "../../assets/img/logo.png";

// reactstrap components
import { Container, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";

interface DefaultNavbarProps {
    useOnlyDarkLogo: boolean;
}

const DefaultNavbar = ({ useOnlyDarkLogo } : DefaultNavbarProps) => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  console.log("🚀 ~ DefaultNavbar ~ navbarExpanded:", navbarExpanded);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleNavbar = () => {
    setNavbarExpanded((prevExpanded) => !prevExpanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navigation = navbarRef.current;
      if(navigation){
        const navTop = navigation.offsetTop + navigation.offsetHeight;
  
        if (window.scrollY >= navTop) {
          navigation.classList.add("navbar-sticky");
        } else {
          navigation.classList.remove("navbar-sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="navbar navbar-expand-md main-nav navigation fixed-top sidebar-left"
    >
      <Container>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>

        <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
          {useOnlyDarkLogo ? (
            <img
              alt="..."
              src={Logo}
              className="logo logo-sticky"
            />
          ) : (
            <>
              <img
                src={Logo}
                alt="Laapp"
                className="logo logo-sticky d-block d-md-none"
              />
              <img
                src={LogoLight}
                alt="Laapp"
                className="logo d-none d-md-block"
              />
            </>
          )}
        </NavbarBrand>

        <div className="collapse navbar-collapse">
          <div className="sidebar-brand">
            <Link to="/">
              <img
                src={Logo}
                alt="Laapp Template"
                className="logo"
              />
            </Link>
          </div>

          <Nav className="nav navbar-nav ml-auto" navbar>
            <NavItem>
              <NavLink href="#!">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#!">Planes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#!">Cómo Funciona</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="#!">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#!">Contact</NavLink>
            </NavItem> */}
          </Nav>
        </div>
      </Container>
    </nav>
  );
};

export default DefaultNavbar;
