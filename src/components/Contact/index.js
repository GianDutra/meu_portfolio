import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import emailjs from 'emailjs-com';
import myphoto from '../../assets/image/myphoto.png';

const Contact = () => {
  const [from_name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const formRef = useRef(null);
  const [contactRef, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      AOS.init();
    }
  }, [inView]);

  const sendEmail = (e) => {
    e.preventDefault();

    // Verifica se o nome, assunto, mensagem e pelo menos um dos campos de contato estão preenchidos
    if (from_name === '' || subject === '' || message === '' || (phone === '' && email === '')) {
      alert('Please fill the required fields (*)');
      return;
    }

    // Verifica se o email está no formato válido usando regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== '' && !emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log('The email has been sent');
          setName('');
          setEmail('');
          setPhone('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          console.log('The email has not been sent');
        }
      );

    e.target.reset();
  };

  return (
    <section id="contacto" className="contacto" ref={contactRef}>
      <div className="contenido-seccion">
        <h2>CONTACT</h2>
        <div
          className={`fila ${inView ? 'aos-init' : ''}`}
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-easing="ease"
        >
          <div className="col">
            <form ref={formRef} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Your name*"
                value={from_name}
                onChange={(e) => setName(e.target.value)}
                name="from_name"
              />
              <input
                type="text"
                placeholder="Your email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
              <input
                type="text"
                placeholder="Phone Number(Optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
              />
              <input
                type="text"
                placeholder="Subject*"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                name="subject"
              />
              <div className="textarea-wrapper">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message*"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                ></textarea>
              </div>
              <button type="submit">
                Submit <i className="fa-solid fa-paper-plane"></i>
                <span className="overlay"></span>
              </button>
            </form>
          </div>
          <div className="col">
            <div className="info">
            <h3>Do you want to discuss a project?</h3>
            <p>Feel free to contact me!</p>
            </div>
            <div class="contenedor-img">
              <img src={myphoto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
