import {useContext, useState, useEffect} from 'react'
import getGifs from 'services/getGifs'
import  GifsContext from 'context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs({ keyword } = { keyword: null}) {

    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)

    const [page , setPage ] = useState(INITIAL_PAGE)
    const {gifs , setGifs} = useContext(GifsContext)
   
    // recuperamos la keyword de Local storage, en caso no tenerla
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') 

    useEffect(function () {
        setLoading(true)
        
        getGifs({keyword: keywordToUse})
            .then(gifs =>{
                setGifs(gifs)
                setLoading(false)
                // guardamos la keyword en el local Storage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, keywordToUse, setGifs])

    useEffect(() => {
        if (page === INITIAL_PAGE ) return 

        setLoadingNextPage(true)

        getGifs({keyword: keywordToUse, page})
        .then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            setLoadingNextPage(false)
        })

    }, [page, keywordToUse, setGifs])

  return  {loading, loadingNextPage, gifs, setPage}
}
