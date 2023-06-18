import '@fortawesome/fontawesome-free/css/all.min.css';
import endereco from "../../assets/image/endereco.png"

const Contact = () => { 
    return (
    <section id="contacto" className="contacto">
            <div className="contenido-seccion">
                <h2>CONTATO</h2>
                <div className="fila">
                   
                    <div className="col">
                        <input type="text" placeholder="Seu nome" />
                        <input type="text" placeholder="Número de telefone" />
                        <input type="text" placeholder="Endereço" />
                        <input type="text" placeholder="Assunto" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
                        <button>
                            Enviar Mensagem<i className="fa-solid fa-paper-plane"></i>
                            <span className="overlay"></span>
                        </button>
                    </div>
                
                    <div className="col">
                        <img src={endereco} alt="" />
                        <div className="info">
                            <ul>
                                <li>
                                    <i className="fa-solid fa-location-dot"></i>
                                    Walter Schimidt 149
                                </li>
                                <li>
                                    <i className="fa-solid fa-mobile-screen"></i>
                                    (19) 98134-9674
                                </li>
                                <li className="email">
                                    <i className="fa-solid fa-envelope"></i>
                                    giandutra@hotmail.com.br
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Contact

