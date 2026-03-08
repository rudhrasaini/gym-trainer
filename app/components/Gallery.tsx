export default function Gallery() {
  const items = [
    { emoji: "🏋️‍♂️", label: "Strength Training", cat: "Power" },
    { emoji: "🏃‍♂️", label: "Cardio Sessions", cat: "Endurance" },
    { emoji: "🥊", label: "Boxing Fitness", cat: "Combat" },
    { emoji: "🤸‍♂️", label: "Flexibility Work", cat: "Mobility" },
    { emoji: "🧗", label: "Functional Training", cat: "Performance" },
    { emoji: "🏅", label: "Competition Prep", cat: "Elite" },
  ];

  return (
    <section id="results" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <span className="text-sm text-muted bg-warm px-4 py-2 rounded-full inline-block mb-6">( Results )</span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-lg">
            Training in <span className="font-serif italic font-normal text-muted">Action</span>
          </h2>
          <p className="text-muted text-sm max-w-xs">Replace these placeholders with your actual training photos.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.label} className="group relative bg-card border border-white/5 rounded-[24px] overflow-hidden cursor-pointer hover:border-white/10 transition-all duration-500">
              <div className="aspect-[4/3] flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-700">{item.emoji}</div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs text-white/50 mb-1">// {item.cat}</p>
                <p className="font-bold">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
