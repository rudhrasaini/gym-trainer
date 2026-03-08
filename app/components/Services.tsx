export default function Services() {
  const services = [
    { icon: "💪", title: "Personal\nTraining", tags: ["Strength", "Conditioning", "Form"], price: "$60/session" },
    { icon: "🥗", title: "Nutrition\nPlanning", tags: ["Meal Plans", "Diet", "Macros"], price: "$40/month" },
    { icon: "👥", title: "Group\nTraining", tags: ["HIIT", "Cardio", "Community"], price: "$25/session" },
    { icon: "📱", title: "Online\nCoaching", tags: ["Remote", "WhatsApp", "Video"], price: "$80/month" },
    { icon: "🏆", title: "Competition\nPrep", tags: ["Bodybuilding", "Powerlifting", "Stage"], price: "$100/session" },
  ];

  return (
    <section id="services" className="relative py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <span className="text-sm text-muted bg-warm px-4 py-2 rounded-full inline-block mb-6">( Services )</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-lg mb-14">
          What I <span className="font-serif italic font-normal text-muted">Offer</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group bg-card border border-white/5 rounded-[24px] p-7 hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-warm group-hover:bg-black/5 flex items-center justify-center text-2xl mb-6 transition-colors duration-500">{s.icon}</div>
              <h3 className="text-xl font-bold whitespace-pre-line leading-tight mb-4">{s.title}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs text-muted group-hover:text-black/50 bg-warm group-hover:bg-black/5 px-3 py-1 rounded-full transition-colors duration-500">+ {t}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-black/10 transition-colors duration-500">
                <p className="font-bold">{s.price}</p>
                <span className="w-8 h-8 rounded-full border border-white/10 group-hover:border-black/20 flex items-center justify-center text-sm group-hover:bg-black group-hover:text-white transition-all duration-500">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
