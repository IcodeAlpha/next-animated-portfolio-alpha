"use client";
import {motion, useInView, useScroll} from "framer-motion";
import {useRef } from "react";

const AboutPage = () => {

  const containerRef = useRef();

  const {scrollYProgress} = useScroll({container:containerRef})

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum quibusdam cupiditate nobis accusamus sed aut aperiam, reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque suscipit! Vel doloremque numquan quam nihil.
              </p>
              {/*BIOGRAPHY QUOTE*/}
              <span className="italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              {/*BIOGRAPHY SIGN SVG*/}
              <div className='self-end'>
                <svg
                  width="185"
                  height="77"
                  viewBox="0 0 370 114"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M66 2C66 29.4851 68.6687 64.5118 49.3333 87.4444C42.4997 95.5495 35.7683 97.6796 26.2222 101C20.002 103.164 8.87322 103.873"
                    stroke="black"
                    strokeWidth="2"
                   /> 
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
                  Express.js
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  GraphQL
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  Apollo
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  Redux
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  Framer Motion
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  Three.js
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  WebGL
                  </div>
                  <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  Webpack
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
                    Senior JavaScript Engineer</div>
                  {/*JOB DESC*/}
                  <div className='p-3 text-sm italic'>
                    My current employment. Way better than the position before!
                    </div>
                    {/*JOB DATE*/}
                    <div className='p-3 text-red-400 text-sm font-semibold'>2024 - Present</div>
                    {/*JOB COMPANY*/}
                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Apple</div>
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
                    Senior JavaScript Engineer</div>
                  {/*JOB DESC*/}
                  <div className='p-3 text-sm italic'>
                    My current employment. Way better than the position before!
                    </div>
                    {/*JOB DATE*/}
                    <div className='p-3 text-red-400 text-sm font-semibold'>2024 - Present</div>
                    {/*JOB COMPANY*/}
                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Apple</div></div>
                </div>
                {/*EXPERIENCE LIST ITEM*/}
              <div className='flex justify-between h-48'>
                {/*LEFT*/}
                <div className='w-1/3'>
                  {/*JOB TITLE*/}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Senior JavaScript Engineer</div>
                  {/*JOB DESC*/}
                  <div className='p-3 text-sm italic'>
                    My current employment. Way better than the position before!
                    </div>
                    {/*JOB DATE*/}
                    <div className='p-3 text-red-400 text-sm font-semibold'>2024 - Present</div>
                    {/*JOB COMPANY*/}
                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Apple</div>
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