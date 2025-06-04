
const Home = () => {
  return (
    <div className="w-screen flex flex-col lg:flex-row justify-evenly items-center p-10 bg-[#fef0e7] ">
      <div >
        <div>
          <div>
          <p className="text-[40px]/10 font-extrabold">Empowering Education <br /> with <span className="text-[#EB6703]">Google</span></p>
          <p className="text-sm/5 text-[#7C7C7C] pt-4 font-poppins">As a certified Google Partner, we help educational institutions <br/>transform their digital learning environments with cutting-edge <br/>Google technologies. </p>
          </div>
          <div className="py-8">
            <a href="#requestDemo">
              <span className="py-2 px-4 bg-[#EB6703] text-white rounded-md hover:bg-transparent hover:text-[#EB6703] border-2 border-[#EB6703]">Request Demo</span>
            </a>
            <a href="#ourServices ">
              <span className="m-6 py-2 px-4 hover:bg-[#EB6703] hover:text-white rounded-md bg-transparent text-[#EB6703] border-2 hover:border-[#EB6703]">Our Servicers</span>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center hidden ">
        <img src="./images/googlePartners.png" alt="Google Partner" />
      </div>
    </div>
  )
}

export default Home
