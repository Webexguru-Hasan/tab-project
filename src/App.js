import './App.css';
import Tours from './Components/Tours';
import { GetData } from './Components/TourData';
import { useEffect, useState } from 'react';
import useFetch from './CustomHooks/useFetch';
import Loading from './Components/Loading';






function App() {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await GetData();
  //     setData(response)
  //   }
  //   fetchData();
  // }, []);

 const {data, loading, removeTour} = useFetch("https://course-api.com/react-tours-project")
 
 return (
   <>
   
   {loading ? <Tours datas={data} remove={removeTour} /> : <Loading /> }
   
   </>
  );
}

export default App;
