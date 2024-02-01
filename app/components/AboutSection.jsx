"use client"
import React, {useTransition, useState} from 'react';
import TabButton from './TabButton';
import Image from 'next/image';


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='grid grid-cols-2 gap-2 text-start list-disc pl-2'>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>React</li>
        <li>CSS & Variants</li>
        <li>Next.js</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='text-start list-disc pl-2'>
        <li>Frontend Academy of Code.</li>
      
      </ul>
    )
  },
  {
    title: "Certification",
    id: "certifications",
    content: (
      <ul className='text-start list-disc pl-2'>
       
        <li>React Js Developer Certification.</li>
      </ul>
    )
  }
]


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [ isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }
  return (
    <section className='text-white mt-[5rem]' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 place-items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about3.jpg" width={500} height={500} alt=''/>
      <div className='flex flex-col text-left justify-center  sm:items-left items-right pt-11 mt-4 md:mt-0 h-full'>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-200 mb-[1rem] text-4xl font-bold">About Me</h2>
        <p className='text-base lg:text-lg m-w-[450px] mb-4 text-slate-300 font-semibold '>
          I&apos;m a Frontend Developer with passion for creating interactive and responsive web application. I have experience working with JavaScript, React, Node.js, HTML, CSS, Next.js and GIT.  
        </p>
       
        <p className='text-base lg:text-lg m-w-[450px] text-slate-300 font-semibold'>
        I&apos;m a quick learner and always open to new information that will expand my knowledge and skill set.  I&apos;m always excited to collaborate with other great Frontend Developers to create amazing Web-applications.
        </p>
        <div className="flex flex-row mt-8 flex-wrap justify-start">
          <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "} Skills {" "} </TabButton>
          <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "} Education {" "} </TabButton>
          <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>{" "} Certification {" "} </TabButton>
        </div>

        <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>

      </div>
      </div>
    </section>
  )
}

export default AboutSection