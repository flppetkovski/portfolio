import { RiComputerLine} from "react-icons/ri"
import { FaServer} from "react-icons/fa"
import { MdDeveloperMode} from "react-icons/md"
import { AiOutlineAntDesign, AiOutlineApi} from "react-icons/ai"
import { ServiceProps } from './types'

export const services:ServiceProps[] = [{
    title: "FrontEnd Development",
    about: "I build beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b>, and <b>React.js - <b>SPECIALIZING IN NEXT.JS</b>",
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
    about: "Learning new stuff related to web development. Next on my TODO list are <b>React Native</b> and <b>Blockchain</b>",
    }, 

    {Icon: AiOutlineAntDesign,
        title: "Trying to offer the best UX/UI experience",
        about: "Enrolled to <b>Google's UX certified course on Coursera</b> & watching TONS of videos related to <b></b>UI/UX</b>",
        }
]