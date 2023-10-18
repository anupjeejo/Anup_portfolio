"use client"

import { useSectionInView } from '@/lib/hooks';
import React from 'react'
import SectionHeading from './sectionHeading';
import { motion } from 'framer-motion';
import { sendEmail } from '../actions/sendEmail'
import SubmitBtn from './submit-btn';
import toast from "react-hot-toast"

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section id="contact" ref={ref}
             className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
             initial={{
                opacity: 0,
             }}
             whileInView={{
                opacity: 1,
             }}
             transition={{
                duration: 1,
             }}
             viewport={{
                once: true,
             }}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p className=''>
            You can contact me at{" "}
            <a className='underline' href='mailto:jeejoanup@gmail.com'>
                jeejoanup@gmail.com
            </a>
            {" "}or through this form
        </p>
        <form className='mt-10 flex flex-col'
              action={ async (formData) => {
                const { data, error } = await sendEmail(formData)

                if(error){
                  toast.error(error);
                  return;
                }

                toast.success("Email sent successfuly")
              }}>
            <input type="email" 
                   name='email'
                   className='h-14 rounded-lg border border-black/10 p-2'
                   placeholder='Your email'
                   required
                   maxLength={100}/>
            <textarea name='message'
                      className='h-52 my-3 rounded-lg border border-black/10 p-2 text-black'
                      placeholder='Your message'
                      required
                      maxLength={500}/>
            <SubmitBtn/>
        </form>
    </motion.section>
  )
}
