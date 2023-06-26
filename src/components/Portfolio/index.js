import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import p1 from "../../assets/image/p1_new.png";
import p2 from "../../assets/image/p2_new.png";
import p3 from "../../assets/image/p3_new.png";
import p4 from "../../assets/image/p4_new.png";
import p5 from "../../assets/image/p5_new.png";
import p6 from "../../assets/image/p6_new.jpg";
import p7 from "../../assets/image/p7.png";
import p8 from "../../assets/image/p8.jpg";
import em_breve from "../../assets/image/em_breve.jpg";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const cards = portfolioRef.current.querySelectorAll(".proyecto");

    gsap.defaults({ ease: "back" });
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

      ScrollTrigger.addEventListener("refreshInit", () =>
        gsap.set(cards, { y: 0 })
      );
    };

    const handleWindowLoad = () => {
      startAnimation();
    };

    if (window.innerWidth < 768) {
      startAnimation();
    } else {
      window.addEventListener("load", handleWindowLoad);
    }

    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="contenido-seccion">
        <h2>PROJETOS</h2>
        <div className="galeria" ref={portfolioRef}>
          <div className="proyecto">
            <a
              href="https://github.com/GianDutra/Meu-Ignite-Feed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p1} alt="" />
            </a>
            <div className="overlay">
              <h3>Ignite Feed</h3>
              <p>HTML CSS Javascript React Git</p>
            </div>
          </div>
          <div className="proyecto">
            <a
              href="https://github.com/GianDutra/meu_portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p2} alt="" />
            </a>
            <div className="overlay">
              <h3>My portfolio</h3>
              <p>HTML CSS Javascript React Git Gsap</p>
            </div>
          </div>
          <div className="proyecto">
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
          <div className="proyecto">
            <a
              href="https://github.com/GianDutra/ModuloCidadao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p4} alt="" />
            </a>
            <div className="overlay">
              <h3>Modulo Cidadão</h3>
              <p>Dart Flutter Firebase Android_Studio</p>
            </div>
          </div>
          <div className="proyecto">
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
          <div className="proyecto">
            <a
              href="https://github.com/GianDutra/Estoque_JavaFx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p6} alt="" />
            </a>
            <div className="overlay">
              <h3>Estoque JavaFx</h3>
              <p>Java JavaFx Git PostgreSQL</p>
            </div>
          </div>
          <div className="proyecto">
            <a
              href="https://github.com/GianDutra/AI_AspiradorPo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p7} alt="" />
            </a>
            <div className="overlay">
              <h3>IA - Aspirador de Pó</h3>
              <p>Python Git</p>
            </div>
          </div>
          <div className="proyecto">
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
          <div className="proyecto">
            <img src={em_breve} alt="" />
            <div className="overlay">
              <h3>Em breve</h3>
              <p>Em breve</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;