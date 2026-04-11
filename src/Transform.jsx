export default function Transform() {
  return (
    <section className="w-full bg-linear-to-r to-purple-500 from-indigo-600 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-6">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-violet-200 text-sm sm:text-base leading-relaxed">
          Join thousands of professionals who are already using DigiTools to work smarter.
          <br className="hidden sm:block" />
          Start your free trial today.
        </p>

    
        <div className="flex flex-col sm:flex-row items-center gap-4">
          
           <button
            className="px-6 py-3 rounded-full bg-white text-violet-600 text-sm font-bold hover:bg-violet-50 transition-colors"
          >
            Explore Products
          </button>
          
           <button
            className="px-6 py-3 rounded-full border border-white text-white text-sm font-bold hover:bg-white/10 transition-colors"
          >
            View Pricing
          </button>
        </div>

    
        <p className="text-violet-300 text-xs">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}