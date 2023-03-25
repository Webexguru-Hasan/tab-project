
import { useState } from 'react';
import './App.css';
import Loading from './Components/Loading';
import Tour from './Components/Tour';
import Tours from './Components/Tours';
const url = 'https://course-api.com/react-tours-project'



function App() {
  
  return (
   <>
   <Loading />
   <Tours />
   <Tour />
   
   </>
  );
}

export default App;
