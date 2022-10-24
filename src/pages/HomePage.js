import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ socket }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    const user = { socketId: socket.id, username: username };
    socket.emit('newUser', user);
    navigate('/chat');
  };

  return (
    <form className='home__container' onSubmit={handleSubmit}>
      <h2 className='home__header'>Sign in to open chat</h2>
      <label>Username</label>
      <input
        className='username__input'
        type='text'
        minLength='6'
        id='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className='home__cta'>Sign In</button>
    </form>
  );
};

export default HomePage;
