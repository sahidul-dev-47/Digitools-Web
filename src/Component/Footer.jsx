export default function Footer() {
  const links = {
    Product:   ["Features", "Pricing", "Templates", "Integrations"],
    Company:   ["About", "Blog", "Careers", "Press"],
    Resources: ["Documentation", "Help Center", "Community", "Contact"],
  };

  return (
    <footer className="w-full bg-[#101727] text-gray-400">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

          <div className="lg:col-span-2 flex flex-col gap-5">
            <span className="text-white text-2xl font-extrabold tracking-tight">
              DigiTools
            </span>
            <p className="text-sm leading-relaxed text-[#627382] max-w-xs">
              Premium digital tools for creators, professionals, and businesses. Work smarter
              with our suite of powerful tools.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold">Product</h4>
            <ul className="flex flex-col gap-3">
              {["Features", "Pricing", "Templates", "Integrations"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#627382] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold">Company</h4>
            <ul className="flex flex-col gap-3">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#627382] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold">Resources</h4>
            <ul className="flex flex-col gap-3">
              {["Documentation", "Help Center", "Community", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#627382] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold">Social Links</h4>
            <div className="flex items-center gap-3">

        
              
               <a href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white hover:bg-violet-600 flex items-center justify-center transition-colors">
                  <i className="fa-brands fa-square-instagram"></i>
              </a>


              
               <a href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white hover:bg-violet-600 flex items-center justify-center transition-colors"
              >
               <i className="fa-brands fa-facebook"></i>
              </a>

  
              
              <a  href="#"
                aria-label="X"
                className="w-9 h-9 rounded-full bg-white hover:bg-violet-600 flex items-center justify-center transition-colors"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>

            </div>
          </div>

        </div>


        <div className="border-t border-[#1e2a38] mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#627382]">© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#627382] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-[#627382] hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-[#627382] hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}