import axios from "axios"


export const GetData = async () => {
    return await axios.get("https://course-api.com/react-tours-project")
        .then((response) => response.data)
        

    
}
