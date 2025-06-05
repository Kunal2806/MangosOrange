import { useState } from "react";

const Services = () => {
    const [googleNav, setGoogleNav] = useState('workspace');

    const selectGoogleOpt = (id: any) => {
        setGoogleNav(id)
    }

  return (
    <div className="h-dvh w-screen flex items-center flex-col p-[100px] lg:p-[180px] font-poppins">
        <div>
            <p className="text-[30px] font-bold text-center "><span className="text-[#EB6703]">Google Solutions </span>for Education</p>
            <p className="text-center text-sm font-light">We provide comprehensive Google solutions tailored specially for schools,<br/>
            colleges, and universities.</p>
        </div>
        <div className="text-[11px] lg:text-lg span-cursor-pointer w-[1200px] mt-40 gap-x-5 lg:gap-x-30 flex items-center justify-center shadow-xl">
            <a onClick={()=>selectGoogleOpt("workspace")} className="flex ">
                <span>Google Workspace</span></a>
            <a onClick={()=>selectGoogleOpt("chromeOs")} ><span>Chrome OS</span></a>
            <a onClick={()=>selectGoogleOpt("cloud")}><span>Google Cloud</span></a>
            <a onClick={()=>selectGoogleOpt("gemini")}><span>Google Gemini</span></a>
            <a onClick={()=>selectGoogleOpt("customSolutions")} ><span>Custom Solutions</span></a>
        </div>
        <div className="w-screen flex justify-evenly m-20">
            {
                googleNav == "workspace" &&
                <>
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
                    <div className="py-8">
                        <a href="#requestDemo">
                        <span className="py-2 px-4 bg-[#EB6703] text-white rounded-md hover:bg-transparent hover:text-[#EB6703] border-2 border-[#EB6703]">Get Started</span>
                        </a>
                    </div>
                    </div>
                    <div>
                        <img
                        className="flex items-center h-[200px]"
                        src="/images/workspace.gif"></img>
                    </div>
                </>
}
{
                googleNav == "chromeOs" &&
                <>
                    <div>
                    <p className="text-2xl font-bold">Chrome OS for Education</p>
                    <p className="text-sm my-3">Secure, fast, and easy-to-manage devices that are perfect for the<br/>
                    classroom environment with built-in accessiability features and centralized<br/>
                    management.</p>
                    <div >
                        <ul className="mb-4">
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                Chromebooks and Chrome OS tablets for students                        </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                Built-in security with automatic updates                        </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                Google Admin Console for device management
                            </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                offline capabilities for learning anywhere                        </li>
                        </ul>
                        
                    </div>
                    <div className="py-8">
                        <a href="#requestDemo">
                        <span className="py-2 px-4 bg-[#EB6703] text-white rounded-md hover:bg-transparent hover:text-[#EB6703] border-2 border-[#EB6703]">Try Now</span>
                        </a>
                    </div>
                    </div>
                    <div>
                        <img
                        className="flex items-center h-[200px]"
                        src="/images/workspace.gif"></img>
                    </div>
                </>
}{
                googleNav == "cloud" &&
                <>
                    <div>
                    <p className="text-2xl font-bold">Google Cloud for Education</p>
                    <p className="text-sm my-3">Scalable infrastructure and powerful data analytics to support your <br/>
                    institution's digital transformation and research initiatives<br/></p>
                    <div >
                        <ul className="mb-4">
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                Secure cloud infrastructure and storage                        </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                BigQuery for educational data analysis                        </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                AI and machine learning capabilities
                            </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                Custom applications development                        </li>
                        </ul>
                        
                    </div>
                    <div className="py-8">
                        <a href="#requestDemo">
                        <span className="py-2 px-4 bg-[#EB6703] text-white rounded-md hover:bg-transparent hover:text-[#EB6703] border-2 border-[#EB6703]">Explore Cloud</span>
                        </a>
                    </div>
                    </div>
                    <div>
                        <img
                        className="flex items-center h-[200px]"
                        src="/images/workspace.gif"></img>
                    </div>
                </> 
                
}{
                googleNav == "gemini" &&
                <>
                    <div>
                    <p className="text-2xl font-bold">Google Gemini for Education</p>
                    <p className="text-sm my-3">AI-powered personalized learning experience that abapt to each<br/>
                    student's needs and automate administrative tasksfor educatoors.<br/></p>
                    <div >
                        <ul className="mb-4">
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                Personalized learning recommadations                        </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                Automated grading and feedback                        </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                Predictive analytics for student success
                            </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                natural learning processing for research                        </li>
                        </ul>
                        
                    </div>
                    <div className="py-8">
                        <a href="#requestDemo">
                        <span className="py-2 px-4 bg-[#EB6703] text-white rounded-md hover:bg-transparent hover:text-[#EB6703] border-2 border-[#EB6703]">Discover AI</span>
                        </a>
                    </div>
                    </div>
                    <div>
                        <img
                        className="flex items-center h-[200px]"
                        src="/images/workspace.gif"></img>
                    </div>
                </> 
                
}{                  
                googleNav == "customSolutions" &&
                <>
                    <div>
                    <p className="text-2xl font-bold">Custom Google Solutions</p>
                    <p className="text-sm my-3">Tailored integrations and custom development to extend Google's<br/>
                    capability for your specific educational needs<br/>
                    eduactora and students.</p>
                    <div >
                        <ul className="mb-4">
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                IMS integrations with Google Workspace                        </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                Google Maps platform for campus navigation                        </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                Google Analytics for institutional website
                            </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EB6703"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                Custom API development and integrations                       </li>
                        </ul>
                        
                    </div>
                    <div className="py-8">
                        <a href="#requestDemo">
                        <span className="py-2 px-4 bg-[#EB6703] text-white rounded-md hover:bg-transparent hover:text-[#EB6703] border-2 border-[#EB6703]">Customize Now</span>
                        </a>
                    </div>
                    </div>
                    <div>
                        <img
                        className="flex items-center h-[200px]"
                        src="/images/workspace.gif"></img>
                    </div>
                </>
}
        </div>
        
    </div>
  )
}

export default Services