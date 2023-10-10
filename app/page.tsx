import Intro from '@/components/intro'
import SectionDivider from '@/components/sectionDivider'
import About from '@/components/about'
import Image from 'next/image'

export default function Home() {
  return (<div className='flex flex-col items-center px-4'>
            <Intro/>
            <SectionDivider/>
            <About/>
          </div>)
}
