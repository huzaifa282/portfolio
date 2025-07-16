"use client";

import { Description } from "@radix-ui/react-dialog";
import {FaHtml5,FaCss3,FaJs,FaFigma,FaNodeJs,FaReact} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs, } from "react-icons/si"
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from '@/components/ui/tooltip'
import { ScrollArea } from "@/components/ui/scroll-area";
import { delay, motion } from "framer-motion";


const about={
  title:"About Me",
  Description:"lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Huzaifa Ahmad"
    },
    {
      fieldName:"Phone",
      fieldValue:"(+92) 315 755 4474"
    },
    {
      fieldName:"Experience",
      fieldValue:"4+ Years"
    },
    {
      fieldName:"Email",
      fieldValue:"alihuzaifa282@gmail.com"
    },
    {
      fieldName:"Nationality",
      fieldValue:"Pakistan"
    },
    {
      fieldName:"Freelance",
      fieldValue:"Available"
    },
  ]
}

const experience={
icon:'/assets/resume/badge.svg',
title:'My Experience',
description:"lorem ipsum dolor sit amet, consectetur adipiscing elit.",
items:[
  {
    company:'Fiverr',
    position:'Logo Designer',
    date:'2019 - 2020'
  },
  {
    company:'RizzCode Inc',
    position:'Full Stack Developer, Wordpress Developer',
    date:'2020 - 2025'
  },
  {
    company:'Freelance',
    position:'Full Stack Developer, UI/UX Designer',
    date:'2024 - Present'
  },
]
}

const education={
icon:'/assets/resume/cap.svg',
title:'My Education',
description:"lorem ipsum dolor sit amet, consectetur adipiscing elit.",
items:[
  {
    institution:'Edify College of IT',
    degree:'Web Development',
    duration:'July 2023 - Oct 2023',
  },
  {
    institution:'Punjab College',
    degree:'Intermediate',
    duration:'March 2021 - July 2023',
  },
  {
    institution:'The University of Faisalabad',
    degree:'Bachelors in Computer Science',
    duration:'September 2023 - Present',
  },
]
}

const skills={
  title:'My Skills',
  description:"lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  skillist:[
    {
      icon:<FaHtml5/>,
      name:"HTML 5",
    },
    {
      icon:<FaCss3/>,
      name:"CSS 3",
    },
    {
      icon:<FaJs/>,
      name:"Javascript",
    },
    {
      icon:<FaReact/>,
      name:"React JS",
    },
    {
      icon:<SiNextdotjs/>,
      name:"Next JS",
    },
    {
      icon:<SiTailwindcss/>,
      name:"Tailwind CSS",
    },
    {
      icon:<FaNodeJs/>,
      name:"Node Js",
    },
    {
      icon:<FaFigma/>,
      name:"Figma Design",
    },
  ]
}
const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:'easeIn'}}} exit={{opacity:0}} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6" >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full ">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1  gap-[30px]">
                  {experience.items.map((item,index)=>(
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                      <span className="text-accent">{item.date}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60 ">{item.company}</p>
                      </div>
                    </li>
                  ))} 
                </ul>
              </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left ">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1  gap-[30px]">
                  {education.items.map((item,index)=>(
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60 ">{item.institution}</p>
                      </div>
                    </li>
                  ))} 
                </ul>
              </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.skillist.map((skill,index)=>{
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">  
                          <div className="text-6xl transition-all duration-300 group-hover:text-accent">{skill.icon}</div>
                              </TooltipTrigger>
                            <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.Description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">{about.info.map((item,index)=>{
                return <li key={index} className="flex items-center justify-center gap-4 xl:justify-start xl:mx-0 ">
                  <span className="text-white/60">{item.fieldName}</span>
                  <span className="text-xl">{item.fieldValue}</span>
                  </li>
                })}</ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}
export default Resume
