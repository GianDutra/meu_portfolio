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

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <div className="contenido-seccion">
        <h2>Skills</h2>
        <div className="fila">
            
        <div className="col_linguagem">
        <h3 className='titulo_linguagens'>Linguagens</h3>

            <div className="linguagens">
            <i class="fa-brands fa-html5"></i>
                <span className="text">HTML</span>
            </div>

            <div className="linguagens">
            <i class="fa-brands fa-css3-alt"></i>
                <span className="text">CSS</span>
            </div>

            <div className="linguagens">
            <i class="fa-brands fa-square-js"></i>
                <span className="text">Javascript</span>
            </div>

            <div className="linguagens">
            <i class="fa-solid fa-code"></i>
                <span className="text">Typescript</span>
            </div>

            <div className="linguagens">
            <i class="fa-brands fa-python"></i>
                <span className="text">Python</span>
            </div>
            
            <div className="linguagens">
            <i class="fa-brands fa-java"></i>
                <span className="text">Java</span>
            </div>

            <div className="linguagens">
            <i class="fa-solid fa-c"></i>
                <span className="text">C/C++</span>
            </div>

            <div className="linguagens">
            <i class="fa-brands fa-android"></i>
                <span className="text">Kotlin</span>
            </div>
            
            <div className="linguagens">
            <i class="fa-solid fa-mobile-screen-button"></i>
                <span className="text">Flutter</span>
            </div>

            <div className="linguagens">
            <i class="fa-solid fa-database"></i>
                <span className="text">SQL</span>
            </div>

            <div className="linguagens">
            <i class="fa-solid fa-dna"></i>
                <span className="text">Prolog</span>
            </div>
            

        </div>

        <div className="col_linguagem">
        <h3 className='titulo_linguagens'>Tecnologias</h3>

            <div className="linguagens">
             <i class="fa-brands fa-github"></i>
                <span className="text">Github</span>
            </div>

            <div className="linguagens">
            <i class="fa-brands fa-react"></i>
                <span className="text">React</span>
            </div>

            <div className="linguagens">
            <i class="fa-brands fa-docker"></i>
                <span className="text">Docker</span>
            </div>

            <div className="linguagens">
            <i class="fa-solid fa-cloud"></i>
                <span className="text">Azure Cloud</span>
            </div>

            <div className="linguagens">
            <i class="fa-solid fa-chart-pie"></i>
                <span className="text">Superset</span>
            </div>

            <div className="linguagens">
            <i class="fa-solid fa-chart-simple"></i>
                <span className="text">Power BI</span>
            </div>
            
            <div className="linguagens">
            <i class="fa-solid fa-database"></i>
                <span className="text">Oracle</span>
            </div>

            <div className="linguagens">
            <i class="fa-brands fa-envira fa-rotate-90"></i>
                <span className="text">Mongo DB</span>
            </div>

            <div className="linguagens">
            <i class="fa-regular fa-file-word"></i>
                <span className="text">Office</span>
            </div>

            <div className="linguagens">
            <i class="fa-solid fa-server"></i>
                <span className="text">Redis</span>
            </div>

        </div>

          <div className="col">
            <h3>Idiomas</h3>
            <div className="skill">
              <span>Português</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>100%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Espanhol</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>100%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Inglês*</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Italiano*</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>40%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Japonês*</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>30%</span>
                </div>
              </div>
            </div>
            <div className="em-andamento">
              <span>*Em andamento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
