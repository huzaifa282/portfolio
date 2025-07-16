"use client";

import CountUp from "react-countup";

const stats = [
  { number: 4, text: "Years of Experience" },
  { number: 22, text: "Projects Completed" },
  { number: 9, text: "Happy Clients" },
  { number: 1, text: "Company Worked" },
];

const Stats = () => {
  console.log("Stats rendered");
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap max-w-[80vw] gap-6 mx-auto xl:max-w-none">
        {stats.map((item,index)=>{
            return( 
            <div className="flex items-center justify-center flex-1 gap-4 xl:justify-start" key={index}>
            <CountUp 
            key={`${item.text}-${item.number}`}
            end={item.number} 
            duration={5} 
            delay={2} 
            className="text-4xl font-extrabold xl:text-6xl"/>
            <p className={`${item.text.length < 15? "max-w-[100px]":"max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
        </div>
        );
        })}
      </div>
      </div>
    </section>
  )
}

export default Stats
