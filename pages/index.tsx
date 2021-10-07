import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

const index = () => {
    return (
        <div className="flex flex-col flex-grow px-6 pt-1">
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
            <div className="grid gap-6 lg:grid-cols-2">
                {services.map(service=>(
                  <div key={service.title} className="bg-gray-200 rounded-lg dark:bg-dark-100 lg:col-span-1">
                <ServiceCard  service={service} />
                </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default index
