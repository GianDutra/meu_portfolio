import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import aboutme from '../../assets/image/aboutme.png';

const AboutMe = () => {
  useEffect(() => {
    const updateFraseTypewriter = () => {
      const fraseDiv = document.getElementById("frase-typewriter");
      const frase = '“Software é uma excelente combinação entre a arte e a engenharia”';
      let progress = 0;

      const typingInterval = setInterval(() => {
        fraseDiv.innerText = frase.slice(0, progress + 1);
        progress++;

        if (progress >= frase.length) {
          clearInterval(typingInterval);
        }
      }, 50);
    };

    const handleScroll = () => {
      const fraseDiv = document.getElementById("frase-typewriter");
      const bounding = fraseDiv.getBoundingClientRect();
      const scrollThreshold = window.innerHeight * 0.5; // Defina o valor de threshold aqui (80% da altura do viewport)

      if (bounding.top < scrollThreshold) {
        updateFraseTypewriter();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


    return (
      <section id="sobremi" className="sobremi">
        <div className="contenido-seccion">
          <h2>Sobre Mim</h2>
          <div className="textinho">
            <p>
                <div className='borda-bio'>
              <span>Olá, me chamo Gian.</span> Apaixonado por tecnologia e em constante busca por aprendizado. 
              Como Engenheiro de Software, estou empenhado em desenvolver minhas habilidades e contribuir com soluções inovadoras.
               <br/>Com conhecimentos em programação e idiomas, estou pronto para enfrentar desafios e agregar valor em um ambiente de trabalho. Conte comigo para impulsionar projetos e crescer juntos na jornada tecnológica.
               </div> </p> 
            
               <div id="frase-typewriter" className="borda-frase" style={{ textAlign: 'center', height: '80px' }}>
            <p className="frase"></p>
            </div>
          </div>
          <div className="fila">
            <div className="col">
              <img src={aboutme} />
            </div>
            <div className="col">
              <h3>Hobbies</h3>
              <div className="contenedor-intereses">
                <div className="interes">
                  <i className="fa-solid fa-gamepad"></i>
                  <span>JOGOS</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-headphones"></i>
                  <span>MUSICA</span>
                </div>
                <div className="interes">
                  <i className="fa-brands fa-bitcoin"></i>
                  <span>CRIPTOS</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-language"></i>
                  <span>IDIOMAS</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-plane"></i>
                  <span>VIAJAR</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-book"></i>
                  <span>LIVROS</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-vr-cardboard"></i>
                  <span>VR</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-camera"></i>
                  <span>FOTOS</span>
                </div>
              </div>
            </div>
          </div>
          <button>
            Baixar CV <i className="fa-solid fa-download"></i>
            <span className="overlay"></span>
          </button>
        </div>
      </section>
    );
  };
  

export default AboutMe