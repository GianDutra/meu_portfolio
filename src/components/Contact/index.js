import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import endereco from '../../assets/image/endereco.png';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      phone: phone,
      address: address,
      subject: subject,
      message: message
    }

    emailjs
        .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, "YOUR_USER_ID")
      .then((result) => {
        console.log("EMAIL ENVIADO");
        setName('');
        setPhone('');
        setAddress('');
        setSubject('');
        setMessage('');
      }, (error) => {
        console.log("EMAIL NÃO ENVIADO");
      });

    e.target.reset();
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contenido-seccion">
        <h2>CONTATO</h2>
        <div className="fila">
          <div className="col">
            <form ref={formRef} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name" // Adicione o atributo 'name'
              />
              <input
                type="text"
                placeholder="Número de telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone" // Adicione o atributo 'name'
              />
              <input
                type="text"
                placeholder="Endereço"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                name="address" // Adicione o atributo 'name'
              />
              <input
                type="text"
                placeholder="Assunto"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                name="subject" // Adicione o atributo 'name'
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message" // Adicione o atributo 'name'
              ></textarea>
              <button type="submit">
                Enviar Mensagem<i className="fa-solid fa-paper-plane"></i>
                <span className="overlay"></span>
              </button>
            </form>
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
  );
};

export default Contact;




