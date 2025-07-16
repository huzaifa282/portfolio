import Link from "next/link"
import {FaGithub, FaLinkedin, FaYoutube, FaTwitter} from 'react-icons/fa'
const socials=[
    {icon: <FaGithub/>, path:'https://github.com/huzaifa282'},
    {icon: <FaLinkedin/>, path:'https://www.linkedin.com/in/huzaifa-ahmad-313062202/'},
    // {icon: <FaYoutube/>, path:''},
    // {icon: <FaTwitter/>, path:''},
]

const Social=({containerStyles, iconsStyles, })=> {
  return<div className={containerStyles}>
    {socials.map((item,index)=>{
        return <Link key={index} href={item.path} className={iconsStyles}>
            {item.icon}
        </Link>
    })}
  </div>
}

export default Social
