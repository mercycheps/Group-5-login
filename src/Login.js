import React, { useState } from 'react';
import { login } from './api';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await login(formData);
    setMessage(res.message || 'Error occurred');
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>Login</h2>
      <input name="username" placeholder="Username" onChange={handleChange} value={formData.username} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} required />
      <button type="submit">Login</button>
      <p className="message">{message}</p>
    </form>
  );
}

export default Login;
