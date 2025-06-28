import { File, Github, Instagram,  Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <div className='flex justify-between pb-5 lg:px-0 md:px-10 px-5 items-center'>
            <p className="text-gray-400 text-center text-xs">Avishkar Dhanorkar</p>
            <div className='flex gap-5 text-gray-400'>
                <a href="https://www.github.com/avidhanorkar"><Github className="cursor-pointer" /></a>
                    <a href="https://www.linkedin.com/in/avishkar23"><Linkedin className="cursor-pointer" /></a>
                    <a href="https://www.instagram.com/this.avishkar"><Instagram className="cursor-pointer" /></a>
                    <a href="https://www.github.com/avidhanorkar"><File className="cursor-pointer" /></a>
            </div>
        </div>
    )
}

export default Footer