"use client";

import { ArrowDownRight, BsArrowDownRight, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
const services=[
  {
    num:"01",
    title : "Web Development",
    desc:"I build fast, responsive, and scalable websites tailored to your goals. From landing pages to full-stack platforms, I bring ideas to life with clean code.",
    href:""
  },
  {
    num:"02",
    title : "UI/UX Design",
    desc:"I design intuitive and engaging interfaces that enhance user experience.Every layout, interaction, and detail is crafted with usability in mind.",
    href:""
  },
  {
    num:"03",
    title : "Logo Design",
    desc:"I create unique, memorable logos that capture your brand’s personality.From initial concept to final design, I ensure every logo tells a story.",
    href:""
  },
  {
    num:"04",
    title : "SEO",
    desc:"I optimize websites to rank higher, load faster, and perform better.With strong on-page and technical SEO, I help your site get found organically.",
    href:""
  },
]

import {motion} from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-au">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.4,duration:0.4, ease:"easeIn"}} className="grid items-center md:grid-cols-2 gap-[60px]">
          {services.map((service,index)=>{
            return <div key={index} className="flex flex-col justify-center flex-1 gap-6 group">
              <div className="flex items-center justify-between w-full">
                <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">{service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent duration-500 flex justify-center items-center hover:-rotate-45">
                <BsArrowDownRight className="text-3xl text-primary"/>
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/60">{service.desc}</p>
              <div className="w-full border border-b-white/20"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
