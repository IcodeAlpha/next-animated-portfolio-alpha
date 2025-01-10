"use client"
import React from 'react'
import Image from 'next/image';
import {motion} from "framer-motion";
import Link from 'next/link';

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
      <h1 className="text-4xl md:text-6xl font-bold">
  Software Pub |{" "}
  <span
    className="font-bold"
    style={{
      background: "linear-gradient(to right, rgba(255, 0, 150, 1), rgba(0, 204, 255, 1))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
   Clean Design
  </span>
</h1>
      {/* DESC */}
      <p className="text-bold md:text-xl text-teal-600">
       Builder. Engineer. Creative</p>
      {/* BUTTONS*/}
      <div className='w-full flex gap-4'>
        <button className="p-4 rounded-lg ring-1 ring-black bg-teal-600 text-white">
          <Link href="/portfolio">View My Work</Link>    
          </button>
        <button className="p-4 rounded-lg ring-1 ring-black text-teal-600">
        <Link href="/contacts">Contact Me</Link>  
        </button>
      </div>
     </div>
    </div>
    </motion.div>
  );
}
