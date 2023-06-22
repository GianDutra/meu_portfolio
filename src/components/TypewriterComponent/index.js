import React, { useEffect, useRef } from 'react';

const TypewriterComponent = ({ phrases, period, eraseSpeed }) => {
  const typewriterRef = useRef(null);
  let animationFrameId = null;
  let currentIndex = 0;
  let currentPhrase = '';
  let isDeleting = false;
  let typingSpeed = 100; // Velocidade inicial de digitação

  useEffect(() => {
    const typewriterElement = typewriterRef.current;

    const type = () => {
      const phrase = phrases[currentIndex];
      const phraseLength = phrase.length;

      if (isDeleting) {
        currentPhrase = phrase.substring(0, currentPhrase.length - 1);
      } else {
        currentPhrase = phrase.substring(0, currentPhrase.length + 1);
      }

      typewriterElement.innerHTML = '<span class="wrap">I\'m ' + currentPhrase + '|</span>';

      if (!isDeleting && currentPhrase === phrase) {
        // Aguarda um período após a frase ser totalmente digitada
        setTimeout(() => {
          isDeleting = true;
          typingSpeed = eraseSpeed;
          type();
        }, 2000); // Atraso de 2 segundos antes de iniciar o apagamento
      } else if (isDeleting && currentPhrase === '') {
        // Aguarda um período após a frase ser totalmente apagada
        isDeleting = false;
        currentIndex = (currentIndex + 1) % phrases.length; // Avança para a próxima frase
        typingSpeed = period;
        setTimeout(type, typingSpeed);
      } else {
        animationFrameId = setTimeout(type, typingSpeed);
      }
    };

    type(); // Inicia o efeito de digitação

    return () => {
      clearTimeout(animationFrameId); // Limpa o timer ao desmontar o componente
    };
  }, [phrases, period, eraseSpeed]);

  return (
    <h3>
      <span ref={typewriterRef} className="typewrite"></span>
    </h3>
  );
};

export default TypewriterComponent;

