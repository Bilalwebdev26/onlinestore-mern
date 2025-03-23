import React from 'react'
import heroImg from "../../assets/rabbit-hero.webp"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='relative'>
      <img src={heroImg} alt="Rabbit" className='w-full h-[330px] md:h-[370px] lg:h-[470px] object-cover' />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex items-center justify-center">
         <div className="text-center text-white p-6">
            <h1 className='text-3xl md:text-7xl font-bold tracking-tighter uppercase mb-4  bg-gradient-to-r from-[#FFA725] via-[#FFF5E4] to-[#6A9C89] bg-clip-text text-transparent '>Vacations<br />Ready</h1>
            <p className='text-[15px] tracking-tighter md:text-lg mb-6 font-semibold text-white'>Explore our vaction-ready outfits</p>
            <Link to="#" className='bg-gradient-to-r from-[#FFB200] to-[#EB5B00] text-white px-6 py-2 rounded-sm text-lg hover:px-8 hover:py-4 duration-400'>
              Shop Now
            </Link>
         </div>
      </div>
    </section>
  )
}

export default Hero
