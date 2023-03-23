
import { useState } from 'react';
import './App.css';
import List from './Components/List';
import Data from './Components/Data';

function App() {
  const [peoples, setPeoples] = useState(Data)
  return (
   <>
   <main>
    <section className="container">
      <h3>{peoples.length} birthdays today</h3>
      <List peoples={peoples} />
      <button onClick={() => setPeoples([])}>clear all</button>
    </section>
   </main>
   </>
  );
}

export default App;
