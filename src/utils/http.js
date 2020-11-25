import axios from "axios";

export async function getMeteors(){
    try {
        const url = 'https://data.nasa.gov/resource/y77d-th95.json';
        const data = await axios.get(url, {
            api_key: process.env.REACT_APP_NASA_API_KEY
        })
        return data
    } catch (error) {
        return {error: 'api request error'}
    }
}