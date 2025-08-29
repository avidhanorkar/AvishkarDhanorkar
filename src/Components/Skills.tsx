
const Skills = () => {
    const stack = {
        techStack: {
            languages: ["JavaScript", "TypeScript", "Java", "Rust"],
            frontend: ["ReactJS", "TailwindCSS"],
            backend: ["Node.js", "Express.js", "Spring Boot", "TypeScript", "Rust"],
            database: ["MongoDB", "PostgreSQL"],
            tools: ["Git", "GitHub", "Postman", "VS Code"]
        }
    }

    const badgeStyle = "px-2 py-1 bg-[#1f2937] text-sm rounded-lg  text-white border border-gray-600 hover:scale-105 transition-transform duration-150";

    return (
        <div className="text-white lg:px-0 md:px-10 px-5">
            <p className="text-4xl font-thin font-mono mb-2">My Tech Stack</p>
            <p className="text-gray-400 mb-6">💻 I’m a self-taught developer with a passion for building things. Here’s what I know.</p>

            <div className="flex flex-col gap-6">
                {Object.entries(stack.techStack).map(([category, items]) => (
                    <div key={category} className=''>
                        <h3 className="text-xl font-semibold capitalize mb-2">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((item, index) => (
                                <span key={index} className={badgeStyle}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;
