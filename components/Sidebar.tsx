import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import {GiTie} from "react-icons/gi"
import {useTheme} from "next-themes"
import Image from 'next/image'

const Sidebar = () => {

    const {theme, setTheme} = useTheme()

    const changeTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div>
            <Image src="/filip_petkovski.jpg" alt="my picture" className="mx-auto rounded-full " height="128px" width="128px" quality="100" layout="intrinsic" />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan"><span className="text-green">Filip </span> Petkovski</h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Web Developer</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200" href="/CV_Filip_Petkovski.pdf" download="CV_Filip_Petkovski.pdf" ><GiTie className="w-6 h-6"/> Download Resume</a>
            <div>
             <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
            <a href="https://github.com/flppetkovski?tab=re positories"><AiFillGithub className="w-8 h-8 cursor-pointer"/></a>
            <a href="https://www.linkedin.com/in/filip- petkovski-06766b100/"><AiFillLinkedin className="w-8 h-8 cursor-pointer"/></a>
            </div> 
                <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" style={{marginLeft: "-1rem", marginRight: "-1rem"}}>
                    <div className="flex items-center justify-center space-x-2"><GoLocation />
                    <span>Skopje, Macedonia</span>
                    </div>
                    <p className="my-2 text-sm">
                    flp_petkovski@yahoo.com
                </p>
                <p className="my-2">+38979248232</p>
                </div>
         
                <button onClick={()=>window.open("mailto: flp_petkovski@yahoo.com")} className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none">Email me</button>
                <button 
                onClick={changeTheme}
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400" >Toggle Theme</button>
            </div>
        </div>
    )
}

export default Sidebar
