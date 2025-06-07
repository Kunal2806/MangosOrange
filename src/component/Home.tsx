import { useEffect, useRef} from "react"

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if(videoRef.current){
      videoRef.current.playbackRate = 0.5;
    }
  
  }, [])
  
  return (
    <div className="w-screen flex flex-col text-center lg:text-start lg:flex-row justify-evenly items-center p-10 bg-[#fef0e7] ">
      <div >
        <div>
          <div>
          <p className="text-[40px]/10 font-extrabold">Empowering Education <br /> with <span className="text-[#EB6703]">Google</span></p>
          <p className="text-sm/5 text-[#7C7C7C] pt-14 font-poppins">As a certified Google Partner, we help educational institutions <br/>transform their digital learning environments with cutting-edge <br/>Google technologies. </p>
          </div>
          <div className="py-14">
            <a href="#requestDemo">
              <span className=" py-2 px-4 bg-[#EB6703] text-white rounded-md hover:bg-white hover:text-[#EB6703] border-2 border-[#EB6703]">Request Demo</span>
            </a>
            <a href="#ourServices ">
              <span className="m-6 py-2 px-4 bg-transparent  rounded-md hover:bg-white text-[#EB6703] border-2 border-[#EB6703]">Our Servicers</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center ">
        {/* <img width={"450px"} className="rounded-2xl" src="./images/Google-Partner-Banner.gif" alt="Google Partner" /> */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          src="./images/Google-Partner-Banner.mp4"></video>
      </div>
    </div>
  )
}

export default Home
