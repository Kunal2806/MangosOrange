import About from "./component/About"
import Contact from "./component/Contact"
import Home from "./component/Home"
import Nav from "./component/Nav"
import Services from "./component/Services"

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <div className="fixed top-0 left-0 backdrop-blur-xl">
        <Nav/>
      </div>
      <div id="home" className="pt-[80px]">
        <Home/>
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="about" className="pt-[80px]">
        <About/>
      </div>
      <div id="contact" className="pt-[80px]">
        <Contact/>
      </div>
    </div>
  )
}

export default App
