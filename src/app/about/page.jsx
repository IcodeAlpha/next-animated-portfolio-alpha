"use client";
import {motion, useInView, useScroll} from "framer-motion";
import {useRef } from "react";

const AboutPage = () => {

  const containerRef = useRef();

 // const {scrollYProgress} = useScroll({container:containerRef})

  const skillRef = useRef();
  //const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, {margin:"-100px"});

  const experienceRef = useRef();
  const isexperienceRefInView = useInView(experienceRef, {margin:"-100px"});



    return (
      <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0"}} transition={{ duration: 1 }}
      >
        {/*CONTAINER*/}
        <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
          {/*TEXT CONTAINER*/}
          <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
            {/*BIOGRAPHY CONTAINER*/}
            <div className="flex flex-col gap-12 justify-center">
              {/*BIOGRAPHY TITLE*/}
              <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
              {/*BIOGRAPHY DESC*/}
              <p className="text-lg">
              I&apos;m a talented and creative developer and digital product designer and who designs and code beautifully simple things. I love to create simple content structures and break down wierd and wonderful ideas and bring them to life. I&apos;m agile and able to move quickly and adapt to working conditions. 
              I ensures no detail is lost in transition of building products.
              </p>
              {/*BIOGRAPHY QUOTE*/}
              <span className="italic">
                Go on...Be Creative and Change the World.
              </span>
              {/*BIOGRAPHY SIGN SVG*/}
              <div className='self-end'>
              <svg 
              width="132" 
              height="81" 
              viewBox="0 0 132 81" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg">

          <path d="M3.99999 79C5.57757 75.3941 9.00017 72.3051 11.4444 69.3333C19.8492 59.1146 28.0544 48.4462 32.8889 36C36.9468 25.5529 39.1527 7.98414 25.7778 3.11111C2.32226 -5.43469 -1.63884 29.9585 4.22221 44.6111C10.2143 59.5914 34.4079 61.8843 48 62C56.82 62.0751 65.7034 61.5705 74.2222 59.1111C82.6063 56.6906 90.0873 51.5619 98.4444 49.3333C100.596 48.7597 100.231 51.7265 100.778 53.1111C103.553 60.1426 112.406 56.9647 117.667 55C122.187 53.3119 125.752 49.4159 130 48" stroke="#09731A" stroke-width="3" stroke-linecap="round"/>
          </svg>
  
              </div>
              {/*BIOGRAPHY SCROLL SVG*/}
              <motion.svg
                initial={{ opacity: 0.2, y:0}}
                animate={{ opacity: 1, y:"10px"}}
                transition={{ repeat:Infinity, duration:3, ease:"easeInOut"}}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="MS 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9999"
                  stroke="#000000"
                  strokeWidth="1"
                 ></path>
                 <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                 <path
                  d="M15 11L12 14L9 11"
                  stroke="000000"
                  strokeWidth="1"
                 ></path> 
              </motion.svg>  
            </div>
             {/*SKILLS CONTAINER*/}
            <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
              {/*SKILL TITLE*/}
              <motion.h1 initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} : {}} transition={{delay: 0.2}} className="font-bold text-2xl">SKILLS</motion.h1>
              {/*SKILL LIST*/}
              <motion.div animate={isSkillRefInView ? {x:0} : {}} className='flex gap-4 flex-wrap'>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  JavaScript
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  TypeScript
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  React.js
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  Next.js
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  CSS
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  Tailwind.CSS
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  MongoDB
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  PostgreSQL
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  Node.js
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  GraphQL
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  Framer Motion
                  </div>
              </motion.div>
              {/*SKILL SCROLL SVG*/}
              <motion.svg
                initial={{ opacity: 0.2, y:0}}
                animate={{ opacity: 1, y:"10px"}}
                transition={{ repeat:Infinity, duration:3, ease:"easeInOut"}}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="MS 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9999"
                  stroke="#000000"
                  strokeWidth="1"
                 ></path>
                 <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                 <path
                  d="M15 11L12 14L9 11"
                  stroke="000000"
                  strokeWidth="1"
                 ></path> 
              </motion.svg>
            </div>
              {/*EXPERIENCE CONTAINER*/}
            <div className='flex flex-col gap-12 justify-center pb-48' ref={experienceRef}>
              {/*EXPERIENCE TITLE*/}
              <motion.h1 initial={{x:"-300px"}} animate={isexperienceRefInView ? {x:"0"} : {}} transition={{delay: 0.2}} className="font-bold text-2xl">EXPERIENCE</motion.h1>
              {/*EXPERIENCE LIST*/}
              <motion.div initial={{ x:"-300px"}} animate={isexperienceRefInView ? {x:"0"} : {}}className=''>
              {/*EXPERIENCE LIST ITEM*/}
              <div className='flex justify-between h-48'>
                {/*LEFT*/}
                <div className='w-1/3'>
                  {/*JOB TITLE*/}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Freelance Nextjs Developer</div>
                  {/*JOB DESC*/}
                  <div className='p-3 text-sm italic'>
                    I enjoy working with the Nextjs framework to bring ideas to life
                    </div>
                    {/*JOB DATE*/}
                    <div className='p-3 text-green-400 text-sm font-semibold'>2023 - Present</div>
                    {/*JOB COMPANY*/}
                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Freelance</div>
                   </div> 
                {/*CENTER*/}
                <div className='w-1/6'>
                  {/*LINE*/}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/*LINE CIRCLE*/}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-green-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className='w-1/3'></div>
                </div>
                {/*EXPERIENCE LIST ITEM*/}
              <div className='flex justify-between h-48'>
                {/*LEFT*/}
                <div className='w-1/3'>
                   </div> 
                {/*CENTER*/}
                <div className='w-1/6'>
                  {/*LINE*/}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/*LINE CIRCLE*/}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className='w-1/3'>
                  {/*JOB TITLE*/}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    React and JavaScript Developer</div>
                  {/*JOB DESC*/}
                  <div className='p-3 text-sm italic'>
                    indulged into JavaScript development and engineering using Reactjs.
                    </div>
                    {/*JOB DATE*/}
                    <div className='p-3 text-red-400 text-sm font-semibold'>2022 - Present</div>
                    {/*JOB COMPANY*/}
                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Freelance</div></div>
                </div>
                {/*EXPERIENCE LIST ITEM*/}
              <div className='flex justify-between h-48'>
                {/*LEFT*/}
                <div className='w-1/3'>
                  {/*JOB TITLE*/}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    HTML,CSS and Android Engineering</div>
                  {/*JOB DESC*/}
                  <div className='p-3 text-sm italic'>
                    Started my development career using HTML,CSS languages and also android development.
                    </div>
                    {/*JOB DATE*/}
                    <div className='p-3 text-green-400 text-sm font-semibold'>2022 - Present</div>
                    {/*JOB COMPANY*/}
                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Freelance</div>
                   </div> 
                {/*CENTER*/}
                <div className='w-1/6'>
                  {/*LINE*/}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/*LINE CIRCLE*/}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-green-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className='w-1/3'></div>
                </div>     
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      
    );
  };
  
  export default AboutPage;