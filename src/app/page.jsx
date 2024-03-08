"use client"
import React from 'react'
import Navbar from '@/components/navbar'
import Image from 'next/image';
import {motion} from "framer-motion";

export default function HomePage() {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0"}} transition={{ duration: 1 }}>
    <div className="h-full flex flex-col gap-5 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
     {/* IMAGE CONTAINER*/}
     <div className='h-1/2 lg:h-full lg:w-1/2 relative mb-8 lg:mb-0'>
     <Image src="/hero.png" alt="" fill className="object-contain"/>
     </div>
     {/* TEXT CONTAINER*/}
     <div className='h-1/2 lg:h-full lg:w-1/2 flex-col mt-4 lg:mt-0 gap-10 items-centre justify-center flex'>
      {/* TITLE*/}
      <h1 className="text-4xl md:text-6xl font bold">Crafting Digital Experience, Designing Tomorrow.</h1>
      {/* DESC */}
      <p className="md:text-xl">
        Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for aesthetics and a mystery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.</p>
      {/* BUTTONS*/}
      <div className='w-full flex gap-4'>
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
        <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
      </div>
     </div>
    </div>
    </motion.div>
  );
};
