import { RiComputerLine} from "react-icons/ri"
import { FaServer} from "react-icons/fa"
import { MdDeveloperMode} from "react-icons/md"
import { AiOutlineAntDesign, AiOutlineApi} from "react-icons/ai"
import { ProjectProps, Category, ServiceProps, SkillProps } from './types'
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

   export const projects:ProjectProps[] = [
       {
           id:1,
name: "k9shrine - Blog",
description: "This is a blog dedicated to dogs",
image_path: "/images/k9shrine.PNG",
deployed_url: "https://www.k9shrine.com",
github_url: "https://github.com/flppetkovski/hundblog",
category: ["next.js"],
key_techs:["next.js", "tailwind", "serverless functions", "markdown"]
   },
   {
    id:2,
    name: "Amazona shop",
    description: "This is an amazon like shop",
    image_path: "/images/amazona.png",
    deployed_url: "https://petkovski-amazona.netlify.app",
    github_url: "https://github.com/flppetkovski/amazon-shop",
    category: ["next.js", "mongoDB"], 
    key_techs:["next.js", "materialUI", "paypal integration", "mongoDB", "Context API"]
       },
   ]