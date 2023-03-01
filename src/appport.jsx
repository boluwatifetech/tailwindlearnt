import React from 'react';
import './main.css'
import {FaBars, FaFacebook} from 'react-icons/fa'

function App(){
  return(
    <div className='w-full bg-blue-50'>
    <div className='bg-purple-700 px-4  py-4  border-b-2 border-pink-500'>
 <header className='flex items-center justify-between p-4'>
  <h1 className='sm:text-3xl lg:text-4xl capitalize text-red-300'>
   scrimba
  </h1>
 <FaBars className='text-white cursor-pointer hover:text-red-400 transition duration-700 lg:text-3xl sm:xl'/>
  
 </header>
 <div className='mx-5'>
  <h1  className='capitalize text-white tracking-wider text-bolder 
  md:text-3xl lg:text-4xl mb-6 mt-10'>want to learn tailwind css?</h1>
  <p className='text-white md:text-2xl lg:text-2xl tracking-wider leading-2'>
  Tailwind is the fastest growing  utility-first  class<br></br> frameworks. let's learn it step by step</p>
 <button className='relative mt-4 rounded-lg cursor-pointer transition duration-600 
 sm:text-sm lg:text-xl uppercase hover:bg-red-700
  bg-red-500 text-white sm:px-3 sm:py-1 lg:px-4 lg:py-2'>enroll now</button>

<button className='lg:p-10  sm:p-8  absolute right-10 bottom--1
 hover:bg-gray-400 hover:text-white transition duration-600 
  bg-white border-2 md:text-2xl  lg:text-4xl text-green-700 
 border-red-500 rounded-full capitalize'> button</button>

 </div>
 

 
 </div>
<div>
</div>
<div className='mt-40 px-10'>
  <h1 className='mb-8 border-black-200 border-b-2 text-blue-600
   lg:text-4xl sm:text-3xl capitalize font-extrabold pb-4'>how it works</h1>
  <p className='leading-loosed tracking-wider text-gray-500 lg:text-xl sm:text-base '>
  Tailwind is designed for rapid development of modern applications, As it comes,
   It is a mobile first design system built
  with developer experience in mind. After using tailwind css ,you will find
   it difficult to go back to use anything else.
  learn all about it in this all-inclusive course
  </p>
</div>
<div className='px-5 py-6'>
  <h1 className=' mb-8 mt-20 border-black-300 border-b-2 text-blue-600 text-4xl 
  capitalize font-extrabold pb-4'>Advantage</h1>
  <div className='grid  gap-10   overflow-hidden  sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 rounded-lg'>
<div className=' flex flex-col  gap-1 items-center justify-center border-b-4 border-pink-600
 text-center bg-white py-6 px-10 rounded-lg'>
  <FaFacebook className='text-4xl text-blue-600'/>
  <h2 className='my-4 text-2xl capitalize font-bold'>no custom css</h2>
  <p className='text-lg font-normal leading-loose tracking-wide text-gray-600'>Tailwind's advanced class 
  extraction will leave your project less of custom css</p>
</div>
<div className=' flex flex-col rounded-lg gap-2 items-center justify-center text-center border-b-4
 border-pink-600 bg-white py-6 px-8'>
  <FaFacebook className='text-4xl text-blue-600'/>
  <h2 className='my-4 text-2xl capitalize font-bold'>developer experience</h2>
  <p className='text-lg  leading-loose font-normal tracking-wide text-gray-500'>Tailwind is designed with 
  your happiness in mind.The ease of performing
  changes is refreshing.
  </p>
</div>
<div className=' flex flex-col  gap-2 rounded-lg items-center justify-center text-center border-b-4
 border-pink-600 bg-white py-6 px-8'>
  <FaFacebook  className='text-4xl text-blue-600'/>
  <h2 className='my-4 text-2xl capitalize font-bold'>mobile friendly</h2>
  <p className='text-lg  leading-loose font-normal tracking-wide text-gray-500'>Modern applications
   demand mobile-friendly & tailwind's responsive
  modifiers make it easy</p>
</div>
  </div>
</div>

<footer className='mt-10 bg-slate-800 flex justify-center px-8 py-5 flex-col text-center'>
<h1 className='text-2xl text-white font-bold mb-8'>Sign up to download the free PDF</h1>
<div className='grid lg:grid-cols-2 gap-5  sm:grid-cols-1'>

  <input type='text' className='bg-gray-600 w-250 rounded-lg h-10 pl-5 placeholder-gray-400 
focus:bg-white focus:text-black focus:border-none hover:bg-gray-400 hover:placeholder:text-white
focus:outline-none transition duration-900
  capitalize' placeholder='enter your name'/>
  <input type='text' className='focus:bg-white focus:text-black hover:bg-gray-400 hover:placeholder:text-white
  focus:border-none transition duration-500 focus:outline-none
  capitalize bg-gray-600 w-300 rounded-lg h-10 pl-5 placeholder-gray-400' placeholder='enter your name'/>
  <input type='text' className='bg-gray-600 w-300 rounded-lg hover:bg-gray-400
   hover:placeholder:text-white h-10 pl-5 transition duration-500 placeholder-gray-400
    focus:bg-white focus:text-black 
  focus:border-none focus:outline-none capitalize' placeholder='enter your name'/>
  <input type='text' className='bg-gray-600 w-300 rounded-lg hover:bg-gray-400
   hover:placeholder:text-white h-10 pl-5 placeholder-gray-400 
  focus:bg-white focus:text-black focus:border-none focus:outline-none transition
   duration-500 capitalize' placeholder='enter your name'/>
  
</div>
<button className='bg-sky-400 text-white mt-8 text-xl hover:bg-sky-300
 cursor-pointer transition duration-500 rounded-lg h-10 pl-5  capitalize'>create account</button>
<small className='text-gray-200 mt-20'>.copyright &copy; blaqstix</small>
</footer>
</div>
)
}

export default App
