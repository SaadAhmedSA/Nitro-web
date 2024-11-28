import React from 'react'
import Navbar from './component/navbar'
import Image from 'next/image'
import about from './assets/hero.webp'
import abou2 from './assets/slide_2.jpg.webp'
// import bg from "./assets/hero_2.jpg"


const Page = () => {
  return (
    <>
    <div className='h-[100vh] hero '   id='home' >
   <Navbar/>
<div className='flex justify-center text-center font-serif w-full text-white'>
  <div>
  <h1 className='my-4 text-5xl md:text4xl font-bold'>WELCOME TO NITRO.</h1>
  <p className='max-w-screen-md' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio soluta eius error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio soluta eius error.</p>
  <button className=" mt-7 btn btn-primary hover:bg-black text-white rounded-full">Get in touch</button>
  </div>
</div>
     </div>
     <section className="bg-gray-100 py-5 " id='about'>
      <h1 className='text-4xl text-primary text-center font-bold mb-[4rem]'>About us</h1>
  <div className="container mx-auto px-5 max-lg-10">
    <div className="flex flex-col md:flex-row ">
    <div className="md:w-1/2  md:px-8">
      
      <Image src={about} alt="About Us Image" className="shadow-lg w-full h-auto mb-5"  />
    </div>
      <div className="md:w-1/2 lg:px-10  ">
        <p className="text-black mb-6 font-bold text-3xl">
        For the next great business
        </p>
        <p className="text-gray-700 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat.
        </p>
        <p className="text-gray-700">_Officia quaerat eaque neque </p>
        <p className="text-gray-700">Officia quaerat eaque neque </p>
        <p className="text-gray-700">Officia quaerat eaque neque </p>
        <p className="text-gray-700">Officia quaerat eaque neque </p>
      </div>
     
    </div>
  </div>
</section>
     <section className="bg-gray-100 py-16 " id='about'>
      <h1 className='text-4xl text-primary text-center font-bold mb-[2rem]'>Our features</h1>
      <p className='text-2xl  text-center  mb-[4rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
  <div className="container mx-auto px-5 max-lg-10">
    <div className="flex flex-col md:flex-row ">
    <div className="md:w-1/2  md:px-8">
      
      <Image src={abou2} alt="About Us Image" className="shadow-lg w-full h-auto mb-5"  />
    </div>
      <div className="md:w-1/2 lg:px-10  ">
        <p className="text-primary mb-6 font-bold text-3xl">
        Minimal and modern design
        </p>
        <p className="text-gray-700 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat.
        </p>
        <p className="text-gray-700">_Officia quaerat eaque neque </p>
        <p className="text-gray-700">Officia quaerat eaque neque </p>
        <p className="text-gray-700">Officia quaerat eaque neque </p>
        <p className="text-gray-700">Officia quaerat eaque neque </p>
        <button className=" mt-7 btn btn-primary hover:bg-black text-white rounded-full">Get in touch</button>

      </div>
     
    </div>
  </div>
</section>

    </>
  )
}

export default Page