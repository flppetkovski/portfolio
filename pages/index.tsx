import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animation'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'
import Head from "next/head"
const index = () => {
    return (    
       <> <Head><title>Web Developer | portfolio | Filip</title></Head>
        <motion.div className="flex flex-col flex-grow px-6 pt-1" variants={routeAnimation} exit="exit" initial="initial" animate="animate">
            <h5 className="my-3 font-medium ">
            I have completed the JavaScript Academy at "Semos", Skopje, Macedonia, as well as the Scrimba FrontEnd Developer Bootcamp. I 
                have dived deep in React.js and its ecosystem.
                <span className="font-black"> I love Next.js </span>
                and every day I spend a lot of time trying to improve my skills.
                I maintain the blog <span className="font-black">www.k9shrine.com.</span>
            <p>I also have a bachelor's degree in Enlgish language and literature.</p>
            </h5>
<div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginRight: "-1.5rem", marginLeft:"-1.5rem"}}>
            <h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
            <motion.div className="grid gap-6 lg:grid-cols-2"  variants={stagger}>
                {services.map(service=>(
                  <motion.div variants={fadeInUp} animate="animate" initial="initial"  key={service.title} className="bg-gray-200 rounded-lg dark:bg-dark-100 lg:col-span-1">
                <ServiceCard  service={service} />
                </motion.div>
                ))}
            </motion.div>
        </div>
        </motion.div>
    </>)
}

export default index
