import userIcon from '../assets/user.png'

import boxIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";


const steps = [
  {
    id: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    icon: userIcon
  },
  {
    id: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    icon: boxIcon
  },
  {
    id: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    icon: rocketIcon
  }
];

export default function StepsSection() {
  return (
    <div className="py-16 bg-gray-50">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
        
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white p-15 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            
            <div className="absolute top-4 right-4 bg-linear-to-r to-purple-500 from-indigo-600 text-white text-xs w-9 h-9 flex items-center justify-center rounded-full shadow">
              {step.id}
            </div>

            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 rounded-full mb-4">
              <img
                src={step.icon}
                alt={step.title}
                className="w-8 h-8 object-contain"
              />
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {step.title}
            </h3>

            <p className="text-sm text-gray-500">
              {step.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}