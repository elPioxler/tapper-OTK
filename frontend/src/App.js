import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
        <h1>🍱 TAPPER-OTK</h1>
        {!user ? (
          <div>
            <p>Bienvenido al sistema de gestión de alimentos</p>
            <button 
              onClick={() => setUser({ name: 'Admin', role: 'leader' })}
              style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
            >
              Iniciar Sesión
            </button>
          </div>
        ) : (
          <div>
            <p>Hola, {user.name}!</p>
            <p>Tu rol: <strong>{user.role}</strong></p>
            <button 
              onClick={() => setUser(null)}
              style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', background: 'red', color: 'white' }}
            >
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
