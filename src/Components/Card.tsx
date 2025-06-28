import { Github, Link } from 'lucide-react'
import React from 'react'

interface CardProps {
    name: string
    description: string
    technologies: string[]
    github?: string
    link?: string
};

const Card: React.FC<CardProps> = ({ name, description, technologies, github, link }) => {
    return (
        <div className='bg-[#1a1a1a] rounded-lg p-5 flex flex-col h-fit gap-5'>
            <div>
                <div className='flex w-full justify-between'>
                    <p className='text-2xl font-thin font-mono'>{name}</p>
                    <div className='flex gap-5'>
                        {github ? <a href={github}><Github className='text-gray-400 text-xl cursor-pointer' /></a> : null}
                        {link ? <a href={link}><Link className='text-gray-400 text-xl cursor-pointer' /> </a>: null}
                    </div>
                </div>
                <p className='text-gray-400'>{description}</p>
            </div>
            <div className='flex flex-row gap-2 flex-wrap'>
                {technologies.map((tech, index) => (
                    <div className='px-2 py-1 rounded-lg bg-[#242424] flex flex-wrap hover:bg-[#1a1a1a]' key={index}>
                        <p className='text-white text-sm'>{tech}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card