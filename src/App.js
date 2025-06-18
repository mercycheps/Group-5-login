import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import './styles.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <div className="toggle-buttons">
        <button onClick={() => setShowLogin(false)} className={!showLogin ? 'active' : ''}>
          Register
        </button>
        <button onClick={() => setShowLogin(true)} className={showLogin ? 'active' : ''}>
          Login
        </button>
      </div>
      {showLogin ? <Login /> : <Register />}
    </div>
  );
}

export default App;
