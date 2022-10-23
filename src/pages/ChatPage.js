import React from 'react';

import ChatSideBar from '../components/ChatSideBar';
import ChatBody from '../components/ChatBody';
import ChatFooter from '../components/ChatFooter';

const ChatPage = ({ socket }) => {
  return (
    <div className='chat'>
      <ChatSideBar />
      <div className='chat__main'>
        <ChatBody />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
