import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { io } from 'socket.io-client';

import './index.css';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server socket');
  console.log('connection status :=> ' + socket.connected);
  console.log('socketId: ' + socket.id);
});

socket.on('disconnect', () => {
  console.log('Disconnected =>', socket.disconnected);
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage socket={socket} />} />
        <Route path='/chat' element={<ChatPage socket={socket} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
