import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import myphoto from '../../assets/image/myphoto.png';

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
        alert('Por favor, preencha todos os campos obrigatórios. (*)');
        return;
      }
  
    // Verifica se o email está no formato válido usando regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== '' && !emailRegex.test(email)) {
      alert('Por favor, insira um endereço de email válido.');
      return;
    }

    
  emailjs.sendForm(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    formRef.current,
    process.env.REACT_APP_EMAILJS_USER_ID
  ).then((result) => {
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
                placeholder="Seu nome*"
                value={from_name}
                onChange={(e) => setName(e.target.value)}
                name="from_name"
              />
              <input
                type="text"
                placeholder="Seu email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
              <input
                type="text"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
              />
              <input
                type="text"
                placeholder="Assunto*"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                name="subject"
              />
              <div className="textarea-wrapper">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Mensagem*"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                ></textarea>
              </div>
              <button type="submit">
                Enviar Mensagem<i className="fa-solid fa-paper-plane"></i>
                <span className="overlay"></span>
              </button>
            </form>
          </div>
          <div className="col">
            <div className="info">
              <h3>Quer conversar sobre um projeto?</h3>
              <p>
                Sinta-se livre para me chamar!!!<br />
                <br />
                
              </p>
            </div>
            <div class="contenedor-img">
            <img src={myphoto} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }  
  

export default Contact;




