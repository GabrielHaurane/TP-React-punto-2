import React from 'react';
import HolaMundo from './components/world';
import './App.css'

const App =() => {
 const texto = 'my friend';

  return (
    <>
     <HolaMundo amigo={texto}></HolaMundo>
    </>
  )
}

export default App;