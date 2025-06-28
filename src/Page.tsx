import Footer from './Components/Footer'
import Intro from './Components/Intro'
import Project from './Components/Project'
import Skills from './Components/Skills'

const Page = () => {
  return (
    <div className=' flex flex-col gap-20'>
        <Intro />
        <Project />
        <Skills />
        <Footer />
    </div>
  )
}

export default Page