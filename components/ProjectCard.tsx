import { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { ProjectProps } from '../types'
import Image from    "next/image"
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../animation'

const ProjectCard: FunctionComponent<{project:ProjectProps}> = ({project:{name, image_path, github_url, deployed_url, description, category, key_techs}}) => {
const [showDetail, setShowDetail]= useState(false)

    return (
        <div>
            <Image src={image_path} alt={name} className="cursor-pointer" onClick={()=>setShowDetail(true)} width="300" height="150" layout="responsive" />
            <p className="my-2 text-center">{name}</p>
        
        {
            showDetail && (
        
        
        
            <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
<motion.div variants={fadeInUp}>
 <motion.div animate="animate" initial="initial" variants={stagger}> <Image src={image_path} alt={name} layout="responsive" width="300" height="150" /></motion.div>
<motion.div  variants={fadeInUp} className="flex justify-center my-4 space-x-3">
    
    <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 dark:bg-dark-200">
        <AiFillGithub/> <span>Github</span>
    </a>
    <a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 dark:bg-dark-200">
        <AiFillProject/> <span>Project</span>
    </a>
</motion.div>
</motion.div>
<motion.div animate="animate" initial="initial" variants={stagger}>
    <motion.h2 variants={fadeInUp}  className="mb-3 text-lg font-medium md:text-2xl">{name}</motion.h2>
    <motion.h3 variants={fadeInUp}  className="mb-3 font-medium">{description}</motion.h3>
    <motion.div  variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
        {key_techs.map(tech=>{
            return (<span key={tech}
                                className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                >{tech}</span>
            )
        })}
        <button 
        className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
        ><MdClose onClick={()=>setShowDetail(false)} size={30}/></button>
        </motion.div>
</motion.div>



            </div>)}
        </div>
    )
}

export default ProjectCard
