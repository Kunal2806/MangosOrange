
const Contact = () => {
  return (
    <div className=" bg-orange-600 grid md:grid-cols-2 gap-0 max-w-7xl mx-auto rounded-xl overflow-hidden shadow items-center">
      <div className=" text-white p-8">
        <h2 className="text-5xl font-bold mb-16">Ask your Queries <br/> or Request a Demo</h2>
        <p className="mb-6 text-lg">
          Ready to transform your institution with Google's education technology? Schedule a personalized demo with our experts.
        </p>
        <ul className="space-y-4 text-white text-sm">
          <li className="flex items-start">
            <div>
              <strong>Personalized Consultation</strong><br />
              Tailored to your institution's needs
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-white font-bold mr-2">✔</span>
            <div>
              <strong>Live Product Walkthrough</strong><br />
              See the solutions in action
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-white font-bold mr-2">✔</span>
            <div>
              <strong>Q&A with Experts</strong><br />
              Get all your questions answered
            </div>
          </li>
        </ul>
      </div>

      <div className="p-8 bg-white">
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="text" placeholder="Institution Name" className="w-full p-3 border border-gray-300 rounded-lg" />
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>Select a solution</option>
            <option>Google Workspace for Education</option>
            <option>Chromebook Deployment</option>
            <option>Training & Support</option>
          </select>
          <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg h-32" />
          <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact