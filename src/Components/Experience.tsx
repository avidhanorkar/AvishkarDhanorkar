import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: "Edgeverve - Infosys Finacle",
            role: "Software Engineering Intern",
            duration: "Feb 2026 - Present",
            logo: "data:image/jpeg;base64,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",
            description: "Working on the Infosys Finacle project, the industry-leading digital banking solution suite. Immersed in banking fundamentals, learning domain-specific architectures, and contributing to the core product ecosystem.",
            technologies: ["Finacle", "Banking Fundamentals"]
        }
    ];

    return (
        <div className="text-white flex flex-col w-screen lg:w-[45vw] gap-5 md:px-10 px-5 lg:px-0">
            <div>
                <h2 className="text-4xl font-thin font-mono">Experience</h2>
                <p className="text-gray-400">💼 where I learned that production databases are not meant for testing.</p>
            </div>
            
            <div className="flex flex-col w-full gap-5">
                {experiences.map((exp, index) => (
                    <div key={index} className='bg-[#020617] rounded-lg p-5 flex flex-col sm:flex-row gap-5 items-start h-fit border border-gray-800/50 relative overflow-hidden'>
                        <div className="h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 rounded-md overflow-hidden flex items-center justify-center">
                            {exp.logo ? (
                                <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                            ) : (
                                <div className="w-full h-full bg-gray-800 text-white flex items-center justify-center font-bold text-xl rounded">
                                    {exp.company.charAt(0)}
                                </div>
                            )}
                        </div>
                        
                        <div className='flex flex-col gap-2 w-full'>
                            <div className='flex flex-col sm:flex-row w-full justify-between items-start sm:items-center'>
                                <div>
                                    <h3 className='text-xl sm:text-2xl font-thin font-mono'>{exp.role}</h3>
                                    <p className='text-gray-300 font-semibold'>{exp.company} <span className="text-gray-500 font-normal text-sm ml-1">(An Infosys Company)</span></p>
                                </div>
                                <div className='mt-1 sm:mt-0'>
                                    <span className="text-xs px-2 py-1 bg-[#121030] text-emerald-400 rounded-full border border-emerald-900/50 whitespace-nowrap">
                                        {exp.duration}
                                    </span>
                                </div>
                            </div>
                            
                            <p className='text-gray-400 mt-2 text-sm sm:text-base leading-relaxed'>
                                {exp.description}
                            </p>

                            {exp.technologies && exp.technologies.length > 0 && (
                                <div className='flex flex-row gap-2 flex-wrap mt-2'>
                                    {exp.technologies.map((tech, idx) => (
                                        <div className='px-2 py-1 rounded-lg bg-[#121030] border border-gray-800 flex items-center' key={idx}>
                                            <p className='text-gray-300 text-xs'>{tech}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
