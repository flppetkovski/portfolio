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
    level: "75%",
    Icon: BsCircleFill
},
{
    name: "Node",
    level: "75%",
    Icon: BsCircleFill
}, {
    name: "Typescript",
    level: "75%",
    Icon: BsCircleFill
},
]

export const tools:SkillProps[] = [
    {
        name: "Github",
        level: "80%",
        Icon: BsCircleFill
    },
    {
       name: "English",
       level: "100%",
       Icon: BsCircleFill
   },
   {
       name: "Mongo",
       level: "80%",
       Icon: BsCircleFill
   },
   {
       name: "Express",
       level: "90%",
       Icon: BsCircleFill
   }, {
       name: "Testing",
       level: "67%",
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
key_techs:["next.js", "tailwind", "markdown"]
   },
   {
    id:2,
    name: "Amazona shop",
    description: "This is an amazon like shop",
    image_path: "/images/amazona.PNG",
    deployed_url: "https://petkovski-amazona.netlify.app",
    github_url: "https://github.com/flppetkovski/amazon-shop",
    category: ["next.js", "mongo"], 
    key_techs:["next.js", "materialUI", "paypal integration", "mongoDB", "Context API"]
       },
       { id:3,
        name: "Spotify - clone",
        description: "A spotify clone with music player (if you have PREMIUM spotify account) , authentication and search functionality.",
        image_path: "/images/spotify-clone.PNG",
        deployed_url: "https://petkovski-spotify.netlify.app",
        github_url: "https://github.com/flppetkovski/spotify-clone",
        category: ["next.js"], 
        key_techs:["next.js", "Spotify API", "Tailwind" ]
           },
      { id:4,
       name: "Valtech Landing Page",
       description: "A responsive landing page for Valtech",
       image_path: "/images/valtech.PNG",
       deployed_url: "https://petkovski-valtech.netlify.app/",
       github_url: "https://github.com/flppetkovski/valtech",
       category: [], 
       key_techs:["javascript, css" ]
          },
          { id:5,
            name: "Weather PWA",
            description: "PWA for getting weather. Installable on Mobile and PC",
            image_path: "/images/weather-pwa.PNG",
            deployed_url: "https://petkovski-weather.netlify.app/",
            github_url: "https://github.com/flppetkovski/weather-pwa",
            category: ["react"], 
            key_techs:["react", "progressive web app - PWA" ]
               },
           { id:6,
            name: "Expense calculator",
            description: "This is the first project I ever built at the end of 2018, displayed for reference only. It's for For Desktop only.",
            image_path: "/images/expense-calculator.PNG",
            deployed_url: "https://petkovski-expense-calculator.netlify.app/",
            github_url: "https://github.com/flppetkovski/expense-calculator-fe",
            category: ["react", "express", "node", "mongo"], 
            key_techs:["react", "materialUI", "mongoDB", "node", "express" ]
               },
   ]