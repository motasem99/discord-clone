import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Chat from './components/Chat/Chat.jsx';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
