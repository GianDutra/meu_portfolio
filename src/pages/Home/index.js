import fotoPerfil from "../../assets/image/foto_perfil.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutMe from "../../components/AboutMe";
import Skills from "../../components/Skills";
import Header from "../../components/Header";
import Curriculum from "../../components/Curriculum";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import TypewriterComponent from '../../components/TypewriterComponent';




const Home = () => { 
    return (
        <>
        <Header></Header>
        <section id="inicio" class="inicio">
        <div class="contenido-banner">
            <div class="contenedor-img">
            <img src={fotoPerfil} alt=""/>
            </div>
            <h1>GIAN DUTRA</h1>
            <TypewriterComponent phrases={["software engineer", "bpmn modeler", "full-stack dev", "lss green belt"]} period={50} eraseSpeed={150}/>
            <div class="redes">
                <a href="https://github.com/GianDutra" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/gian-vitor-dutra-880a2a211/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://wa.me/5519981349674" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
    </section>
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Curriculum></Curriculum>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Footer></Footer>
    </>
    ) 
       
 }

 export default Home
