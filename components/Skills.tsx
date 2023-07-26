"use client"
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'
import { DiJava, DiMysql, DiJqueryLogo, DiReact } from 'react-icons/di'
import { AiFillHtml5, AiFillGithub, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import {BsFillHddNetworkFill} from 'react-icons/bs'
import { TiCss3 } from 'react-icons/ti'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiTypescript, SiJavascript, SiMaterialdesignicons, SiExpress} from 'react-icons/si'
import { DiJavascript1 } from 'react-icons/di'
import ScrollLink from '@/hooks/ScrollLink'
import { motion } from 'framer-motion'

export default function Skills() {
  const skillsAnimation: any = {
    hide: {
        opacity: 0,
        x: -300,
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
        <main id="section-3" className='flex items-center min-h-screen  bg-fixed pt-10 lg:pt-0  flex-col justify-between text-[#000] dark:text-secondary-500 '>
            <motion.div initial="hide"
        whileInView="show"
        exit="show" variants={skillsAnimation} className=" p-5 flex flex-col bg-[#d0b7b2] dark:bg-[#1c1c1c] pb-5 items-center justify-center mt-auto mb-auto z-10">
            <h1 className='pb-5 text-3xl'>Knowledge</h1>
              <div className=' pointer-events-none flex flex-col-reverse md:flex-row justify-center items-center md:ml-24 '>
                
                <div className='flex flex-wrap w-[20rem] justify-between md:w-[24rem] md:justify-start'>
                  <p className='border p-1 m-1 bg-secondary-200 filter dark:bg-primary-800 flex items-center justify-between'><AiFillHtml5 className='mr-2 ml-2'/>HTML</p>
                  <p className='border p-1 m-1 bg-secondary-200 filter dark:bg-primary-800 flex items-center justify-between'><TiCss3 className='mr-2 ml-2'/>CSS</p>
                  <p className='border p-1 m-1 bg-secondary-200 filter dark:bg-primary-800 flex items-center justify-between'><SiJavascript className='mr-2 ml-2'/>JAVASCRIPT</p>
                  <p className='border p-1 m-1 bg-secondary-200 filter dark:bg-primary-800 flex items-center justify-between'><SiTypescript className='mr-2 ml-2'/>TYPESCRIPT</p>
                  <p className='border p-1 m-1 bg-secondary-200 filter dark:bg-primary-800 flex items-center justify-between'><DiJava className='mr-2 ml-2'/>JAVA</p>
                  <p className='border p-1 m-1 bg-secondary-200 filter dark:bg-primary-800 flex items-center justify-between'><DiMysql className='mr-2 ml-2'/>MYSQL</p>
                  <p className='border p-1 m-1 bg-secondary-200 filter dark:bg-primary-800 flex items-center justify-between'><SiMaterialdesignicons className='mr-2 ml-2'/>UX DESIGN</p>
                  <p className='border p-1 m-1 bg-secondary-200 filter dark:bg-primary-800 flex items-center justify-between'><AiFillGithub className='mr-2 ml-2'/>GITHUB</p>
                  <p className='border p-1 m-1 bg-secondary-200 filter dark:bg-primary-800 flex items-center justify-between'><DiJqueryLogo className='mr-2 ml-2'/>JQUERY</p>
                  <p className='border p-1 m-1 bg-secondary-200 filter dark:bg-primary-800 flex items-center justify-between'><TbBrandNextjs className='mr-2 ml-2'/>NEXTJS</p>
                  <p className='border p-1 m-1 bg-secondary-200 filter dark:bg-primary-800 flex items-center justify-between'><DiReact className='mr-2 ml-2'/>REACT</p>
                  <p className='border p-1 m-1 bg-secondary-200 filter dark:bg-primary-800 flex items-center justify-between'><SiExpress className='mr-2 ml-2'/>EXPRESSJS</p>
                  <p className='border p-1 m-1 bg-secondary-200 filter dark:bg-primary-800 flex items-center justify-between'><BsFillHddNetworkFill className='mr-2 ml-2'/>REST API</p>
                  <p className='border p-1 m-1 bg-secondary-200 filter dark:bg-primary-800 flex items-center justify-between'><AiOutlineFundProjectionScreen className='mr-2 ml-2'/>AGILE PROCESS</p>
                </div>
                <div className='flex justify-start pb-10 md:pb-0'>
                  <p className='w-[20rem] md:w-[22rem] ml-2 md:mr-20 mr-0 md:ml-12 md:text-lg'>I am a fast learner who always seeks to improve and expand my knowledge. With proficiency in programming languages and a diverse skill set, I continuously strive to learn more and enhance my abilities.</p>
                  </div>
              </div>
               
            </motion.div>
        
      <ScrollLink href={"#section-4"} className='z-10 rounded-full p-3 mb-5 mt-1 bg-secondary-50 dark:bg-secondary-100 text-primary-50 dark:text-primary-100 self-center'>
        <BiDownArrowAlt className='rounded-full'></BiDownArrowAlt>
      </ScrollLink>
        </main>
    )
}