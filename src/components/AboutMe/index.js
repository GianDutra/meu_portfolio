import '@fortawesome/fontawesome-free/css/all.min.css';

const AboutMe = () => { 
    return (
    <section id="sobremi" class="sobremi">
        <div class="contenido-seccion">
            <h2>Sobre Mim</h2>
            <p><span>Olá, me chamo Gian.</span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde soluta minima necessitatibus, voluptas consectetur vero officiis quas, explicabo deleniti repellendus aliquid debitis maiores numquam voluptate reprehenderit in delectus dolores.</p>

            <div class="fila">
               
                <div class="col">
                    <h3>Dados pessoais</h3>
                    <ul>
                        <li>
                            <strong>Aniversário</strong>
                            22/09/2003
                        </li>
                        <li>
                            <strong>Telefone</strong>
                            (19) 98134-9674
                        </li>
                        <li>
                            <strong>Email</strong>
                            giandutra@hotmail.com.br
                        </li>
                        <li>
                            <strong>Cidade</strong>
                            Campinas/SP
                        </li>
                        <li>
                            <strong>Endereço</strong>
                            Rua Walter Schimidt, 149 
                        </li>
                        <li>
                            <strong>Cargo</strong>
                            <span>PROGRAMADOR</span>
                        </li>
                    </ul>
                </div>

             
                <div class="col">
                    <h3>Interesses</h3>
                    <div class="contenedor-intereses">
                        <div class="interes">
                            <i class="fa-solid fa-gamepad"></i>
                            <span>JOGOS</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-headphones"></i>
                            <span>MUSICA</span>
                        </div>
                        <div class="interes">
                            <i class="fa-brands fa-bitcoin"></i>
                            <span>CRIPTOS</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-language"></i>
                            <span>IDIOMAS</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-plane"></i>
                            <span>VIAJAR</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-book"></i>
                            <span>LIVROS</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-vr-cardboard"></i>
                            <span>VR</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-camera"></i>
                            <span>FOTOS</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <button>
                Baixar CV <i class="fa-solid fa-download"></i>
                <span class="overlay"></span>
            </button>
        </div>
    </section>
    )
}

export default AboutMe