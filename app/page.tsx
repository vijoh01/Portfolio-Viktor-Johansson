import {Home} from '@/components/Home'
import Nav from '@/components/Nav'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Flare from '@/hooks/Flare'
import Contact from '@/components/Contact'

export default function Portfolio() {

  return (
    <>
    
    <main className="flex scroll-smooth overflow-hidden bg-fixed">
      <Nav></Nav>
      <Flare></Flare>
      <div className=' flex ml-0 lg:mt-0 lg:ml-20 flex-col max-w-full w-full bg-primary-50 dark:bg-secondary-50 '>
      
        <Home/>
   
        <About/>
     
        <Skills/>

        <Projects/>
        
        <Contact />
      </div>
    </main>
    </>
  )
}
