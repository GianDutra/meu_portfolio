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
                <span className="text">HTML/CSS</span>
            </div>

            <div className="linguagens">
            <i class="fa-brands fa-square-js"></i>
                <span className="text">Javascript</span>
            </div>

            <div className="linguagens">
                <i class="fa-solid fa-database"></i>
                <span className="text">SQL</span>
            </div>

            <div className="linguagens">
                <i className="fa-brands fa-js"></i>
                <span className="text">Javascript</span>
            </div>

            <div className="linguagens">
            <i className="fa-brands fa-html5"></i>
                <span className="text">HTML/CSS</span>
            </div>

            <div className="linguagens">
                <i class="fa-solid fa-database"></i>
                <span className="text">SQL</span>
            </div>

        </div>

        <div className="col_linguagem">
        <h3 className='titulo_linguagens'>Tecnologias</h3>

            <div className="linguagens">
                <i className="fa-brands fa-js"></i>
                <span className="text">Javascript</span>
            </div>

            <div className="linguagens">
            <i className="fa-brands fa-html5"></i>
                <span className="text">HTML/CSS</span>
            </div>

            <div className="linguagens">
                <i class="fa-solid fa-database"></i>
                <span className="text">SQL</span>
            </div>

            <div className="linguagens">
                <i className="fa-brands fa-js"></i>
                <span className="text">Javascript</span>
            </div>

            <div className="linguagens">
            <i className="fa-brands fa-html5"></i>
                <span className="text">HTML/CSS</span>
            </div>

            <div className="linguagens">
                <i class="fa-solid fa-database"></i>
                <span className="text">SQL</span>
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
