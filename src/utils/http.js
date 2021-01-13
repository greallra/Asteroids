import axios from "axios";
const url = 'https://data.nasa.gov/resource/y77d-th95.json';
let newUrl = 'https://data.nasa.gov/resource/gh4g-9sfh.json'

export async function getMeteors(){
    try {
      
        const data = await axios.get(newUrl, {
            api_key: process.env.REACT_APP_NASA_API_KEY
        })
        return data
    } catch (error) {
        return {error: 'api request error'}
    }
}