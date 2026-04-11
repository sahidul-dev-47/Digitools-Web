
import { useState } from 'react'
export default function Navbar({ cartCount }) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

        
        <div className="text-2xl font-extrabold text-violet-600 tracking-tight">
          DigiTools
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#products" className="hover:text-violet-600 transition-colors">Products</a>
          <a href="#features" className="hover:text-violet-600 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-violet-600 transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-violet-600 transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-violet-600 transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
      
          <a href="#cart" className="relative text-gray-700 hover:text-violet-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 6M7 13l-1-4m12 4l1.4 6M17 13l1-4M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-violet-600 text-white text-[10px] flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </a>

          
          <a href="#login" className="hidden sm:block text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors">
            Login
          </a>

        
          
           <a href="#get-started"
            className="px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold transition-colors">

            Get Started
          </a>

          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 hover:text-violet-600 transition-colors">
            
       <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700 bg-white`}>
        <a href="#products" className="hover:text-violet-600 transition-colors">Products</a>
        <a href="#features" className="hover:text-violet-600 transition-colors">Features</a>
        <a href="#pricing" className="hover:text-violet-600 transition-colors">Pricing</a>
        <a href="#testimonials" className="hover:text-violet-600 transition-colors">Testimonials</a>
       
        <a href="#login" className="hover:text-violet-600 transition-colors">Login</a>
        <a href="#get-started" className="w-fit px-5 py-2 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors">
          Get Started
        </a>
      </div>
    </nav>
  );
}