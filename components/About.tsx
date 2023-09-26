"use client"
import { BiDownArrowAlt } from 'react-icons/bi'
import React, { useEffect, useState } from 'react';
import ScrollLink from '@/hooks/ScrollLink'
import { motion } from 'framer-motion'
import { downloadCV } from '@/lib/api';
import {AiOutlineDownload} from 'react-icons/ai'

export default function About() {
  
  const introPictureVariants: any = {
    hide: {
        opacity: 0,
        x: 200,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        },
    },
};

    return (
      <main id="section-2" className='flex items-center min-h-screen bg-fixed  flex-col justify-between text-[#000] dark:text-secondary-500 '>
      
      <div className="z-10 flex h-full items-center justify-center">
      

        <motion.div 
        className="max-w-[20rem] md:max-w-[50rem] pr-5 pl-5 min-w-[15rem] flex flex-wrap mt-12" initial="hide"
        whileInView="show"
        exit="hide" variants={introPictureVariants}>

          <h1 className="text-2xl pb-5 lg:text-3xl">Your new employee</h1>
          <div className='text-sm sm:text-lg lg:text-xl'>
          <p>
          Hello, I'm Viktor, a 22 year old front-end web developer studying at Grit Academy, 
          a university of applied sciences in Malmo. Technology and IT have been my passion since childhood, 
          and I'm a dedicated programmer. I'm known for my accuracy, positivity, and flexibility in my current job. 
          In my free time, I enjoy programming my own ideas and training. I look forward to contribute as a developer.
          </p>
          <div className='flex flex-col md:flex-row md:justify-between justify-center'>
          <div className='flex flex-col'>
            <p className='mt-5'>Regards,</p>
            <p className='mt-2'>Viktor Johansson.</p>
          </div>
          <a href={"/api/download"} className='mt-5 flex items-center justify-center w-full pr-5 pl-5 md:w-[20rem] p-2 backdrop-brightness-90 hover:backdrop-brightness-105 md:mr-28' download>
            Download CV (PDF)<AiOutlineDownload className='ml-2'></AiOutlineDownload>
            </a>
          </div>
          </div>
          </motion.div>
     
      </div>
      
  </main>
    )
}
