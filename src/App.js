import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { io } from 'socket.io-client';

import HomePage from './pages/HomePage';

const socket = io('http://localhost:3000');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage socket={socket} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
