"use client"

import React, { useRef } from 'react'
import { projectsData } from "@/lib/data";
import Image from 'next/image'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion';

type ProjectProps = ( typeof projectsData )[number];

export default function Project( { title, description, tags, imageUrl,} : ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div 
            className='group mb-4 sm:mb-8 last:mb-0'
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}>
            <section className='group bg-gray-100 max-w-[42rem] border 
                                border-black/8 overflow-hidden sm:pr-8 
                                relative sm:h-[20rem] rounded-xl
                                group-even:pl-8 hover:bg-gray-300 transition '>
                <div className='pt-4 pb-7 px-5 sm:pl-10 
                                sm:pr-2 sm:pt-10 sm:max-w-[50%] 
                                flex flex-col h-full 
                                group-even:ml-[18rem]'>
                    <h3 className='text-2xl font-semibold text-gray-900'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700'>
                        {description}  
                    </p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto h-[800px]'>
                        { tags.map((tag, index) => (
                            <li className='bg-black/[0.4] px-3 py-1 text-[0.7rem] 
                                        uppercase tracking-wider text-gray-800 
                                        rounded-full'
                                key={index}>
                                    {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <Image 
                    src={imageUrl} 
                    alt={title} 
                    quality={90} 
                    className='absolute top-8 -right-40 w-[28.25rem]
                                rounded-t-lg shadow-2xl
                                transition
                                group-even:right-[initial]
                                group-even:-left-40
                                group-hover:scale-[1.04]

                                group-even:group-hover:translate-x-3
                                group-even:group-hover:translate-y-3
                                group-even:group-hover:rotate-2

                                group-hover:-translate-x-3
                                group-hover:translate-y-3
                                group-hover:-rotate-2'
                />
            </section>
        </motion.div>
    )
}