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
        <div className='bg-[#020617] rounded-lg p-5 flex flex-col h-fit gap-5'>
            <div>
                <div className='flex w-full justify-between'>
                    <h3 className='text-2xl font-thin font-mono'>{name}</h3>
                    <div className='flex gap-5'>
                        {github ? <a href={github} aria-label={`View ${name} on GitHub`}><Github className='text-gray-400 text-xl cursor-pointer' aria-hidden="true" /></a> : null}
                        {link ? <a href={link} aria-label={`Visit ${name} website`}><Link className='text-gray-400 text-xl cursor-pointer' aria-hidden="true" /> </a>: null}
                    </div>
                </div>
                <p className='text-gray-400'>{description}</p>
            </div>
            <div className='flex flex-row gap-2 flex-wrap'>
                {technologies.map((tech, index) => (
                    <div className='px-2 py-1 rounded-lg bg-[#121030] flex flex-wrap hover:bg-[#020617]' key={index}>
                        <p className='text-white text-sm'>{tech}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card