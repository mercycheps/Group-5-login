import React, { useState } from 'react';
import { register } from './api';

function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    if (formData.password.length < 6) {
      return setMessage('Password must be at least 6 characters');
    }

    const res = await register(formData);
    setMessage(res.message || 'Error occurred');
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>Register</h2>
      <input name="username" placeholder="Username" onChange={handleChange} value={formData.username} required />
      <input name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} required />
      <button type="submit">Register</button>
      <p className="message">{message}</p>
    </form>
  );
}

export default Register;
