"use client"

import React from 'react'
import SectionHeading from './sectionHeading'
import { useSectionInView } from '@/lib/hooks';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data';

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <section id="experience" ref={ref} className='scroll-mt-28'>
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor=''>
                {
                    experiencesData.map((experienceItem, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement 
                                contentStyle={{
                                    background: "#000000",
                                    boxShadow: "none",
                                    border: "1px solid rgba(0, 0, 0, 0.05)",
                                    textAlign: "left",
                                    padding: "1.3rem 2rem"
                                }}
                                contentArrowStyle={{
                                    borderRight: "0.4rem solid #000000"
                                }}
                                date={experienceItem.date}
                                icon={experienceItem.icon}
                                iconStyle={{
                                    background: "black",
                                    fontSize: "1.5rem"
                                }}
                            >
                                <h3>{experienceItem.title}</h3>
                                <p>{experienceItem.location}</p>
                                <p>{experienceItem.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
        </VerticalTimeline>
    </section>
  )
}
