"use client"
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'
import ScrollLink from '@/hooks/ScrollLink'
import Image from 'next/image'
import tamagotchi from '@/imgs/tamagotchi.png'
import msg from '@/imgs/msgboard.png'
import weather from '@/imgs/weather.png'
import viktor from '@/imgs/viktor.png'
import {FiArrowUpRight} from 'react-icons/fi'
import React, { useState } from 'react';

export default function Projects() {
  const [arrowTransform, setArrowTransform] = useState('translateX(0)');
  const [transitionDuration, setTransitionDuration] = useState('0.1s');
  const [opacity, setOpacity] = useState('0.45');
  const [hovered, setHovered] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false
  });

  const handleMouseOver = () => {
    setArrowTransform('translate(4px, -5px)');
    setTransitionDuration('0.1s');
    setOpacity('0.45');
  };

  const handleMouseOut = () => {
    setArrowTransform('translateX(0)');
    setTransitionDuration('0.5s');
    setOpacity('1');
  };

  return (
    <main
      id="section-4"
      className="flex items-center min-h-screen overflow-hidden bg-fixed pt-10 lg:pt-0 flex-col text-[#000] dark:text-secondary-500"
    >
      <div className='min-w-[20rem]  flex text-center justify-center flex-col z-10 mt-10 md:mt-auto md:mb-auto w-screen max-w-[100rem]'>
      <h1 className='text-center text-3xl '>Projects</h1>
      
      <div className="p-5 flex  min-w-[20rem] justify-center overflow-hidden overflow-x-hidden flex-col sm:flex-row flex-wrap w-screen max-w-[100rem]"
      >
      
      <button onMouseOver={() => {handleMouseOver(); setHovered({first: true, second: false, third: false, fourth: false});}} style={hovered.first != true ? { opacity: opacity, transitionDuration: transitionDuration} : {}}
          onMouseOut={handleMouseOut} onClick={() =>  window.open("https://vijoh01.github.io/fe22-vh-slutprojekt-grupp-6/", '_blank')} className='w-full bg-[#d0b7b2] dark:bg-[#1c1c1c] sm:w-[30rem]  md:w-[40rem] lg:w-[35rem] min-h-[8rem] lg:min-h-[15rem] flex flex-col items-center justify-evenly'>
          <div className='flex justify-center items-center'>
            <h1 className='mt-2 mb-2'>MsgBoard</h1> 
            <FiArrowUpRight className='ml-2 text-xl' id='arrow' style={hovered.first == true ? { transform: arrowTransform, transitionDuration: transitionDuration} : {}}/>
          </div>
          <div className='flex justify-between items-center flex-col md:flex-row'>
            <Image src={msg} className='w-[15rem] md:ml-5' alt=''></Image>
            <p className='text-start w-[15rem] md:mr-5 md:ml-5 mt-2 mb-2'>Social media app, it allows you to register and post messages that can be seen by anyone.</p>
          </div>
      </button>
      <button  onClick={() => window.open("https://vijoh01.github.io/FE22-js2-mp2-Viktor-Johansson/", '_blank')} onMouseOver={() => {handleMouseOver(); setHovered({first: false, second: true, third: false, fourth: false});}}
          onMouseOut={() => {handleMouseOut();}} style={hovered.second !== true ? { opacity: opacity, transitionDuration: transitionDuration} : {filter: 'brightness(1)'}} className='w-full filter bg-[#d0b7b2] dark:bg-[#1c1c1c] sm:w-[30rem] md:w-[40rem] lg:w-[35rem] min-h-[8rem] lg:min-h-[15rem] flex items-center flex-col justify-evenly'>
          <div className='flex justify-center items-center'>
            <h1 className='mt-2 mb-2'>Tamagotchi</h1> 
            <FiArrowUpRight className='ml-2 text-xl' id='arrow' style={hovered.second == true ? { transform: arrowTransform, transitionDuration: transitionDuration} : {}}/>
          </div>
          <div className='flex justify-between items-center flex-col md:flex-row'>
            <Image src={tamagotchi} className='w-[15rem] md:ml-5' alt=''></Image>
            <p className='text-start w-[15rem] md:mr-5 md:ml-5 mt-2 mb-2'>School project, create your own tamagotchi. It gets hungry, you better feed it..</p>
          </div>
      </button>

      <button onClick={() => window.open("https://ignacio-ci.github.io/fe22-vh-projekt1-grupp-5/", '_blank')} onMouseOver={() => {handleMouseOver(); setHovered({first: false, second: false, third: true, fourth: false});}} onMouseOut={handleMouseOut} style={hovered.third != true ? { opacity: opacity, transitionDuration: transitionDuration} : {filter: 'brightness(1)'}} className='w-full filter items-center bg-[#d0b7b2] dark:bg-[#1c1c1c] sm:w-[30rem] md:w-[40rem] lg:w-[35rem] min-h-[8rem] lg:min-h-[15rem] flex flex-col justify-evenly'>
      <div className='flex justify-center items-center'>
            <h1 className='mt-2 mb-2'>Weather</h1> 
            <FiArrowUpRight className='ml-2 text-xl' id='arrow' style={hovered.third == true ? { transform: arrowTransform, transitionDuration: transitionDuration} : {}}/>
          </div>
          <div className='flex justify-between items-center flex-col md:flex-row'>
            <Image src={weather} className='w-[15rem] md:ml-5' alt=''></Image>
            <p className='text-start w-[15rem] md:mr-5 md:ml-5 mt-2 mb-2'>School group project using weather api that allows you to see the weather anywhere.</p>
          </div>
      </button>
      <button onClick={() => window.open("https://vijoh01.github.io/FE22-js1-mp4-viktor-johansson/", '_blank')} onMouseOver={() => {handleMouseOver(); setHovered({first: false, second: false, third: false, fourth: true});}} onMouseOut={handleMouseOut} style={hovered.fourth != true ? { opacity: opacity, transitionDuration: transitionDuration} : {}} className='w-full filter bg-[#d0b7b2] dark:bg-[#1c1c1c] items-center sm:w-[30rem] md:w-[40rem] lg:w-[35rem] min-h-[8rem] lg:min-h-[15rem] flex flex-col justify-evenly'>
      <div className='flex justify-center items-center'>
            <h1 className='mt-2 mb-2'>Animation</h1> 
            <FiArrowUpRight className='ml-2 text-xl' id='arrow' style={hovered.fourth == true ? { transform: arrowTransform, transitionDuration: transitionDuration} : {}}/>
          </div>
          <div className='flex justify-between items-center flex-col md:flex-row'>
            <Image src={viktor} className='w-[15rem] md:ml-5' alt=''></Image>
            <p className='text-start w-[15rem] md:mr-5 md:ml-5 mt-2 mb-2'>School project, basic animation</p>
          </div>
      </button>
      
      </div>
      </div>

    </main>
  );
}