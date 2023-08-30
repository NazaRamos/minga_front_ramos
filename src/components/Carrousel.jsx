import { useEffect, useState } from 'react'
import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'
import axios from 'axios'

export default function Carrousel() {
    let [categories, setCategories] = useState([])
    let [counter, setCounter] = useState(0)
    function fetchData() {
    axios('https://minga-back-vyqy.onrender.com/categories')
    .then(res=>setCategories(res.data.categories))
    .catch(err=>console.log(err))
  }

  useEffect(() => {
    fetchData(),
   []
  })

  let next = () => (counter!==categories.length- 1) ? setCounter(counter + 1) : setCounter(0)
  let prev = () => (counter!==0) ? setCounter(counter- 1) : setCounter(categories.length-1)

  return (
    <>
      <ArrowLeft prev={prev}/>
        <img className="h-40 mb-10" src={categories[counter]?.character_photo} alt="" />
          <img className="h-40 mb-8" src={categories[counter]?.cover_photo} alt="" />
          <div className='md:w-48 lg:w-96'>
            <h4 className='text-white md:text-center lg:text-left'>{categories[counter]?.name}</h4>
            <p className='text-white text-xs md:text-center lg:text-left'>{categories[counter]?.description}</p>
          </div>
      <ArrowRight next={next}/>
    </>
  )
}