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
          <a href="#">Gian</a>
        </div>
        <nav id="nav" ref={navRef}>
          <ul>
            <li>
              <a href="#inicio">INICIO</a>
            </li>
            <li>
              <a href="#sobremi">SOBRE MIM</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#curriculum">CURRICULO</a>
            </li>
            <li>
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="#contacto">CONTATO</a>
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
