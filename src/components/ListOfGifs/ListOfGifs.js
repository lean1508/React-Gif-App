import Gif from '../Gif/Gif'
import './ListOfGifs.css'


export default function ListOfGifs({gifs}) {
  

  return (
      <div className='ListOfGifs px-5'>
        {
            gifs.map(( {id, title, url} ) => 
                <Gif 
                id = {id}
//Siempre se pasa un indice unico (KEY) por iteracion, para que no genere inconsistencias en los datos.
                key = {id} 
                title = {title}
                url= {url}
                />
        
                )
        }
      </div>
  )
}
