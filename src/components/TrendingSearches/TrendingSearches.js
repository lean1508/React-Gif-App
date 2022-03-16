import React, { useEffect , useState } from 'react'
import getTrendingTop from 'services/getTrendingTop'
import Category from 'components/Category/Category.js'

export default function TrendingSearches() {
    const [trends , setTrends] = useState([])
    

    useEffect(function () {
       getTrendingTop().then(setTrends)
    }, [])
  return <Category name = 'Tendencias' options ={trends}/>
}

