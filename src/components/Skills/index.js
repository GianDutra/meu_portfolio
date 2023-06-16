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
      habilidades[5].classList.add('comunicacion');
      habilidades[6].classList.add('trabajo');
      habilidades[7].classList.add('creatividad');
      habilidades[8].classList.add('dedicacion');
      habilidades[9].classList.add('proyect');
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
                <h3>Professional Skills</h3>
                <div class="skill">
                    <span>Comunicación</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>80%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Trabajo en Equipo</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>70%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Creatividad</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>99%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Dedicación</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>65%</span>
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <span>Proyect Management</span>
                    <div class="barra-skill">
                        <div class="progreso">
                            <span>94%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills