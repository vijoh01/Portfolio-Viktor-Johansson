"use client"
import React, { useEffect, useState } from 'react';
import { BiHome, BiUser, BiMenu, BiHomeSmile, BiBookBookmark, BiBookContent } from 'react-icons/bi';
import { BsFillPersonFill,BsJournalBookmark,BsJournalBookmarkFill} from 'react-icons/bs'
import {AiOutlineProject, AiFillProject, AiOutlinePhone, AiTwotonePhone, AiTwotoneHome, AiOutlineHome} from 'react-icons/ai'
import {MdOutlinePanoramaWideAngleSelect, MdOutlinePanoramaWideAngle} from 'react-icons/md'
import ScrollLink from '@/hooks/ScrollLink';
import Line from '@/assets/Line';
import DarkModeToggle from '@/components/DarkModeToggle';
import MenuButton from './MenuButton';

export default function Nav() {

  

  const [iconsData, setClicked] = useState([
    { id: 1, icon: <AiOutlineHome />, iconClicked: <AiTwotoneHome />, label: 'Home', clicked: false},
    { id: 2, icon: <BiUser />, iconClicked: <BsFillPersonFill />, label: 'About Me', clicked: false},
    { id: 3, icon: <MdOutlinePanoramaWideAngle/>, iconClicked: <MdOutlinePanoramaWideAngleSelect />, label: 'Experience', clicked: false},
    { id: 4, icon: <AiOutlineProject />, iconClicked: <AiFillProject />, label: 'Projects', clicked: false},
    { id: 5, icon: <AiOutlinePhone />, iconClicked: <AiTwotonePhone />, label: 'Contact', clicked: false},
  ]);

  const [activeSection, setActiveSection] = useState("");
  const [nav, setActiveNav] = useState(false);

  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {

    function checkSection() {
      if (window.scrollY < (900 * window.innerHeight) / 1000) {
        !nav ? setActiveSection("Home") : '';
      } if (window.scrollY > (900 * window.innerHeight) / 1000 && window.scrollY < ((900*2) * window.innerHeight) / 1000) {
        !nav ? setActiveSection("About Me") : '';
      } if (window.scrollY > ((900*2) * window.innerHeight) / 1000 && window.scrollY < ((900*3) * window.innerHeight) / 1000) {
        !nav ? setActiveSection("Experience") : '';
      } if (window.scrollY > ((900*3) * window.innerHeight) / 1000 && window.scrollY < ((900*4) * window.innerHeight) / 1000) {
        !nav ? setActiveSection("Projects") : '';
      } if (window.scrollY > ((900*4) * window.innerHeight) / 1000 && window.scrollY < ((900*5) * window.innerHeight) / 1000) {
        !nav ? setActiveSection("Contact") : '';
      }
    }
    
    checkSection();
    const handleScroll = () => {
      checkSection();
      
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  })

  function test() {
    return (
      <div className="overflow-hidden min-h-screen mt-12 w-40 fixed z-40 bg-secondary-50 dark:bg-primary-900 text-primary-900 dark:text-secondary-400 flex flex-col justify-between">
      <div className="text-3xl flex flex-col mb-5 font-bold">
        {iconsData.map((link) => (
          <div onClick={() => {setActiveNav(true); setActiveSection(link.label);}}>
          <MenuButton key={link.id} id={link.id} icon={link.icon} iconClicked={link.iconClicked} label={link.label} clickedName={activeSection}/>
          </div>
        ))}
        <div className="mt-5"></div>
        <Line></Line>
      </div>
    </div>
    );
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 1280px)').matches) {
        setShowDiv(false);
      }
      console.log("click");
      
    };

    window.addEventListener('click', (e) => {
      const interval = setTimeout(() => {
        setActiveNav(false);
        console.log("no");
        
      }, 2000);
      return () => {
        clearInterval(interval);
      };

    });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleButtonClick = () => {
    setShowDiv(showDiv ? false : true);
  };

  return (
    <nav className="h-12 lg:min-h-screen min-w-10 w-screen lg:min-w-40 lg:w-40 fixed z-20 bg-secondary-50 dark:bg-primary-900 text-primary-900 dark:text-secondary-400 flex flex-col justify-between">
      
      <div className="text-3xl flex lg:flex-col mb-5 font-bold">
        <button
          onClick={handleButtonClick}
          className="max-[1280px]:visible lg:hidden w-full flex items-center max-[1280px]:mt-2 max-[1280px]:ml-3 lg:justify-center lg:mt-5 text-3xl"
        >
          <BiMenu className="" />
        </button>
        {iconsData.map((link) => (
           <div key={link.id} className='max-[1280px]:hidden ' onClick={() =>  {setActiveNav(true); setActiveSection(link.label)}}>
          <MenuButton key={link.id} id={link.id} icon={link.icon} iconClicked={link.iconClicked} label={link.label} clickedName={activeSection}/>
          </div>
        ))}
        <div className="mt-5"></div>
        <Line />
        <div className="flex visible  ml-5 mt-3 mb-3 max-[1280px]:mr-4 max-[1280px]:mb-0 max-[1280px]:ml-0">
          <DarkModeToggle />
        </div>
        {showDiv && test()}
      </div>
    </nav>
  );
}