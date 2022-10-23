import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { io } from 'socket.io-client';

import Home from './components/Home';

const socket = io('http://localhost:3000');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home socket={socket} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
