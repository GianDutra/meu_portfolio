import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';
import p1 from '../../assets/image/p1_new.png';
import p2 from '../../assets/image/p2_new.png';
import p3 from '../../assets/image/p3_new.png';
import p4 from '../../assets/image/p4_new.png';
import p5 from '../../assets/image/p5_new.png';
import p6 from '../../assets/image/p6_new.jpg';
import p7 from '../../assets/image/p7.png';
import p8 from '../../assets/image/p8.jpg';
import em_breve from '../../assets/image/em_breve.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const portfolioRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

  useEffect(() => {
    if (!isMobile) {
      const cards = portfolioRef.current.querySelectorAll('.proyecto');

      gsap.defaults({ ease: 'back' });
      gsap.set(cards, { y: 100 });

      const startAnimation = () => {
        ScrollTrigger.batch(cards, {
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              stagger: { each: 0.2, grid: [1, 3] },
              overwrite: true,
            }),
          onLeave: (batch) =>
            gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
          onEnterBack: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2, overwrite: true }),
          onLeaveBack: (batch) =>
            gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
        });

        ScrollTrigger.addEventListener('refreshInit', () =>
          gsap.set(cards, { y: 0 })
        );
      };

      const handleWindowLoad = () => {
        startAnimation();
      };

      window.addEventListener('load', handleWindowLoad);

      return () => {
        window.removeEventListener('load', handleWindowLoad);
      };
    }
  }, [isMobile]);


  const handleButtonClick = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    event.stopPropagation(); // Impede a propagação do evento para o elemento pai
  
    // Coloque aqui a lógica de redirecionamento para o link desejado
    window.open("https://ignite-feed-type-script-giandutra.vercel.app/", "_blank");
  };

  

  return (
    <section id="portfolio" className="portfolio">
      <div className="contenido-seccion">
        <h2>PROJECTS</h2>
        <div className="galeria" ref={portfolioRef}>
          <div className="proyecto" data-aos={isMobile ? 'fade-up' : ''} data-aos-duration="400" data-aos-easing="ease">
            <a href="https://github.com/GianDutra/Ignite-Feed-TypeScript" target="_blank" rel="noopener noreferrer">
              <img src={p1} alt=""  />
            </a>
            <div className="overlay">
            <h3>Ignite Feed</h3>          
            <p>HTML CSS TypeScript React Git</p>
            <a className="button-right" href="https://ignite-feed-type-script-giandutra.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={handleButtonClick}>
              <span className="visit-text">
                {isMobile ? ( 
                  <>
                  Visit Website
                  </>
                ) : (
                  'Visit Website'
                )}
              </span>
            </a>
          </div>
          </div>
          <div className="proyecto" data-aos={isMobile ? 'fade-up' : ''} data-aos-duration="400" data-aos-easing="ease">
            <a href="https://github.com/GianDutra/meu_portfolio" target="_blank" rel="noopener noreferrer">
              <img src={p2} alt="" />
            </a>
            <div className="overlay">
              <h3>My portfolio</h3>
              <p>HTML CSS Javascript React Git Gsap Aos</p>
            </div>
          </div>
          <div className="proyecto" data-aos={isMobile ? 'fade-up' : ''} data-aos-duration="400" data-aos-easing="ease">
            <a
              href="https://github.com/GianDutra/Via-Facil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p3} alt="" />
            </a>
            <div className="overlay">
              <h3>Via Fácil</h3>
              <p>HTML CSS Javascript React Git Spring MongoDB</p>
            </div>
          </div>
          <div className="proyecto" data-aos={isMobile ? 'fade-up' : ''} data-aos-duration="400" data-aos-easing="ease">
            <a
              href="https://github.com/GianDutra/ModuloCidadao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p4} alt="" />
            </a>
            <div className="overlay">
              <h3>Citizen Module</h3>
              <p>Dart Flutter Firebase Android_Studio</p>
            </div>
          </div>
          <div className="proyecto" data-aos={isMobile ? 'fade-up' : ''} data-aos-duration="400" data-aos-easing="ease">
            <a
              href="https://github.com/GianDutra/ScrapyRankingBrands"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p5} alt="" />
            </a>
            <div className="overlay">
              <h3>Python Web Crawler</h3>
              <p>Python MongoDB Git</p>
            </div>
          </div>
          <div className="proyecto" data-aos={isMobile ? 'fade-up' : ''} data-aos-duration="400" data-aos-easing="ease">
            <a
              href="https://github.com/GianDutra/Estoque_JavaFx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p6} alt="" />
            </a>
            <div className="overlay">
              <h3>JavaFx Stock</h3>
              <p>Java JavaFx Git PostgreSQL</p>
            </div>
          </div>
          <div className="proyecto" data-aos={isMobile ? 'fade-up' : ''} data-aos-duration="400" data-aos-easing="ease">
            <a
              href="https://github.com/GianDutra/AI_AspiradorPo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p7} alt="" />
            </a>
            <div className="overlay">
              <h3>AI - Vacuum Cleaner</h3>
              <p>Python Git</p>
            </div>
          </div>
          <div className="proyecto" data-aos={isMobile ? 'fade-up' : ''} data-aos-duration="400" data-aos-easing="ease">
            <a
              href="https://github.com/GianDutra/vtuber_voice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p8} alt="" />
            </a>
            <div className="overlay">
              <h3>Vtuber Voice App</h3>
              <p>Python Selenium Git</p>
            </div>
          </div>
          <div className="proyecto" data-aos={isMobile ? 'fade-up' : ''} data-aos-duration="400" data-aos-easing="ease">
            <img src={em_breve} alt="" />
            <div className="overlay">
              <h3>Coming soon</h3>
              <p>Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
