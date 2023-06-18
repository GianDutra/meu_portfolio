import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);

  const efectoHabilidades = () => {
    const skillsElement = skillsRef.current;
    const distancia_skills = window.innerHeight - skillsElement.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
      const habilidades = skillsElement.getElementsByClassName('progreso');
      habilidades[0].classList.add('javascript');
      habilidades[1].classList.add('htmlcss');
      habilidades[2].classList.add('photoshop');
      habilidades[3].classList.add('wordpress');
      habilidades[4].classList.add('drupal');
      habilidades[5].classList.add('portugues');
      habilidades[6].classList.add('espanhol');
      habilidades[7].classList.add('ingles');
      habilidades[8].classList.add('italiano');
      habilidades[9].classList.add('japones');
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
        <div class="fila">
           
            <div class="col">
                <h3>Technical Skills</h3>
                <div class="skill">
                    <span>Javascript</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>75%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>HTML & CSS</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>89%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Photoshop</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>95%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Wordpress</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>81%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Drupa</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>55%</span>
                        </div>
                    </div>
                </div>
            </div>
          
            <div class="col">
                <h3>Idiomas</h3>
                <div class="skill">
                    <span>Português</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>100%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Espanhol</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>100%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Inglês*</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>85%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Italiano*</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>40%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Japonês*</span>
                    <div class="barra-skill">
                        <div class="progreso">
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

export default Skills