
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto flex md:grid-cols-4 gap-8 px-6 justify-between">

        <div>
          <img src="./images/MOLogo.png" alt="MangosOrange Logo" className="mb-4 w-40" />
          <p className="mb-4">Empowering education through <br></br>innovative Google technology solutions.</p>
          
        </div>

        <div>
          <h4 className="text-white font-bold mb-3">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Google Workspace</a></li>
            <li><a href="#" className="hover:underline">Chrome OS</a></li>
            <li><a href="#" className="hover:underline">Google Cloud</a></li>
            <li><a href="#" className="hover:underline">Google Gemini</a></li>
            <li><a href="#" className="hover:underline">Custom Solutions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Case Studies</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Webinars</a></li>
            <li><a href="#" className="hover:underline">Training</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3">Contact US</h4>
          <p className="mb-4">Ask Your Query</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-md text-white"
            />
            <button className="bg-orange-600 hover:bg-orange-700 px-4 rounded-r-md text-white">
              ➤
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 px-6 flex flex-col md:flex-row justify-between text-sm">
        <p>© 2023 MangosOrange. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer