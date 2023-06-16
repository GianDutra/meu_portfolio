import '@fortawesome/fontawesome-free/css/all.min.css';
import endereco from "../../assets/image/ubicacion.png"

const Contact = () => { 
    return (
    <section id="contacto" className="contacto">
            <div className="contenido-seccion">
                <h2>CONTACTO</h2>
                <div className="fila">
                   
                    <div className="col">
                        <input type="text" placeholder="Tú Nombre" />
                        <input type="text" placeholder="Número telefónico" />
                        <input type="text" placeholder="Dirección de correo" />
                        <input type="text" placeholder="Tema" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                        <button>
                            Enviar Mensaje<i className="fa-solid fa-paper-plane"></i>
                            <span className="overlay"></span>
                        </button>
                    </div>
                
                    <div className="col">
                        <img src={endereco} alt="" />
                        <div className="info">
                            <ul>
                                <li>
                                    <i className="fa-solid fa-location-dot"></i>
                                    Nicaragua 159, San Rafael Mza
                                </li>
                                <li>
                                    <i className="fa-solid fa-mobile-screen"></i>
                                    Llamanos: 2384 - 4343443 
                                </li>
                                <li>
                                    <i className="fa-solid fa-envelope"></i>
                                    Email: cw@example.com
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

