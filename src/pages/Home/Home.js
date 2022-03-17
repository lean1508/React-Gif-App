import React, {useState} from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches/index'
import { useGifs } from 'hooks/useGifs'

export default function Home() {
const [keyword , setKeyword] = useState('') 
const [path , pushLocation] = useLocation()

//console.log(localStorage.lastKeyword);

const {loading, gifs} = useGifs()

const handleSubmit = e => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
}
const handleInput = e => {
    setKeyword(e.target.value)
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="App-search"
          placeholder="Busque el Gif que desee..."
          onChange={handleInput}
          type="text"
          value={keyword}
        />
        <button className="App-button btn btn-success">Buscar!</button>
      </form>
      <div className="container-fluid p-3">
        <h3 className="App-title px-5">Última busqueda</h3>
      </div>
      <ListOfGifs gifs={gifs} />
       <TrendingSearches />
    </>
  );
}
