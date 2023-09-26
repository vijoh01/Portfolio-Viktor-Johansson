"use client"
import {Home} from '@/components/Home'
import Nav from '@/components/Nav'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Flare from '@/hooks/Flare'
import Contact from '@/components/Contact'
import ScrollLink from '@/hooks/ScrollLink'
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'
import { useState, useEffect } from 'react'

export default function Portfolio() {
  const [scroll, setScroll] = useState(2);

  useEffect(() => {
    function checkSection() {
      let fade = document.querySelector('.link');
      
      if (window.scrollY < (900 * window.innerHeight) / 1000) {
        setScroll(2);
        console.log("test");
        fade?.classList.remove('animate-fade')
        fade?.classList.add('animate-fade')
    
      } if (window.scrollY > (900 * window.innerHeight) / 1000 && window.scrollY < ((900*2) * window.innerHeight) / 1000) {
        setScroll(3);
        fade?.classList.remove('animate-fade')
        fade?.classList.add('animate-fade')
      } if (window.scrollY > ((900*2) * window.innerHeight) / 1000 && window.scrollY < ((900*3) * window.innerHeight) / 1000) {
        setScroll(4);
        fade?.classList.remove('animate-fade')
        fade?.classList.add('animate-fade')
      } if (window.scrollY > ((900*3) * window.innerHeight) / 1000 && window.scrollY < ((900*4) * window.innerHeight) / 1000) {
        setScroll(5);
        fade?.classList.remove('animate-fade')
        fade?.classList.add('animate-fade')
      } if (window.scrollY > ((900*4) * window.innerHeight) / 1000 && window.scrollY < ((900*5) * window.innerHeight) / 1000) {
        setScroll(1);
        fade?.classList.remove('animate-fade')
        fade?.classList.add('animate-fade')
      }
    }

    window.addEventListener("scroll", checkSection);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", checkSection);
    };
  })
  

  
  return (
    <>
    
    
    <main className="flex scroll-smooth overflow-hidden bg-fixed">
      <div className='opacity-0 md:opacity-100'>
      <Flare></Flare>
      </div>
      
      <div className=' flex ml-0 lg:mt-0 lg:ml-20 flex-col max-w-full w-full bg-primary-50 dark:bg-secondary-50 '>
      
        <Home/>
   
        <About/>
     
        <Skills/>

        <Projects/>
        
        <Contact />
        <ScrollLink href={"#section-" + scroll} className='z-10 rounded-full p-3 mb-5 mt-5 fixed bottom-0 opacity-90 hover:opacity-100 bg-secondary-50 dark:bg-secondary-100 text-primary-50 dark:text-primary-100 self-center'>
        {scroll > 1 ? <BiDownArrowAlt className='rounded-full '></BiDownArrowAlt> : <BiUpArrowAlt className='rounded-full animate-bounce_arrow'></BiUpArrowAlt>}
      </ScrollLink>
      </div>
      
    </main>
    </>
  )
}
