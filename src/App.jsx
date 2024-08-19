import { useState } from 'react';
import BackGround from './Components/BackGround';
import ForeGround from './Components/ForeGround';

function App() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-[#00c9ff] to-[#92fe9d]">
      <BackGround /> 
      <ForeGround />
    </div>
  );
}

export default App;
