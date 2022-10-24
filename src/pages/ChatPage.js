import React, { useEffect, useState } from 'react';

import ChatSideBar from '../components/ChatSideBar';
import ChatBody from '../components/ChatBody';
import ChatFooter from '../components/ChatFooter';

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('messageResponse', (response) => {
      setMessages([...messages, response]);
    });
  }, [messages, socket]);

  return (
    <div className='chat'>
      <ChatSideBar socket={socket} />
      <div className='chat__main'>
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
