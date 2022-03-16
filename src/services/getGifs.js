import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id} = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default async function getGifs({keyword = 'witcher', page = 0 , limit = 25} ={}){
    const gifUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=g&lang=en`
      
      return await fetch(gifUrl)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
        
      }        
    
