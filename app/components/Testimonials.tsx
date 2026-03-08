export default function Testimonials() {
  const reviews = [
    { name: "Alex M.", role: "Lost 30 lbs in 4 months", text: "The personalized approach made all the difference. Best trainer I've ever worked with. Completely changed my relationship with fitness.", avatar: "A" },
    { name: "Sarah K.", role: "Online coaching client", text: "The online coaching program is incredible. I get all the support I need through WhatsApp and video calls. Results speak for themselves.", avatar: "S" },
    { name: "James R.", role: "Competition athlete", text: "Helped me prepare for my first bodybuilding competition. Placed 2nd! Couldn't have done it without this guidance and dedication.", avatar: "J" },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <span className="text-sm text-muted bg-warm px-4 py-2 rounded-full inline-block mb-6">( Testimonials )</span>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-14 max-w-2xl">
          Our happy clients give us impactful and{" "}
          <span className="font-serif italic font-normal text-muted">positive feedback</span> on our training programs.
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card border border-white/5 rounded-[24px] p-8 hover:border-white/10 transition-all duration-500">
              <p className="text-white/70 leading-relaxed mb-8">{r.text}</p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold">{r.avatar}</div>
                <div>
                  <p className="font-bold text-sm">{r.name}</p>
                  <p className="text-muted text-xs">{r.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">{Array(5).fill(null).map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
