import { useTranslation } from "react-i18next";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

import { useEffect, useState } from "react";

import "./index.css";
import LanguageSwitcher from "../LanguageSwitcher";

function NavComponent() {
   const { t } = useTranslation();
   const title = "<FK />";

   const [activeLink, setActiveLink] = useState("home");
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const onScroll = () => {
         if (window.scrollY > 50) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   const onUpdateActiveLink = (value) => {
      setActiveLink(value);
   };

   return (
      <Navbar
         style={{ backgroundColor: "#181818", borderBottom: "2px solid var(--secondaryColor)" }}
         expand="lg"
         className={scrolled ? "scrolled" : ""}
      >
         <Container>
            <Navbar.Brand href="/">{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
               <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse>
               <LanguageSwitcher />
            </Navbar.Collapse>
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto">
                  <Nav.Link href="#principal" className="navbar-link">
                     {t("header.nav.principal")}
                  </Nav.Link>
                  <Nav.Link href="#sobre" className="navbar-link">
                     {t("header.nav.sobre")}
                  </Nav.Link>
                  <Nav.Link href="#experiencia" className="navbar-link">
                     {t("header.nav.experiencia")}
                  </Nav.Link>
                  <Nav.Link
                     href="https://github.com/HiroyukiKikuti?tab=repositories"
                     target="_blank"
                     className="navbar-link"
                  >
                     {t("header.nav.projetos")}
                  </Nav.Link>
                  <Nav.Link href="#contato" className="navbar-link">
                     {t("header.nav.contato")}
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
      // <header>
      //    <nav ref={navRef}>
      //       <a href="#">{t("header.nav.principal")}</a>
      //       <a href="#">{t("header.nav.sobre")}</a>
      //       <a href="#">{t("header.nav.experiencia")}</a>
      //       <a href="#">{t("header.nav.projetos")}</a>
      //       <a href="#">{t("header.nav.contato")}</a>

      //       <button className="nav-btn nav-close-btn" onClick={showNavBar}>
      //          <FaTimes />
      //       </button>
      //    </nav>
      //    <button className="nav-btn" onClick={showNavBar}>
      //       <FaBars />
      //    </button>
      // </header>
   );
}

export default NavComponent;
