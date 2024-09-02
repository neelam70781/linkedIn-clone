import React from 'react';
import Signin from './Components/Signin.js';
import { Route, Routes } from 'react-router-dom';
import Main from './Components/Main.js';
import Connection from './Components/Connection.js';
import Invitation from './Components/Invitation.js';
import Network from './Components/Network.js';
import Message from './Components/Message.js';
 

function App() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Signin/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/connect' element={<Connection/>}/>
      <Route path="/invite" element={<Invitation/>}/>
      <Route path="/network" element={<Network/>}/>
      <Route path='/message' element={<Message/>}/>
    </Routes>  
    </div>
  );
}

export default App;
