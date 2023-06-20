import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import endereco from '../../assets/image/endereco.png';

const Contact = () => {
  const [from_name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();


      // Verifica se o nome, assunto, mensagem e pelo menos um dos campos de contato estão preenchidos
      if (from_name === '' || subject === '' || message === '' || (phone === '' && email === '')) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
  
    // Verifica se o email está no formato válido usando regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== '' && !emailRegex.test(email)) {
      alert('Por favor, insira um endereço de email válido.');
      return;
    }

    emailjs
        .sendForm("service_ipqyrxd", "template_u4rb5mq", formRef.current, "xZ9BVbMVvJd_xgU30")
      .then((result) => {
        console.log("EMAIL ENVIADO");
        setName('');
        setEmail('');
        setPhone('');
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
                value={from_name}
                onChange={(e) => setName(e.target.value)}
                name="from_name" // Adicione o atributo 'name'
              />
               <input
                type="text"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email" // Adicione o atributo 'name'
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




