import { RiComputerLine} from "react-icons/ri"
import { FaServer} from "react-icons/fa"
import { MdDeveloperMode} from "react-icons/md"
import { AiOutlineAntDesign, AiOutlineApi} from "react-icons/ai"
import { ServiceProps, SkillProps } from './types'
import {BsCircleFill} from "react-icons/bs"


export const services:ServiceProps[] = [{
    title: "FrontEnd Development",
    about: "I build beautiful and scalable SPA using <b>CSS</b>, <b>React.js (especially Next.js)</b>",
    Icon: RiComputerLine,
}, 
{title: "Backend Development",
about: "Creating and running a server using <b>Express</b>",
Icon: FaServer,
}, 
{Icon: AiOutlineApi,
title: "API Development",
about: "I can develop robust REST APIs using <b>Node.js</b>",
}, 
{title: "Database Storage",
about: "Using MongoDb with Mongoose to store data",
Icon: FaServer,
}, 
{Icon: MdDeveloperMode,
    title: "Learn new skills all the time",
    about: "Learning new stuff related to web development via udemy and YouTube.",
    }, 

    {Icon: AiOutlineAntDesign,
        title: "Trying to offer the best UX/UI experience",
        about: "Enrolled to <b>Google's UX certified course on Coursera</b>",
        }
]

export const languages:SkillProps[] = [
 {
     name: "React.js",
     level: "85%",
     Icon: BsCircleFill
 },
 {
    name: "Next.js",
    level: "85%",
    Icon: BsCircleFill
},
{
    name: "CSS",
    level: "70%",
    Icon: BsCircleFill
},
{
    name: "Node",
    level: "85%",
    Icon: BsCircleFill
}, {
    name: "Typescript",
    level: "72%",
    Icon: BsCircleFill
},
]

export const tools:SkillProps[] = [
    {
        name: "Git & GitHub",
        level: "85%",
        Icon: BsCircleFill
    },
    {
       name: "Bootstrap",
       level: "85%",
       Icon: BsCircleFill
   },
   {
       name: "MongoDb",
       level: "85%",
       Icon: BsCircleFill
   },
   {
       name: "Express",
       level: "80%",
       Icon: BsCircleFill
   }, {
       name: "Figma",
       level: "60%",
       Icon: BsCircleFill
   },
   ]