"use client"
import { BiUpArrowAlt } from 'react-icons/bi'


import ScrollLink from '@/hooks/ScrollLink'
import { useState } from 'react'
import { sendContactForm } from '@/lib/api';

const initValues = {name: "", email: "", msg: ""};
const initState = {values: initValues};

export default function Contact() {
    const [state, setState] = useState(initState);
    const [message, setMessage] = useState("");

    const {values} : any = state;

    const handleChange = ({target}:any) => setState((prev) => ({
        ...prev, values: {
            ...prev.values, 
            [target.name]: target.value,
        }
    }));

    function isCooldownElapsed(cooldownDuration : any) {
        const lastMessageTime = localStorage.getItem('lastMessageTime');
        if (!lastMessageTime) {
          return true; // If no previous message time, allow sending
        }
      
        const currentTime = Date.now();
        const timeDifference = currentTime - parseInt(lastMessageTime, 10);
      
        return timeDifference >= cooldownDuration;
      }
      
      // Function to set the last message time in localStorage
      function setLastMessageTime() {
        const currentTime: any = Date.now();
        localStorage.setItem('lastMessageTime', currentTime);
      }
      
      // Example usage when sending a message
      const cooldownDuration = 15000; // 1 minute cooldown
      
      

    const onSubmit = async (e:any) => {
        e.preventDefault();
        setState((prev) => ({
            ...prev,
        }))
        if (isCooldownElapsed(cooldownDuration)) {
          setMessage('Sending..');
            const res = await sendContactForm(values);
            setMessage(res.message);
            setLastMessageTime();
          } else {
         
            setMessage('Please wait before sending another message.');
          }
    }

    return (
        <main id="section-5" className='flex items-center min-h-screen  bg-fixed pt-10 lg:pt-0  flex-col justify-between text-[#000] dark:text-secondary-500 '>
            <div className=" p-5 flex flex-col w-[22rem] md:w-[42rem] bg-[#d0b7b2] dark:bg-[#1c1c1c] pb-5 items-center justify-center mt-auto mb-auto z-10">
            <h1 className='pb-3 text-3xl md:text-4xl'>Get in touch</h1>
              <form className='flex flex-col justify-center w-[70%]'>
                <label className='ml-1' htmlFor="email">Name</label>
                <input type="text" name="name" id="name" className='pl-1 pt-1 pb-1 text-[#000]' value={values.name} placeholder='e.g. Alex, Co' onChange={handleChange}  />

                <label className='ml-1 mt-2' htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className='pl-1 pt-1 pb-1 text-[#000]' value={values.email} placeholder='example@gmail.com' onChange={handleChange} />

                <label className='ml-1 mt-2' htmlFor="msg">Message</label>
                <textarea name="msg" id="msg" className='pl-1 max-h-52 min-h-[3rem] text-[#000]' value={values.msg} placeholder='Hey! Im reaching out because..' onChange={handleChange}/>

                <button onClick={onSubmit} className='w-full bg-[#101010] text-secondary-500 pt-2 pb-2 mt-5 mb-3'>Send message</button>
                <p>{message}</p>
                <div className='flex flex-col items-center justify-center mt-1 text-sm md:text-lg md:mt-[3rem] backdrop-brightness-90 pt-5 pb-5'>
                <p className='pl-2 pr-2 w-full text-center underline'>Alternative</p>
                <p className='pl-2 pr-2 w-full text-center'>Gmail: vijoh01@gmail.com</p>
                <p className='pl-2 pr-2 w-full text-center'>Phone: +46 76-164 61 20</p>
                </div>
              </form>
               
            </div>
            <ScrollLink href={"#section-1"} className='z-10 rounded-full p-3 mb-5 mt-5 bg-secondary-50 dark:bg-secondary-100 text-primary-50 dark:text-primary-100 self-center'>
              <BiUpArrowAlt className='rounded-full'></BiUpArrowAlt>
            </ScrollLink>
        </main>
    )
}