import { AboutMe } from "./components/AboutMe"
import { BannerSection } from "./components/BannerSection"
import { ProjectSection } from "./components/ProjectSection"
import { TechSection } from "./components/TechSection"
import { Footer } from "./components/footer"
import { Header } from "./components/header"


function App() {

  return (
    <>
      <Header />
      <BannerSection/>
      <AboutMe/>
      <TechSection/>
      <ProjectSection/>
      <Footer />
    </>
  )
}

export default App
