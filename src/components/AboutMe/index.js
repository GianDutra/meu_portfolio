import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import aboutme from '../../assets/image/aboutme.png';
import curriculum from '../../../src/assets/Gian_Resume.pdf'

const AboutMe = () => {
  useEffect(() => {
    const updateFraseTypewriter = () => {
      const fraseDiv = document.getElementById("frase-typewriter");
      const frase = '“Software is a great combination between artistry and engineering”';
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


  
    function handleDownload() {    
      const link = document.createElement('a');
      link.href = curriculum;
      link.download = 'Gian_CV.pdf';      
      link.click();
    }

    return (
      <section id="sobremi" className="sobremi">
        <div className="contenido-seccion" data-aos="zoom-in" data-aos-duration="2500" ata-aos-easing="ease">
          <h2>About Me</h2>
          <div className="textinho">
            <p>
                <div className='borda-bio'>
              <span>Hello, I'm Gian.</span> Passionate about technology and constantly seeking learning opportunities.
As a Software Engineer, I am committed to developing my skills and contributing to innovative solutions.
<br/>With programming and language knowledge, I am ready to tackle challenges and add value in a work environment. Count on me to drive projects forward and grow together on the technological journey.

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
                  <span>GAMES</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-headphones"></i>
                  <span>MUSIC</span>
                </div>
                <div className="interes">
                  <i className="fa-brands fa-bitcoin"></i>
                  <span>CRYPTOS</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-language"></i>
                  <span>LANG</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-plane"></i>
                  <span>TRAVEL</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-book"></i>
                  <span>BOOKS</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-vr-cardboard"></i>
                  <span>VR</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-camera"></i>
                  <span>PHOTOS</span>
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleDownload}>
            Download CV <i className="fa-solid fa-download"></i>
            <span className="overlay"></span>
          </button>
        </div>
      </section>
    );
  };
  

export default AboutMe