import Bar from '../components/Bar'
import { languages, tools } from '../data'
import {motion} from "framer-motion"
import { fadeInUp, routeAnimation } from '../animation'


const resume = () => {
   

   
    return (
        <motion.div className="px-6 py-2" variants={routeAnimation} initial="initial" exit="exit" animate="animate">
     <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
         <motion.div variants={fadeInUp} initial="initial" animate="animate">
             <h5 className="my-3 text-2xl font-bold">
                 Education
             </h5>
             <div>
                 <h5 className="my-2 text-xl font-bold">WebDeveloper</h5>
                 <p className="font-semibold">
                     Completed the JavaScript Academy at Semos in Skopje, Macedonia (2019 - 2020), as well as the Scrimba FrontEnd Developer Bootcamp later in 2020.
                 </p>
                 <p className="my-3">
          I am currently specializing in Next.js and Typescript. Looking forward to transitioning to the Blockchain and completing Goggle's UX certified course.
                 </p>
             </div>
         </motion.div>
         <div>
             <h5 className="my-3 text-2xl font-bold">
                 Experience
             </h5>
             <motion.div variants={fadeInUp} initial="initial" animate="animate">
                 <h5 className="my-2 text-xl font-bold">Frontend Developer, MERN stack, Next.js</h5>
                 <p className="font-semibold">
                   (2019-2021)
                 </p>
                 <p className="my-3">
                         Maintaining www.k9shrine.com and freelancing.
                 </p>
             </motion.div>
         </div>
     </div>
     
     <div className="grid grid-cols-2 gap-6 md">
         <div>
             <h5 className="text-2xl font-bold m3">Languages & frameworks</h5>
             <div className="my-2">
                 {languages.map(language => (
                     <Bar data={language} key={language.name} />
                 ))}
             </div>
         </div>
   
         <div>
             <h5 className="text-2xl font-bold m3">Tools & Software</h5>
             <div className="my-2">
                 {tools.map(tool => (
                     <Bar data={tool} key={tool.name} />
                 ))}
             </div>
         </div>
     </div>

     </motion.div>


    )
}

export default resume
