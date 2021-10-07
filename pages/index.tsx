import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

const index = () => {
    return (
        <div className="flex flex-col px-6 pt-1">
            <h5 className="my-3 font-medium ">
                I have completed the JavaScript Academy at "Semos", Skopje, Macedonia, and 
                focused on FrontEnd development therefore learnt React and have dived deep in its ecosystem.
                I love Next.js.
                Watch tons of tutorials, videos on YouTube to code better and mimic applications.
                I maintain the blog www.k9shrine.com
            </h5>
<div className="p-4 mt-5 bg-gray-400" style={{marginRight: "-1.5rem", marginLeft:"-1.5rem"}}>
            <h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
            <div className="grid gap-6 lg:grid-cols-2">
                {services.map(service=>(
                  <div key={service.title} className="bg-gray-200 rounded-lg lg:col-span-1">
                <ServiceCard  service={service} />
                </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default index
