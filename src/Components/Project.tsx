import Card from "./Card"

const Project = () => {

    const projectData = {
  "projects": [
    {
      "name": "StoryGrid",
      "description": "A full-stack blog platform with likes, comments, and CRUD operations. Basically Medium, but made by me and without venture capital.",
      "technologies": ["ReactJS", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      "link": "https://storygrid.vercel.app",
      "github": "https://github.com/avidhanorkar/StoryGrid"
    },
    {
      "name": "Hungry Chef",
      "description": "A restaurant brand platform featuring menu filtering, cart system, and address-based login — because food + code = ❤️.",
      "technologies": ["ReactJS", "Node.js", "Express.js", "MongoDB", "Razorpay", "TailwindCSS"],
      "link": "https://hungry-chef.vercel.app",
      "github": "https://github.com/avidhanorkar/Hungry-Chef"
    },
    {
      "name": "EduLearn",
      "description": "An AI-powered LMS where instructors upload, users learn, and everyone gets a certificate if they don’t fail the quiz. Bonus: Razorpay integration to make it rain.",
      "technologies": ["ReactJS", "Node.js", "Express.js", "MongoDB", "OpenAI", "TailwindCSS"],
    //   "link": "https://edulearn-ai.vercel.app",
      "github": "https://github.com/avidhanorkar/EduLearn"
    },
    {
      "name": "ResumeCraft",
      "description": "An AI-powered resume builder with ATS scoring, skill gap analysis, and real-time editing. It’s like your career got a dev team.",
      "technologies": ["ReactJS", "Express.js", "MongoDB", "Clerk", "TailwindCSS", "OpenAI"],
    //   "link": "https://resumecraft.ai", 
      "github": "https://github.com/avidhanorkar/ResumeCraft"
    }
  ]
}


    return (
        <div className="text-white flex flex-col w-screen lg:w-[45vw] gap-5 md:px-10 px-5 lg:px-0">
            <div>
                <p className="text-4xl font-thin font-mono">Projects</p>
                <p className="text-gray-400">🚀 turning caffeine into code: here are some of the things I’ve built (and still didn’t break… much).</p>
            </div>
            <div className="flex flex-col w-full gap-3">
                {
                    projectData.projects.map((project, index) => {
                        return (
                            <Card key={index} name={project.name} description={project.description} technologies={project.technologies} link={project.link} github={project.github} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Project