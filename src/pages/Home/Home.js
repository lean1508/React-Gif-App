import React, {useState} from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

const POPULAR_GIFS = ['Simpson', 'Marvel', 'Maradona', 'DC', 'Harry Potter']

export default function Home() {
const [keyword , setKeyword] = useState('') 
const [path , pushLocation] = useLocation()

console.log(localStorage.lastKeyword);

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
        <input className='App-search' placeholder='Busque el Gif que desee...' onChange={handleInput} type='text' value={keyword} />
        <button className='App-button'>Buscar!</button>
    </form>
    <h3 className='App-title'>Última busqueda</h3>
    <ListOfGifs gifs={gifs} />
    <h3 className='App-title'>Los Gifs más buscados</h3>
    <ul className='App-list'>
        {POPULAR_GIFS.map((gifPopular)=>(
            <li key={gifPopular}>
                <Link className='App-link' to={`/search/${gifPopular}`}>Gifs de {gifPopular}</Link>   
            </li>
        ))}
    </ul>

    </>
  )
}
