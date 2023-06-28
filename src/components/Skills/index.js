import React, { useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Skills = () => {
  const skillsRef = useRef(null);

  const efectoHabilidades = () => {
    const skillsElement = skillsRef.current;
    if (skillsElement) {
      const distancia_skills = window.innerHeight - skillsElement.getBoundingClientRect().top;
      if (distancia_skills >= 300) {
        const habilidades = skillsElement.getElementsByClassName('progreso');
        habilidades[0]?.classList.add('portugues');
        habilidades[1]?.classList.add('espanhol');
        habilidades[2]?.classList.add('ingles');
        habilidades[3]?.classList.add('italiano');
        habilidades[4]?.classList.add('japones');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', efectoHabilidades);
    return () => {
      window.removeEventListener('scroll', efectoHabilidades);
    };
  }, []);

  const handleMouseEnter = (event) => {
    const icon = event.currentTarget.querySelector('i');
    icon.classList.add('fa-bounce');
  };
  
  const handleMouseLeave = (event) => {
    const icon = event.currentTarget.querySelector('i');
    icon.classList.remove('fa-bounce');
  };
  
  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <div className="contenido-seccion">
        <h2>Skills</h2>
        <div className="fila">
            
        <div className="col_linguagem" data-aos="zoom-in" data-aos-duration="2500" ata-aos-easing="ease">
        <h3 className='titulo_linguagens'>Prog. Languages</h3>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-brands fa-html5"></i>
                <span className="text">HTML</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-brands fa-css3-alt"></i>
                <span className="text">CSS</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-brands fa-square-js"></i>
                <span className="text">Javascript</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-solid fa-code"></i>
                <span className="text">Typescript</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-brands fa-python"></i>
                <span className="text">Python</span>
            </div>
            
            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-brands fa-java"></i>
                <span className="text">Java</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-solid fa-c"></i>
                <span className="text">C/C++</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-brands fa-android"></i>
                <span className="text">Kotlin</span>
            </div>
            
            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-solid fa-mobile-screen-button"></i>
                <span className="text">Flutter</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-solid fa-database"></i>
                <span className="text">SQL</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-solid fa-dna"></i>
                <span className="text">Prolog</span>
            </div>
            

        </div>

        <div className="col_linguagem" data-aos="zoom-in" data-aos-duration="2500" data-aos-easing="ease">
        <h3 className='titulo_linguagens'>Technologies</h3>

             <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
             <i class="fa-brands fa-github"></i>
                <span className="text">Github</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-brands fa-react"></i>
                <span className="text">React</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-brands fa-docker"></i>
                <span className="text">Docker</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-solid fa-cloud"></i>
                <span className="text">Azure</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-solid fa-chart-pie"></i>
                <span className="text">Superset</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-solid fa-chart-simple"></i>
                <span className="text">Power BI</span>
            </div>
            
            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-solid fa-database"></i>
                <span className="text">Oracle</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-brands fa-envira"></i>
                <span className="text">MongoDB</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-regular fa-file-word"></i>
                <span className="text">Office</span>
            </div>

            <div className="linguagens" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <i class="fa-solid fa-server"></i>
                <span className="text">Redis</span>
            </div>

        </div>

          <div className="col" data-aos="zoom-in" data-aos-duration="2500" data-aos-easing="ease">
            <h3 className='titulo_idiomas'>Languages</h3>
            <div className="skill">
              <span>Portuguese</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>100%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Spanish</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>100%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>English*</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Italian*</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>40%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Japanese*</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>30%</span>
                </div>
              </div>
            </div>
            <div className="em-andamento">
              <span>*In progress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
