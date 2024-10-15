import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token'); // Récupérer le token JWT

    axios.get('http://localhost:5000/api', {
      headers: {
        Authorization: token,  // Envoyer le token dans les headers
      },
    })
    .then(response => {
      setMessage(response.data.message);
    })
    .catch(error => {
      console.error('Erreur lors de la requête:', error);
    });
  }, []);

  return (
    <div className="App">
      <h1>{message ? message : "Chargement..."}</h1>
    </div>
  );
}

export default App;
