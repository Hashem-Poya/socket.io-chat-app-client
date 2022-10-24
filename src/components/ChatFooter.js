import React, { useState } from 'react';

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('');
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('username')) {
      socket.emit('message', {
        socketId: socket.id,
        id: `${socket.id}-${Date.now().toString()}}`,
        username: localStorage.getItem('username'),
        text: message.trim(),
      });
    }
    setMessage('');
  };

  const handleUserTyping = () => {
    socket.emit(
      'userTyping',
      `${localStorage.getItem('username')} is typing...`
    );
  };

  return (
    <div className='chat__footer'>
      <form className='form' onSubmit={handleSendMessage}>
        <input
          type='text'
          placeholder='Write message'
          className='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleUserTyping}
        />
        <button className='sendBtn'>Send</button>
      </form>
    </div>
  );
};

export default ChatFooter;
