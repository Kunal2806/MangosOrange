import { useState } from "react";

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <div className=" relative w-screen h-[80px] flex items-center justify-between px-[50px] xl:px-[150px] shadow-xl font-poppins">

      <div className="h-full w-[288.75px] flex items-center">
        <img height={"60px"} src="./images/MOLogo.png" alt="logo" />
      </div>

      <div className=" cursor-pointer xl:hidden" onClick={()=>toggleButton()}>
        {
          isOpen?
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#999999"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#EB6703"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        }    
      </div>

      {
        isOpen &&
          <div className=" xl:hidden absolute span-cursor-pointer flex flex-col justify-start right-[50px] top-[100px] gap-y-10 shadow-2xl w-[80%] py-20 pl-10 rounded-4xl bg-white">
            <a href="#home"><span>Home</span></a>
            <a href="#services"><span>Services</span></a>
            <a href="#about"><span>About</span></a>
            <a href="#contact"><span>Contact</span></a>
            <a href="requestDemo"><span>Request Demo</span></a>
        </div>
      }
      

      <div className="hidden span-cursor-pointer w-[619px] h-full xl:flex items-center justify-between">
        <a href="#home"><span>Home</span></a>
        <a href="#services"><span>Services</span></a>
        <a href="#about"><span>About</span></a>
        <a href="#contact"><span>Contact</span></a>
        <a href="#requestDemo"><span className="py-2 px-4 bg-[#EB6703] text-white rounded-xl hover:bg-transparent border-2 border-[#EB6703]">Request Demo</span></a>
      </div>
    </div>
  )
}

export default Nav
