"use client"

import React from 'react'
import SectionHeading from './sectionHeading'
import { projectsData } from '@/lib/data'
import Project from "./project"
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id='projects' className='scroll-mt-28'>
        <SectionHeading>My projects</SectionHeading>
        <div className='mb-[100px]'>
            {
                projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project}/>
                        </React.Fragment>
                    )
                )
            }
        </div>
    </section>
  )
}
