"use client"
import React, {useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTags from './ProjectTags';
import { motion, useInView } from 'framer-motion';



const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "social web application",
    image: "/images/1.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Okolijerry/",
    previewUrl: "https://htmlpreview.github.io/?https://github.com/okolijerry/bankApp/blob/main/bankApp/index.html",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Pixel perfect",
    image: "/images/2.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Okolijerry/",
    previewUrl: "https://htmlpreview.github.io/?https://github.com/okolijerry/restaurant/blob/master/public/index.html",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Buy and sell Services",
    image: "/images/3.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Okolijerry/",
    previewUrl: "https://htmlpreview.github.io/?https://github.com/okolijerry/bankApp/blob/main/bankApp/index.html",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Order meals online",
    image: "/images/4.png",
    tag: ["All", "Mobile"],
    gitUrl:"https://github.com/Okolijerry/",
    previewUrl: "https://htmlpreview.github.io/?https://github.com/okolijerry/restaurant/blob/master/public/index.html",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/5.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Okolijerry/",
    previewUrl: "https://htmlpreview.github.io/?https://github.com/okolijerry/bankApp/blob/main/bankApp/index.html",
  },
  {
    id: 6,
    title: "Bank Application",
    description: "Safe and more efficient banking solution",
    image: "/images/6.png",
    tag: ["All", "Mobile"],
    gitUrl:"https://github.com/Okolijerry/",
    previewUrl: "https://htmlpreview.github.io/?https://github.com/okolijerry/restaurant/blob/master/public/index.html",
  },
  {
    id: 7,
    title: "Fast Food",
    description: "Healthy Foods accessible to all.",
    image: "/images/7.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Okolijerry/",
    previewUrl: "https://htmlpreview.github.io/?https://github.com/okolijerry/bankApp/blob/main/bankApp/index.html",
  },
  {
    id: 8,
    title: "FOR kids",
    description: "Pg rated Books and toys for kids",
    image: "/images/8.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Okolijerry/",
    previewUrl: "https://htmlpreview.github.io/?https://github.com/okolijerry/restaurant/blob/master/public/index.html",
  },
  {
    id: 9,
    title: "Dishes",
    description: "Savour every bite till the last",
    image: "/images/9.png",
    tag: ["All", "Mobile"],
    gitUrl:"https://github.com/Okolijerry/",
    previewUrl: "https://htmlpreview.github.io/?https://github.com/okolijerry/bankApp/blob/main/bankApp/index.html",
  },
  {
    id: 10,
    title: "Automobiles",
    description: "Easily find and sell car alternate parts",
    image: "/images/11.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/Okolijerry/",
    previewUrl: "https://htmlpreview.github.io/?https://github.com/okolijerry/restaurant/blob/master/public/index.html",
  },
  {
    id: 11,
    title: "Photography",
    description: "Make memories, Capture every moment.",
    image: "/images/12.png",
    tag: ["All", "Mobile"],
    gitUrl:"https://github.com/Okolijerry/",
    previewUrl: "https://htmlpreview.github.io/?https://github.com/okolijerry/restaurant/blob/master/public/index.html",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: {y:50, opacity: 0},
    animate: {y:0, opacity: 1},
    transition: {duration: .5}
  };

  return (
    <section >

    <h2 className='text-center text-4xl font-bold  mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-200'>My Projects</h2>

    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
     <ProjectTags onClick={handleTagChange} name="All" isSelected={tag === "All"}/>

     <ProjectTags onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>

     <ProjectTags onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"}/>
    </div>
    <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>{filteredProjects.map((project, index) => (
    <motion.li variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{duration: .3, delay: index * .4}} key={index}>    <ProjectCard title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>
    </motion.li>))} 
    </ul>
    
    </section>
  )
}

export default ProjectSection