import bannerImage from '../assets/banner.png'

import icon from '../assets/play.png' 
export default function Banner() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">

        <div className="flex-1 flex flex-col items-start gap-6">

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-600 text-sm font-medium">
            <span className="w-2 h-2  rounded-full bg-violet-500 inline-block"></span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. 
            </p>        
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            
            <button 
              className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold transition-colors">
              Explore Products
            </button>
            
             <button
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-violet-600 text-violet-600 hover:bg-violet-50 text-sm font-bold transition-colors">
              <img src={icon} alt="icon" className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex-1 w-full">
          <img
            src={bannerImage}
            alt="AI Digital Workflow"
            className="w-full h-auto max-h-[480px] object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>

 <div className="bg-linear-to-r to-purple-500 from-indigo-600  text-white py-15 mt-20">
    <div className="max-w-6xl mx-auto flex justify-around text-center">
      <div>
        <h2 className="text-5xl font-bold">50K+</h2>
        <p className="text-lg font-medium mt-4">Active Users</p>
      </div>
      <div>
        <h2 className="text-5xl font-bold">200+</h2>
        <p className="text-lg font-medium mt-4">Premium Tools</p>
      </div>
      <div>
        <h2 className="text-5xl font-bold">4.9</h2>
        <p className="text-lg font-medium mt-4">Rating</p>
      </div>
    </div>
  </div>


    </section>
  );
}