import React, { useEffect, useState, useRef } from 'react';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navRef = useRef(null);

  const mostrarOcultarMenu = () => {
    if (menuVisible) {
      navRef.current.classList = "";
      setMenuVisible(false);
    } else {
      navRef.current.classList = "responsive";
      setMenuVisible(true);
    }
  };

  const seleccionar = () => {
    navRef.current.classList = "";
    setMenuVisible(false);
  };

  useEffect(() => {
    const navElement = navRef.current;
    navElement.addEventListener('click', seleccionar);
    return () => {
      navElement.removeEventListener('click', seleccionar);
    };
  }, []);

  return (
    <div className="contenedor-header">
      <header>
        <div className="logo">
          <a href="#">Gian's Portfolio</a>
        </div>
        <nav id="nav" ref={navRef}>
          <ul>
            <li>
              <a href="#inicio">HOME</a>
            </li>
            <li>
              <a href="#sobremi">ABOUT ME</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#curriculum">CURRICULUM</a>
            </li>
            <li>
              <a href="#portfolio">PROJECTS</a>
            </li>
            <li>
              <a href="#contacto">CONTACT</a>
            </li>
          </ul>
        </nav>
        <div className="nav-responsive" onClick={mostrarOcultarMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    </div>
  );
};

export default Header;
