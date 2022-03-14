import React from 'react'
import Gif from '../../components/Gif/Gif';
import useGlobalGifs from '../../hooks/useGlobalGifs';

export default function Detail({params}) {
    const gifs = useGlobalGifs()
    //console.log({gifs});
    const gif = gifs.find(gif => gif.id === params.id)


    //console.log(params.id);
  return <>
      <Gif {...gif}/>
    </>
}
