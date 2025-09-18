import Footer from './Components/Footer'
import Intro from './Components/Intro'
import Project from './Components/Project'
import Skills from './Components/Skills'

const Page = () => {
  return (
    <div className=' flex flex-col gap-20 z-10 relative'>
        <Intro />
        <Project />
        <Skills />
        <Footer />
    </div>
  )
}

export default Page