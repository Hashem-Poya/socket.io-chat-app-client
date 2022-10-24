import React, { useEffect, useState, useRef } from 'react';

import ChatSideBar from '../components/ChatSideBar';
import ChatBody from '../components/ChatBody';
import ChatFooter from '../components/ChatFooter';

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const lastMessageRef = useRef(null);
  useEffect(() => {
    socket.on('messageResponse', (response) => {
      setMessages([...messages, response]);
    });
  }, [messages, socket]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className='chat'>
      <ChatSideBar socket={socket} />
      <div className='chat__main'>
        <ChatBody messages={messages} lastMessageRef={lastMessageRef} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
