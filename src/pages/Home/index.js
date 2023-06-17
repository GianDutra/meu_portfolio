import hero from "../../assets/image/hero.png"
import fotoPerfil from "../../assets/image/foto_perfil.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutMe from "../../components/AboutMe";
import Skills from "../../components/Skills";
import Header from "../../components/Header";
import Curriculum from "../../components/Curriculum";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";




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
            <h2>Engenheiro de Software - Front-end</h2>
            <div class="redes">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-skype"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i class="fa-solid fa-rss"></i></a>
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