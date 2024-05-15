import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";

interface DefaultNavbarProps {
    useOnlyDarkLogo: boolean;
}

const DefaultNavbar = ({ useOnlyDarkLogo } : DefaultNavbarProps) => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  console.log("🚀 ~ DefaultNavbar ~ navbarExpanded:", navbarExpanded);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setNavbarExpanded((prevExpanded) => !prevExpanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navigation = navbarRef.current;
      const navTop = navigation.offsetTop + navigation.offsetHeight;

      if (window.scrollY >= navTop) {
        navigation.classList.add("navbar-sticky");
      } else {
        navigation.classList.remove("navbar-sticky");
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
              src="assets/img/logo.png"
              className="logo logo-sticky"
            />
          ) : (
            <>
              <img
                src="assets/img/logo.png"
                alt="Laapp"
                className="logo logo-sticky d-block d-md-none"
              />
              <img
                src="assets/img/logo-light.png"
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
                src="assets/img/logo.png"
                alt="Laapp Template"
                className="logo"
              />
            </Link>
          </div>

          <Nav className="nav navbar-nav ml-auto" navbar>
            <NavItem>
              <NavLink href="#!">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#!">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#!">Product</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#!">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#!">Contact</NavLink>
            </NavItem>
          </Nav>
        </div>
      </Container>
    </nav>
  );
};

export default DefaultNavbar;
