import React from 'react'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import Spinner from '../../components/Spinner/Spinner'
import {useGifs} from '../../hooks/useGifs'

export default function SearchResults({params}) {
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword })
    
    //console.log({loading, gifs});
    
/* EXPORTO LAS CONSTANTES Y LA FUNCION USEEFFECT PARA CREAR EL CUSTOM HOOK Y PODER REUTILIZARLO
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function () {
        setLoading(true)
        getGifs({keyword})
            .then(gifs =>{
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])
*/
  return (
    <>
        {
        loading ?
        <Spinner />
        : <ListOfGifs gifs={gifs}/>
        }
    </>
  )
}

