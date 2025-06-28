import { File, Github, Instagram, Linkedin, Twitter } from "lucide-react"

const Intro = () => {
    return (
        <div className="flex flex-col text-white gap-5 w-screen lg:w-[45vw] lg:px-0 md:px-10  px-5">
            <div className="flex lg:flex-row flex-col-reverse gap-5 justify-between  ">
                <div className="flex gap-1 flex-col">
                    <img src="/ME.jpg" className="h-52 rounded-lg w-fit" alt="" />
                    <div className="flex flex-row gap-2 items-center text-white ">
                        <div className="bg-green-500 h-2 w-2 rounded-full"></div> 
                        <p className="font-semibold">Open to Work</p>
                    </div>
                </div>
                <div className="flex flex-row gap-10 justify-around">
                    <a href="https://www.github.com/avidhanorkar"><Github className="cursor-pointer" /></a>
                    <a href="https://www.linkedin.com/in/avishkar23"><Linkedin className="cursor-pointer" /></a>
                    <a href="https://www.instagram.com/this.avishkar"><Instagram className="cursor-pointer" /></a>
                    <a href="https://x.com/avidhanorkar23"><Twitter className="cursor-pointer" /></a>
                    <a href="https://drive.google.com/file/d/17v3Pd726wl2IsQwS76ekmdJtb4Vhon7H/view?usp=drive_link"><File className="cursor-pointer" /></a>
                </div>
            </div>

            <div>
                <p className="text-4xl font-thin font-mono">Hi, I'm Avishkar</p>
                <p className="text-gray-400 font-[500]">21, Pune | Full Stack Developer </p>

                <div className="summary mt-2">
                    <p className="text-gray-400">
                        Hello, I'm Avishkar Dhanorkar - a passionate Full Stack Developer from Pune. Currently,
                        I’m focused on backend mastery with Node.js, Express, MongoDB, and Spring Boot, while also
                        exploring Rust and AI integrations.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro