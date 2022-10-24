import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatBody = ({ messages }) => {
  const navigate = useNavigate();
  const handleLeaveChat = (e) => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <header className='chat__mainHeader'>
        <p>Hangout with Colleagues</p>
        <button className='leaveChat__btn' onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>
      <div className='message__container'>
        {messages &&
          messages.map((message) =>
            message.username === localStorage.getItem('username') ? (
              <div className='message__chats' key={message.id}>
                <p className='sender__name'>You</p>
                <div className='message__sender'>
                  <p>{message.text}</p>
                </div>
              </div>
            ) : (
              <div className='message__chats' key={message.id}>
                <p>{message.username}</p>
                <div className='message__recipient'>
                  <p>{message.text}</p>
                </div>
              </div>
            )
          )}
        <div className='message__status'>{/* <p>User is typing...</p> */}</div>
      </div>
    </>
  );
};

export default ChatBody;
