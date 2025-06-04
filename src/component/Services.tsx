
const Services = () => {
  return (
    <div className="h-dvh w-screen flex items-center flex-col p-[180px] font-poppins">
        <div>
            <p className="text-[30px] font-bold">Our <span className="text-[#EB6703]">Google Solutions </span>for Education</p>
            <p className="text-center text-sm font-light">We provide comprehensive Google solutions tailored specially for schools,<br/>
            colleges, and universities.</p>
        </div>
        <div className="span-cursor-pointer w-[1000px] lg:mt-40 lg:gap-x-30 flex items-center justify-center shadow-xl">
            <a href="#workspace"><span>Google Workspace</span></a>
            <a href="#chromeOs"><span>Chrome OS</span></a>
            <a href="#cloud"><span>Google Cloud</span></a>
            <a href="#customSolutions"><span>Custom Solutions</span></a>
        </div>
        <div className="w-screen flex justify-evenly m-20">
            <div>
                <p className="text-2xl font-bold">Google Workspace for Education</p>
                <p className="text-sm my-3">Transform teaching and learning with collaborative tools that enable <br/>
                anywhere, anytime learning and seamless communication between<br/>
                eduactora and students.</p>
                <div >
                    <ul className="mb-4">
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                            Gmail, Docs, Sheets for real-time collaboration                        </li>
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                            Google Meet for virtual classrooms and meetings                        </li>
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                            Google Classrooms for assignment management
                        </li>
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                            Drive for secure Cloud sharing and file sharing                        </li>
                    </ul>
                    
                </div>
            </div>
            <div>
                <img
                className="flex items-center h-[200px]"
                src="/images/workspace.gif"></img>
            </div>
        </div>
        
    </div>
  )
}

export default Services