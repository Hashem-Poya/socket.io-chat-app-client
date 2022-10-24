import React, { useState, useEffect } from 'react';

const ChatSideBar = ({ socket }) => {
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (user) => {
      setActiveUsers(user);
    });
  }, [socket, activeUsers]);
  console.log('activeUsers =>', activeUsers);

  return (
    <div className='chat__sidebar'>
      <h2>Open chat</h2>
      <div>
        <h4 className='chat__header'>Active users</h4>
        <div className='chat__users'>
          {activeUsers.map((user) => (
            <div key={user.socketId}>
              <p>{user.username}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatSideBar;
