'use client'
import React, { useState } from 'react';
import axios from 'axios';

const ApiAccess = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://challenges.us-east-1.elasticbeanstalk.com/login', {
        name,
        email,
      });

      const { message, key } = response.data;
      setMessage(message);
      setApiKey(key);
    } catch (error) {
      console.error('Error al obtener la API Key:', error);
    }
  };

  return (
    <div className='text-light'>
      <h1>Obtener API Key</h1>
      <div>
        <label>Nombre:</label>
        <input className='text-dark' type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input className='text-dark' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Obtener API Key</button>
      <div>
        <p>{message}</p>
        {apiKey && (
          <div>
            <p>Tu API Key es: {apiKey}</p>
            <p>Guarda esta clave para acceder a la API en el futuro.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiAccess;
