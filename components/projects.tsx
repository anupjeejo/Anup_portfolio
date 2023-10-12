import React from 'react'
import SectionHeading from './sectionHeading'
import { projectsData } from '@/lib/data'
import Project from "./project"

export default function projects() {
  return (
    <section>
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
