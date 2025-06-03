
const Nav = () => {
  return (
    <div className="w-screen h-[80px] flex items-center justify-between px-[150px] shadow-xl font-poppins">
      <div className="h-full w-[288.75px] flex items-center">
        <img height={"60px"} src="./images/MOLogo.png" alt="logo" />
      </div>
      <div className="span-cursor-pointer w-[619px] h-full flex items-center justify-between">
        <span>Home</span>
        <span>Services</span>
        <span>About</span>
        <span>Contact</span>
        <span className="py-2 px-4 bg-[#EB6703] text-white rounded-md">Request Demo</span>
      </div>
    </div>
  )
}

export default Nav
