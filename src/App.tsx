import Home from "./component/Home"
import Nav from "./component/Nav"

const App = () => {
  return (
    <div className="min-h-screen w-screen">
      <div className="fixed top-0 left-0 backdrop-blur-xl">
        <Nav/>
      </div>
      <div id="home" className="mt-[80px]">
        <Home/>
      </div>
    </div>
  )
}

export default App
