
import React, { useEffect, useState } from 'react'
// import Loading from './Loading'
import Tour from './Tour';


const Tours = ({datas, loading, remove}) => {
    console.log(datas);
    
    // const [tours, setTours] = useState([])
    // console.log(tours)
    // const [loading, setLoading] = useState(false)
    // console.log(loading)
    

    // useEffect(() => {
    //     try {
    //         const getData = async () => {
    //             const response = await fetch("https://course-api.com/react-tours-project")
    //             const data = await response.json()
    //             setLoading(true)
    //             setTours(data)
    //         }
    //         getData()
            
    //     } catch (error) {
    //         console.error(error)
            
    //     }
    // }, [])
    return (
        <>
        <main>
            <div className="title">
              <h2>Our Tours</h2>
                    <div className="underline"></div>
                    </div>
                    <div>
                        {datas.map((data) =>
                          {
                            return <Tour key={data.id} {...data} remove={remove} />
                          }
                         )}
                    </div>
        </main>
        </>
        
        
    )
}

export default Tours
