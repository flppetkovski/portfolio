import ServiceCard from '../components/ServiceCard'
import { services } from '../data'
services
ServiceCard
const resume = () => {
    return (
        <div className="p-4">
            <h5>
                I have completed the JavaScript Academy at "Semos", Skopje, Macedonia. I am 
                focused on FrontEnd development therefore I have dived deep React.js and its ecosystem.
                I love Next.js.
                Spend a lot of time every day watching tons of tutorials and videos on YouTube to code better and mimic applications.
                I maintain the blog <span className="font-black">www.k9shrine.com</span>
            </h5>
            <h6>What I offer</h6>
            <div>
                {services.map(service=>(
                <ServiceCard key={service.title} service={service}
                 />))}
            </div>
        </div>
    )
}

export default resume
