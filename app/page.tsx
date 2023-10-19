import Intro from '@/components/intro'
import SectionDivider from '@/components/sectionDivider'
import About from '@/components/about'
import Projects from '@/components/projects'
import Image from 'next/image'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Contact from '@/components/contact'

export default function Home() {
  return (<div className='flex flex-col items-center px-4'>
            <Intro/>
            <SectionDivider/>
            <About/>
            <SectionDivider/>
            <Projects/>
            <SectionDivider/>
            <Skills/>
            <SectionDivider/>
            <Experience/>
            <SectionDivider/>
            <Contact/>
          </div>)
}
