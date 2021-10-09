import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animation'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'
import Head from "next/head"
const index = () => {
    <Head>Web Developer | portfolio | Filip</Head>
    return (    
        <motion.div className="flex flex-col flex-grow px-6 pt-1" variants={routeAnimation} exit="exit" initial="initial" animate="animate">
            <h5 className="my-3 font-medium ">
            I have completed the JavaScript Academy at "Semos", Skopje, Macedonia, as well as the Scrimba FrontEnd Developer Bootcamp. I 
                have dived deep in React.js and its ecosystem.
                <span className="font-black"> I love Next.js </span>
                and every day I am spending a lot of time  watching tons of tutorials and videos on Udemy and YouTube to code better and mimic applications.
                I maintain the blog <span className="font-black">www.k9shrine.com</span>
                I also have a bachelor's degree in Enlgish language and literature.
            </h5>
<div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginRight: "-1.5rem", marginLeft:"-1.5rem"}}>
            <h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
            <motion.div className="grid gap-6 lg:grid-cols-2" animate="animate" initial="initial" variants={stagger}>
                {services.map(service=>(
                  <motion.div variants={fadeInUp}  key={service.title} className="bg-gray-200 rounded-lg dark:bg-dark-100 lg:col-span-1">
                <ServiceCard  service={service} />
                </motion.div>
                ))}
            </motion.div>
        </div>
        </motion.div>
    )
}

export default index
