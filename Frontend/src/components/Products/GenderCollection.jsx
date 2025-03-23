import React from 'react'
import MenCollection from "../../assets/mens-collection.webp"
import WomensCollection from "../../assets/womens-collection.webp"
import { Link } from 'react-router-dom'
const GenderCollection = () => {
  return (
    <section className='py-16 px-4 lg:px-0 '>
      <div className="conatiner mx-auto flex flex-col md:flex-row  gap-8">
       {/* womens collectrions  */}
       <div className="relative flex-1">
        <img src={WomensCollection} alt="Womens Collection" className='w-full h-[450px] sm:h-[500px] object-cover' />
        <div className="absolute bg-white bottom-8 left-8 sm:left-2 opacity-90 p-4 ">
            <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3'>
                Women's Collection
            </h2>
            <Link className='text-gray-900 underline' to="/collection/all?gender=Women">
             Shop Now
            </Link>
        </div>
       </div>
       <div className="relative flex-1">
        <img src={MenCollection} alt="Womens Collection" className='w-full h-[450px] sm:h-[500px] object-cover' />
        <div className="absolute bg-white bottom-8 left-8 sm:left-2 opacity-90 p-4 ">
            <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3'>
                Men's Collection
            </h2>
            <Link className='text-gray-900 underline' to="/collection/all?gender=Men">
             Shop Now
            </Link>
        </div>
       </div>
      </div>
    </section>
  )
}

export default GenderCollection
