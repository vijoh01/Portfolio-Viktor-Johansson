"use client"
import Image from 'next/image'
import viktor from '@/imgs/nobac.png'
import stars from '@/imgs/stars.jpg'
import vector from '@/imgs/vector.jpg'
import { BiDownArrowAlt } from 'react-icons/bi'
import React, { useEffect, useState } from 'react';
import ScrollLink from '@/hooks/ScrollLink'
import Line from '@/assets/Line'
import { motion } from 'framer-motion'

export function Home() {
  const introPictureVariants: any = {
    hide: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};
  return (
    <div  id='section-1' className='flex  flex-col min-h-screen justify-between  text-secondary-50 dark:text-secondary-500 '>
      
      <div className='flex items-center h-[95%] w-full md:justify-center'>
        <motion.div initial="hide"
        whileInView="show"
        exit="hide" variants={introPictureVariants} className='flex flex-col-reverse justify-between w-full pt-[2rem] md:flex-row md:w-[50rem] lg:w-[65rem]'>
        
          <div className='border-t-2 text-secondary-400 dark:text-secondary-500 md:border-none md:absolute text-center md:text-start flex flex-col self-center w-[24rem] md:w-[26rem] lg:w-[33rem] z-10'>
            
            <p className='text-secondary-400 pointer-events-none bg-primary-50 backdrop-blur-sm dark:bg-secondary-50 dark:bg-opacity-40 bg-opacity-70 dark:text-secondary-500 font-bold text-4xl md:text-5xl lg:text-6xl mt-4'>Viktor Johanss<span className=''>on</span></p>
            <p className='animate-color pointer-events-none text-secondary-400 dark:text-secondary-200  stroke-primary-500  text-2xl md:text-3xl lg:text-4xl'>Fullstack Webdeveloper</p>
            <ScrollLink href={"#section-5"} className='text-secondary-500 outline-none dark:text-secondary-50 pt-1 pb-1 pl-8 pr-8  text-center mt-5 rounded-md bg-secondary-400  dark:bg-secondary-500 font-bold text-2xl md:w-[12rem]'>Contact</ScrollLink>

          </div>

          <div id="target-element" className="min-h-[22.6rem] max-h-[22.6rem] md:max-h-[22.6rem] lg:max-h-[30rem] md:min-h-[40rem] md:w-[28rem] lg:min-h-[40.5rem] lg:w-[40rem] md:translate-x-[22rem] lg:translate-x-[27rem] flex justify-center items-center overflow-hidden">
            
            <svg
              className='animate-color dark:animate-color translate-x-48 md:translate-x-[14.2rem] lg:translate-x-[17.5rem] rotate-6 min-w-[13rem] w-[13rem]  scale-[2] md:scale-[2.5] lg:scale-[3.4] md:translate-y-[4.7rem] translate-y-[4.7rem]'
              width="200"
              height="200" 
            >
              <defs>
                <linearGradient id="gradient" gradientTransform="rotate(0deg)">
                  <stop offset="0%" stopColor={"#bc9a92"} />
                  <stop offset="50%" stopColor={"#bc9a92"} />
                  <stop offset="75%" stopColor={"#95665b"} />
                  <stop offset="100%" stopColor={"#47312b"} />
                </linearGradient>
              </defs>
              
              <path  className="fill-current filter brightness-[0.4] dark:brightness-100 " fill="url(#gradient)" d="M52,22.09a29.27,29.27,0,0,1,8.69-4.59c7.26-2.4,15-2.25,22.57-2.09,21,.43,43.79,1.56,59.95,16.13,8,7.25,13.57,17.16,19,26.87Q174,79.66,185.77,100.93c2.36,4.25,4.76,8.64,5.59,13.53,1.18,7-1.05,14.2-4.83,19.94s-9,10.19-14.42,14.12c-18.13,13.23-39.38,21.9-61.2,22.72S66.73,164.62,50.29,149c-10.18-9.66-17.83-22-25.08-34.42-6.74-11.47-13.44-23.73-14.09-37.3-.68-14.66,6.08-29,16-39A75.74,75.74,0,0,1,52,22.09Z" />
            </svg>
   
            <Image  className='-translate-x-28 contrast-[1.05] pointer-events-none filter grayscale-[0.12] brightness-[1.055] dark:brightness-[1.055] min-w-[24rem] w-[24rem] md:min-w-[28rem] lg:min-w-[35rem] lg:scale-150 -translate-y-10 scale-[1.15] md:scale-[1.4] md:-translate-y-14  lg:-translate-y-[3.53rem]' src={viktor} alt='dasd'></Image>
         
          </div>
        </motion.div>
      </div>
    </div>
  )
}