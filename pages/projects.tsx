import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp, routeAnimation, stagger } from '../animation';
import ProjectCard from '../components/ProjectCard'
import ProjectsNavbar from '../components/ProjectsNavbar';
import { projects as projectsData } from '../data'
import { Category } from '../types';

const Projects = () => {

  const [projects, setProjects] = useState(projectsData)
  const [activeItem, setActiveItem] = useState("all")
  const [showDetail, setShowDetail]= useState<null | number>(null)



  const handleFilterCategory = (category: Category | "all")=>{
if (category === "all") {
  setProjects(projectsData)
  setActiveItem(category)
  setShowDetail(null)
  return
}

const newArray = projectsData.filter(project=>project.category.includes(category))
setShowDetail(null)

setProjects(newArray)
setActiveItem(category)
  }

    return (
    <motion.div className="px-5 py-2 overflow-y-scroll" style={{height:"65vh"}} variants={routeAnimation} initial="initial" animate="animate" exit="exit">
<ProjectsNavbar handleFilterCategory={handleFilterCategory} active={activeItem} />
        <motion.div animate="animate" initial="initial" variants={stagger} className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <motion.div variants={fadeInUp} key={project.name} className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}  />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects
