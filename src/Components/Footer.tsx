import { File, Github, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <div className='flex justify-between pb-5 lg:px-0 md:px-10 px-5 items-center'>
            <p className="text-gray-400 text-center text-xs">Avishkar Dhanorkar</p>
            <div className='flex gap-5 text-gray-400'>
                <a target='_blank' href="https://www.github.com/avidhanorkar"><Github className="cursor-pointer hover:text-white" /></a>
                <a target='_blank' href="https://www.linkedin.com/in/avishkar23"><Linkedin className="cursor-pointer hover:text-white" /></a>
                <a target='_blank' href="https://www.instagram.com/avi.dhanorkar"><Instagram className="cursor-pointer hover:text-white" /></a>
                <a target='_blank' href="https://drive.google.com/file/d/17v3Pd726wl2IsQwS76ekmdJtb4Vhon7H/view?usp=drive_link"><File className="cursor-pointer hover:text-white" /></a>
            </div>
        </div>
    )
}

export default Footer
