'use client'
import React, { useState } from 'react';
import '../Contact.css';

const Contact = ({ setContact }) => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [nomError, setNomError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [emailError, setEmailError] = useState(''); // Define emailError state variable
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Custom validation for "nom" field: Allow only letters
    const namePattern = /^[A-Za-z]+$/;

    // Custom validation for "message" field: Limit to a maximum of 250 words
    const wordCount = message.trim().split(/\s+/).length;

    // Validate the form fields
    if (!nom) {
      setNomError('Veuillez entrer votre nom.');
      return;
    }

    if (!namePattern.test(nom)) {
      setNomError('Le nom doit contenir uniquement des lettres.');
      return;
    }

    if (!email || !email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)) {
      setEmailError('Veuillez saisir une adresse email valide.');
      return;
    }

    if (!message) {
      setMessageError('Veuillez entrer votre message.');
      return;
    }

    if (wordCount > 250) {
      setMessageError('Le message ne peut pas dépasser 250 mots.');
      return;
    }

    // If all validations pass, submit the form
    const newContact = {
      nom,
      email,
      message,
      password,
    };

    setContact(newContact);

    // Reset form fields and set the form as submitted
    setNom('');
    setEmail('');
    setMessage('');
    setPassword('');
    setNomError('');
    setEmailError('');
    setMessageError('');
    setIsSubmitted(true);
  };

  return (
    <div className="formulaire-contact">
      {isSubmitted ? (
        <p>Votre formulaire a été soumis avec succès.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
          {nomError && <div className="error-message">{nomError}</div>}

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Veuillez saisir une adresse email valide."
          />
          {emailError && <div className="error-message">{emailError}</div>}


          <label htmlFor="message">Message (maximum 250 mots) :</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          {messageError && <div className="error-message">{messageError}</div>}

          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
