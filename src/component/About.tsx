
const About = () => {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto text-gray-800 mt-20">
      <h2 className="text-3xl font-bold text-orange-600 mb-4">About <span className="text-gray-900">MangosOrange</span></h2>
      <p className="mb-4 text-gray-700">
        As a certified Google Partner specializing in education technology, we're dedicated to helping schools, colleges, and universities leverage Google's powerful tools to enhance teaching, learning, and administration.
      </p>
      <p className="mb-6 text-gray-700">
        Our team of experts has extensive experience in implementing Google solutions in educational environments, ensuring smooth adoption and maximum benefit for both educators and students.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow">
          <h3 className="text-lg font-semibold">100+ Institutions</h3>
          <p className="text-sm text-center">Trust our expertise</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Certified Experts</h3>
          <p className="text-sm text-center">Google certified professionals</p>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-xl">
            Contact Our Team
          </button>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow">
        <h3 className="text-xl font-bold mb-4">Why Choose MangosOrange?</h3>
        <ul className="list-none space-y-3 text-gray-700">
          <li className="flex items-start"><span className="text-orange-600 font-bold mr-2">✔</span> Specialized focus on education sector</li>
          <li className="flex items-start"><span className="text-orange-600 font-bold mr-2">✔</span> End-to-end implementation support</li>
          <li className="flex items-start"><span className="text-orange-600 font-bold mr-2">✔</span> Custom training programs for staff</li>
          <li className="flex items-start"><span className="text-orange-600 font-bold mr-2">✔</span> Ongoing support and optimization</li>
        </ul>
      </div>
    </div>
  );
}

export default About