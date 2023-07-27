import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';
import p0 from '../../assets/image/p0.png';
import p1 from '../../assets/image/p1_new.png';
import p2 from '../../assets/image/p2_new.png';
import p3 from '../../assets/image/p3_new.png';
import p4 from '../../assets/image/p4_new.png';
import p5 from '../../assets/image/p5_new.png';
import p6 from '../../assets/image/p6_new.jpg';
import p7 from '../../assets/image/p7.png';
import p8 from '../../assets/image/p8.jpg';
import p9 from '../../assets/image/p9.png';
import p10 from '../../assets/image/p10.png';

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

  const handleButtonClick2 = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    event.stopPropagation(); // Impede a propagação do evento para o elemento pai
  
    // Coloque aqui a lógica de redirecionamento para o link desejado
    window.open("https://pomodoro-giandutra.vercel.app//", "_blank");
  };

  const handleButtonClickDtMoney = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    event.stopPropagation(); // Impede a propagação do evento para o elemento pai
  
    // Coloque aqui a lógica de redirecionamento para o link desejado
    window.open("https://dt-money-giandutra.vercel.app/", "_blank");
  };

  const handleButtonClickIgniteShop = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    event.stopPropagation(); // Impede a propagação do evento para o elemento pai
  
    // Coloque aqui a lógica de redirecionamento para o link desejado
    window.open("https://shop-nextjs-giandutra.vercel.app/", "_blank");
  };

  const displayText = isMobile
  ? 'TS React Router Context Immer Zod Reducer StyledComps HookForm'
  : 'TypeScript React Router Context Reducer Immer Styled_Components Hook_Form Zod';

  const displayTextIgniteDt = isMobile
  ? 'TS React HookForm Axios Zod Radix Fake_REST_API Context StyledComps'
  : 'TypeScript React Fake_REST_API Radix Axios Zod Hook_Form Context Styled_Comps';

  const displayTextIgniteShop = isMobile
  ? 'TS React NextJS Stitches Stripe'
  : 'TypeScript React NextJS Stitches Stripe';

  return (
    <section id="portfolio" className="portfolio">
      <div className="contenido-seccion">
        <h2>PROJECTS</h2>
        <div className="galeria" ref={portfolioRef}>
        <div className="proyecto" data-aos={isMobile ? 'fade-up' : ''} data-aos-duration="400" data-aos-easing="ease">
            <a href="https://github.com/GianDutra/Shop-Nextjs" target="_blank" rel="noopener noreferrer">
              <img src={p10} alt=""  />
            </a>
            <div className="overlay">
            <h3>Ignite Shop</h3>          
            <p className="p_com_link">{displayTextIgniteShop}</p>
            <a className="button-right_feed" href="https://shop-nextjs-giandutra.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={handleButtonClickIgniteShop}>
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
            <a href="https://github.com/GianDutra/DT-Money" target="_blank" rel="noopener noreferrer">
              <img src={p9} alt=""  />
            </a>
            <div className="overlay">
            <h3>Ignite DT-Money</h3>          
            <p className="p_com_link">{displayTextIgniteDt}</p>
            <a className="button-right_pomodoro" href="https://dt-money-giandutra.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={handleButtonClickDtMoney}>
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
            <a href="https://github.com/GianDutra/Pomodoro" target="_blank" rel="noopener noreferrer">
              <img src={p0} alt=""  />
            </a>
            <div className="overlay">
            <h3>Ignite Pomodoro</h3>          
            <p className="p_com_link">{displayText}</p>
            <a className="button-right_pomodoro" href="https://pomodoro-giandutra.vercel.app//" target="_blank" rel="noopener noreferrer" onClick={handleButtonClick2}>
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
            <a href="https://github.com/GianDutra/Ignite-Feed-TypeScript" target="_blank" rel="noopener noreferrer">
              <img src={p1} alt=""  />
            </a>
            <div className="overlay">
            <h3>Ignite Feed</h3>          
            <p>HTML CSS TypeScript React Git Vite </p>
            <a className="button-right_feed" href="https://ignite-feed-type-script-giandutra.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={handleButtonClick}>
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
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
