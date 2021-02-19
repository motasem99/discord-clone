import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Chat from './components/Chat/Chat.jsx';
import Login from './components/Login/Login.jsx';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className='app'>
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
