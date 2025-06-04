import Home from "./component/Home"
import Nav from "./component/Nav"

const App = () => {
  return (
    <div className="min-h-screen w-screen">
      <div className="fixed">
        <Nav/>
      </div>
      <div id="home">
        <Home/>
      </div>
    </div>
  )
}

export default App
