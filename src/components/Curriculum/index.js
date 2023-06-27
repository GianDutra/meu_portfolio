import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Curriculum = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="curriculum" className="curriculum">
      <div className="contenido-seccion">
        <h2>Curriculum</h2>
        <div className="fila">
          <div className="col izquierda" >
            <h3>Educação</h3>
            <div className="item izq" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease">
              <h4>Engenharia de Software</h4>
              <span className="casa">PUCCAMP</span>
              <span className="fecha">2021 - 2024</span>
              <p>Aqui estou vivendo uma verdadeira imersão no mundo da criação tecnológica, tendo a oportunidade de desenvolver e aprimorar minhas skills como engenheiro de software, entendendo e participando em cada etapa do processo de construção de um software através dos projetos integradores e projetos pessoais. Esta jornada emocionante reforça cada vez mais a certeza de que fiz a escolha correta.</p>
              <div className="conectori">
                <div className="circuloi"></div>
              </div>
            </div>
            <div className="item izq" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease">
              <h4>Curso de Inglês | Espanhol</h4>
              <span className="casa">CNA</span>
              <span className="fecha">2014 - 2020 | 2018 - 2020</span>
              <p>Descobri no CNA o poder de desvendar o mundo através dos idiomas. Nesse curso de Inglês e Espanhol, mergulhei em um universo fascinante, onde aprender vai além das palavras. Cada aula me levou a compreender a cultura e a alma das pessoas que falam essas línguas, abrindo portas para conhecer pessoas maravilhosas, além de me fazer começar a estudar outros idiomas.</p>
              <div className="conectori">
                <div className="circuloi"></div>
              </div>
            </div>
            <div className="item izq" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease"> 
              <h4>Ensino Médio</h4>
              <span className="casa">Colégio Objetivo Itapira</span>
              <span className="fecha">2018 - 2020</span>
              <p>Foi nessa etapa da minha vida que descobri minha paixão pela programação, desenvolvendo meu primeiro aplicativo com um toque de portonhol. Essa experiência única e encorajadora foi o impulso decisivo para trilhar uma carreira nesse campo fascinante.</p>
              <div className="conectori">
                <div className="circuloi"></div>
              </div>
            </div>
          </div>

          <div className="col derecha" >
            <h3>Experiências Práticas</h3>
            <div className="item der" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease">
              <h4>Business Inteligence</h4>
              <span className="casa">PUCCAMP - DPaschoal</span>
              <span className="fecha">2023 - Atualmente</span>
              <p>Estou atualmente participando na implementação de diversos dashboards utilizando os conceitos de Business Intelligence, com o objetivo de fornecer à empresa uma compreensão profunda de seus clientes e outras informações relevantes. Esses painéis interativos estão sendo desenvolvidos utilizando as tecnologias Power BI, React.js, Express.js e SQL server.</p>
              <div className="conectord">
                <div className="circulod"></div>
              </div>
            </div>
            <div className="item der" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease">
              <h4>Aplicação Web</h4>
              <span className="casa">Via Fácil</span>
              <span className="fecha">2022 (2º Semestre)</span>
              <p>Essa aplicação web revolucionou a forma como as pessoas emitiam suas segundas vias, proporcionando facilidade ao concentrar todas as opções em um único local. Com a utilização de tecnologias modernas como React.js, Spring Boot e MongoDB, o aplicativo oferecia aos usuários opções de login tradicional e escaneamento de QR Code, ambos utilizando o JWT. </p>
              <div className="conectord">
                <div className="circulod"></div>
              </div>
            </div>
            <div className="item der" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease">
              <h4>Monitoria de Python</h4>
              <span className="casa">PUCCAMP</span>
              <span className="fecha">2022 (1º semestre)</span>
              <p>Como monitor de Python, compartilhei conhecimentos e auxiliei estudantes no domínio dessa linguagem versátil e poderosa. Essa experiência enriquecedora fortaleceu minha própria compreensão de Python, enquanto apoiei outros na descoberta dos segredos dessa linguagem de programação. </p>
              <div className="conectord">
                <div className="circulod"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
