import React from 'react';

const Button = () => {
  const handleScroll = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={handleScroll} className="contact-us bg-primary text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-primary-dark transition duration-200">
      Entre em contato
    </button>
  );
};

export default Button;
