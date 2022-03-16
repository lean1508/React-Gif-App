import {API_KEY , API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  return data
}

export default function getTrendingTop(){
    const gifUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`
    
      return fetch(gifUrl)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
        
      }        
    