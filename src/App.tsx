import Contact from "./component/Contact"
import Footer from "./component/Footer"
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
      <div id="contact" className="pt-[80px]">
        <Contact/>
      </div>
      <div id="footer" className="pt-[80px]">
        <Footer/>
      </div>
    </div>
  )
}

export default App
