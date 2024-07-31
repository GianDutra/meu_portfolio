import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useMediaQuery } from 'react-responsive';

const Curriculum = () => {
  useEffect(() => {
    AOS.init();
  }, []);

const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

  return (
    <section id="curriculum" className="curriculum">
      <div className="contenido-seccion">
        <h2>Curriculum</h2>
        <div className="fila">
          <div className="col izquierda">
            <h3>Education</h3>
            <div className="item izq" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease">
              <h4>Software Engineering</h4>
              <span className="casa">PUCCAMP</span>
              <span className="fecha">2021 - 2024</span>
              <p>Here I am immersed in the world of technological creation, with the opportunity to develop and enhance my skills as a software engineer, understanding and participating in every stage of the software development process through integrative and personal projects. This exciting journey reinforces my certainty that I made the right choice.</p>
              <div className="conectori">
                <div className="circuloi"></div>
              </div>
            </div>
            <div className="item izq" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease">
              <h4>React.js | Node.js Specialization</h4>
              <span className="casa">Rocketseat</span>
              <span className="fecha">2023-2024</span>
              <p>Completed a comprehensive specialization in React.js and Node.js with Rocketseat. Acquired expertise in building dynamic front-end applications with React.js and crafting robust back-end solutions using Node.js. Gained hands-on experience with modern tools like Next.js, Docker, and Tailwind CSS, enhancing my full-stack development skills.</p>
              <div className="conectori">
                <div className="circuloi"></div>
              </div>
            </div>
            <div className="item izq" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease">
              <h4>Lean Six Sigma Green Belt</h4>
              <span className="casa">EDTI</span>
              <span className="fecha">2024 (1st Semester)</span>
              <p>During this certification, I explored Lean Six Sigma principles, enhancing my ability to analyze and improve processes. I completed a practical project using Minitab, which sharpened my statistical skills and helped me understand complex data. This experience solidified my commitment to process optimization and continuous improvement.</p>
              <div className="conectori">
                <div className="circuloi"></div>
              </div>
            </div>
            <div className="item izq" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease">
              <h4>English | Spanish Course</h4>
              <span className="casa">CNA</span>
              <span className="fecha">2014 - 2020 | 2018 - 2020</span>
              <p>I discovered at CNA how languages beautifully reveal the world. Immersed in this course, I explored far beyond mere words. Each class deepened my understanding of diverse cultures and connected me with amazing people, inspiring me to continue learning more languages.</p>
              <div className="conectori">
                <div className="circuloi"></div>
              </div>
            </div>
            <div className="item izq" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease">
              <h4>High School</h4>
              <span className="casa">Colégio Objetivo Itapira</span>
              <span className="fecha">2018 - 2020</span>
              <p>It was during this stage of my life that I discovered my passion for programming, developing my first application with a touch of "Portugol" (a tool to learn programming in brazil). This unique and encouraging experience was the decisive push to pursue a career in this fascinating field.</p>
              <div className="conectori">
                <div className="circuloi"></div>
              </div>
            </div>
          </div>
          <div className="col derecha">
            <h3>Practical Experience</h3>
            <div className="item der" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease">
              <h4>{isMobile ? 'Intern in Digital Transformation' : 'Digital Transformation Intern'}</h4>
              <span className="casa">Ypê</span>
              <span className="fecha">2024 - Present</span>
              <p>I am working on simplifying project management tools using Power BI, Excel, and PWA. My role involves exploring AI tools for project management, conducting meetings in English and Spanish, and automating workflows with Power Automate. Additionally, I create interactive dashboards to enhance project oversight and decision-making.</p>
              <div className="conectord">
                <div className="circulod"></div>
              </div>
            </div>
            <div className="item der" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease">
              <h4>Business Intelligence</h4>
              <span className="casa">PUCCAMP - DPaschoal</span>
              <span className="fecha">2023 (Full Year)</span>
              <p>I am currently involved in the implementation of various dashboards using Business Intelligence concepts to provide the company with deep insights into its customers and other relevant information. These interactive dashboards are being developed using technologies such as Power BI, React.js, Express.js, and SQL Server.</p>
              <div className="conectord">
                <div className="circulod"></div>
              </div>
            </div>
            <div className="item der" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease">
              <h4>Simplified Access Hub</h4>
              <span className="casa">Via Fácil</span>
              <span className="fecha">2022 (2nd Semester)</span>
              <p>This web application revolutionized the way people obtained their second copies by providing convenience through a centralized platform. With the use of modern technologies like React.js, Spring Boot, and MongoDB, the application offered users options for traditional login and QR Code scanning, both utilizing JWT authentication.</p>
              <div className="conectord">
                <div className="circulod"></div>
              </div>
            </div>
            <div className="item der" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease">
              <h4>Python Tutoring</h4>
              <span className="casa">PUCCAMP</span>
              <span className="fecha">2022 (1st Semester)</span>
              <p>As a Python tutor, I shared knowledge, guided, and assisted students in mastering this versatile, powerful, and widely-used language. This enriching experience strengthened my own understanding of Python while helping others unravel the secrets and intricacies of this dynamic programming language.</p>
              <div className="conectord">
                <div className="circulod"></div>
              </div>
            </div>
            <div className="item der" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease">
              <h4>Digital Inclusion Volunteer</h4>
              <span className="casa">Vitalità</span>
              <span className="fecha">2022 (1st Semester)</span>
              <p>I supported elderly individuals, aged 70 and above, through one-on-one training sessions to help them use recent technologies. This initiative aimed to significantly enhance their digital independence, boost their confidence, and improve their ability to navigate modern tools effectively.</p>
              <div className="conectord">
                <div className="circulod"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  };  
export default Curriculum;
