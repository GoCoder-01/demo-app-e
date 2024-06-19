import React from 'react';
import Login from './login/login';
import { useState } from 'react';
import './App.css'

function App() {
  const [isActive, setIsActive] = useState(false);
  if(!isActive){
    return (
      <>      
        <h1 className='text-orange-600 font-bold tracking-wide'>Welcome</h1>
        <button onClick={() => setIsActive(!isActive)} className='bg-green-600 py-1 px-3 text-white rounded-sm font-normal tracking-wide text-xl shadow-sm'>log in</button>
      </>
    );
  }
  return (
    <div className='flex justify-center mt-24'>
      <Login userName="OM GAWANDE"/>
    </div>
    
  )
}

export default App;
