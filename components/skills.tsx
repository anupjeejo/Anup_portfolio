"use client"

import React from 'react'
import SectionHeading from './sectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05  * index,
        }
    }),
  };

  return (
    <section ref={ref} 
             id='skills'
             className='mb-28 max-w-[53rem] scroll-mt-28 
                        text-center sm:mb-40' >
        <SectionHeading>Skills</SectionHeading>
    <ul className='flex flex-wrap justify-center gap-2 text-lg
                   text-gray-200'>
        {
            skillsData.map((skill, index) => (
                <motion.li key={index}
                    className='bg-gray-700 rounded-full px-4 py-2 text-xl my-1'
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                    custom={index}
                >
                    {skill}
                </motion.li>
            ))
        }
    </ul>
    </section>
  )
}
