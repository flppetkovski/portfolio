import { IconType } from 'react-icons'

export type ServiceProps = {
    title: string
    about: string
    Icon: IconType
    children?: any
}

export type SkillProps = {
    name: string
    level: string
    Icon: IconType
}

export type ProjectProps = {
    id:number
    name: string
    description: string
    image_path: string
    deployed_url: string
    github_url: string
    category: Category[]
    key_techs: string[]
}

export type Category = "react" | "node"  | "next.js" | "typescript" | "mongo" | "express"