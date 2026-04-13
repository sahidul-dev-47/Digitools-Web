export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      tag: "Perfect for getting Started",
      price: 0,
      period: "month",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      cta: "Get Started Free",
      highlight: false,
    },
    {
      name: "Pro",
      tag: "Best for professionals",
      price: 29,
      period: "Month",
      badge: "Most Popular",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      cta: "Start Pro Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      tag: "For teams and businesses",
      price: 99,
      period: "Month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">


        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Choose the plan that fits your needs. Upgrade or downgrade any time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col gap-5 ${
                plan.highlight
                  ? "bg-violet-600 text-white shadow-2xl"
                  : "bg-white border border-gray-200 shadow-sm"
              }`}
            >
            
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-yellow-300 text-yellow-700 text-xs font-bold whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

            
              <div>
                <h3 className={`text-lg font-bold ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mt-0.5 ${plan.highlight ? "text-violet-200" : "text-gray-400"}`}>
                  {plan.tag}
                </p>
              </div>

            
              <div className="flex items-end gap-1">
                <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm mb-1 ${plan.highlight ? "text-violet-200" : "text-gray-400"}`}>
                  /{plan.period}
                </span>
              </div>

            
              <ul className="flex flex-col gap-2">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlight ? "text-violet-100" : "text-gray-600"}`}>
                    <i className="fa-solid fa-check text-green-300"></i>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-2 w-full py-3 rounded-full text-sm font-bold transition-colors ${
                  plan.highlight
                    ? "bg-white text-violet-600 hover:bg-violet-50"
                    : "bg-violet-600 text-white hover:bg-violet-700"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}