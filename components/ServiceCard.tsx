import { FunctionComponent } from 'react'
import { ServiceProps } from '../types'

const ServiceCard:  FunctionComponent<{service: ServiceProps}> = ({service:{Icon, about, title}}) => {
   const createMarkup = ()=>{
       return {
         __html: about}
       
   }
   
    return (
        <div className="items-center p-2 space-x-4">
            <Icon  className="w-12 h-12 text-green"/>
            <div>
                <h4 className="font-bold">{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()}/>
            </div>
        </div>
    )
}

export default ServiceCard
